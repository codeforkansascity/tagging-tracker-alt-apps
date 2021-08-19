// this is trying to detect browser by user agent not really great
// but this particular app has a fixed, bottom navbar which is problematic with Safari
// since the Safari bottom menu bar overlaps the browser
// the Safari menu bar height changes though so the magic number 44px is a best guess pulled from some site
// initially I saw that when you scroll down the Safari bottom menu goes away/comes back scrolling up
// but it seems if you don't have overflow/shorter in height then the bottom navbar will be ontop of the Safari bottom menu
// I guess Mac has this issue too? That's what I see in Sauce Labs simulator

// update on this problem:
// There are three environments to consider: Chrome, Safari, PWA Standalone in iOS Safari
// the two related things are the dynamically-added iOS class and CSS feature detection for standalone
// anyway our primary target is iPhone PWA Standalone anyway with Safari but it would be nice
// if the app still looks okay in Chrome, you'll notice something is wrong right away if the height
// is missing 30% of the available viewport
import axios from 'axios';

export const checkIOS = (returnString) => {
    const iOS = /(iPhone|iPod|iPhone Simulator|iPod Simulator|iPad|iPad Simulator|Macintosh)/g.test(navigator.userAgent);
    const isChrome = !!window.chrome;

    if (iOS) {
        if (returnString) {
            // means Chrome
            // https://stackoverflow.com/questions/16935955/javascript-to-detect-safari-and-chrome-on-mac
            if (isChrome) {
                return "";
            } else {
                return "iOS";
            }
        } else {
            document.querySelector('.tagging-tracker__body').classList = 'tagging-tracker__body'; // clear state
            document.querySelector('.tagging-tracker__bottom-navbar').classList.add('iOS');
            document.querySelector('.tagging-tracker__body').classList.add('iOS');
        }

        if (window.location.href.indexOf('events') !== -1 || window.location.href.indexOf('event-tags') !== -1) {
            document.querySelector('.tagging-tracker__body').classList.add('less');
        }

        if (window.location.href.indexOf('tag-info') !== -1) {
            document.querySelector('.tagging-tracker__body').classList.add('toggled-navbar');
        }

        if (window.location.href.indexOf('add-tag') !== -1) {
            document.querySelector('.tagging-tracker__body').classList.add('add-tag');
        }
    } else {
        if (returnString) {
            return "";
        }
    }
}

export const resizeAdjustHeight = () => {
    document.querySelector('.tagging-tracker').style.height = window.innerHeight + "px";
}

// TODO this is not great magic number is from the bottom navbar
// mainly it's bad due to that JS render flash jank
export const addPathClassToBody = (props) => {
    const curPath = props.location.pathname;

    // this is bad direct dom manipulation
    // if (curPath === "/tag-info") {
    //     if (!document.querySelector('.tagging-tracker__body').classList.contains('full-body-height')) {
    //         document.querySelector('.tagging-tracker__body').classList += " full-body-height";
    //     }
    // }

    // if (curPath !== "/addresses" || curPath !== "/") {
    //     document.querySelector('.tagging-tracker__body').style.maxHeight = (window.innerHeight - 52) + "px";
    // }
}

export const truncateText = (text, length, ellipsis) => {
    if (!text) {
        return "undefined string";
    }

    return text.substr(0, length) + ((ellipsis && text.length > length) ? '...' : '');
}

export const downloadSpreadsheet = (props, setSpreadsheetDownloading) => {
    setSpreadsheetDownloading(true);
    const spreadsheetPath = process.env.NODE_ENV === 'dev'
        ? process.env.REACT_APP_API_SPREADSHEET_ROUTE_LOCAL
        : process.env.REACT_APP_API_SPREADSHEET_ROUTE;

    axios.get(spreadsheetPath, {
        params: {
            token: props.token,
        },
        responseType: 'blob',
    })
        .then((response) => {
            if (response.status === 200) {
                const data = new Blob([response.data]);
                const blob = data;
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = `Tagging Tracker Event Data.xlsx`;
                document.body.appendChild(link);
                link.click(); // create an <a> element and simulate the click operation.
                link.remove();
            } else if (response.status === 403) {
                alert('Please login');
            }
            else {
                alert('Spreadsheet failed to download');
            }
        })
        .catch((error) => {
            console.log('pdf download err', error);
            alert('Spreadsheet failed to download');
        })
        .finally(() => {
            setSpreadsheetDownloading(false);
        });
}