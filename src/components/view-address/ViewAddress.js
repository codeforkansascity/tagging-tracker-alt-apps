import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';
import './ViewAddress.scss';
import { getImagePreviewAspectRatioClass } from './../../utils/image';
import ajaxLoaderGray from './../../assets/gifs/ajax-loader--gray.gif';
import { flipDateFormat } from './../../utils/date';

const ViewAddress = (props) => {
    const history = useHistory();
    const [localImages, setLocalImages] = useState(null);
    
    if (typeof props.location.state === "undefined") {
        history.push("/addresses");
    }

    const renderDateRow = ( dispDate ) => {
        return <h3
            className="tagging-tracker__view-address-tag-date-group">
            <span>Event</span> { flipDateFormat(dispDate, false) }
        </h3>;
    }

    const renderTags = () => {
        const db = props.offlineStorage;

        if (db && !localImages) {
            db.open().then(function (db) {
                db.tags.toArray().then((tags) => {
                    !tags.length
                        ? setLocalImages({})
                        :  db.tags
                        .where("addressId").equals(props.location.state.addressId)
                        .toArray().then((tags) => {
                            // sort tags by descending date
                            // straight outta SO: https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property
                            tags.sort((a, b) => {
                                return new Date(b.datetime) - new Date(a.datetime);
                            });
                            setLocalImages(tags);
                        });
                });
            }).catch (function (err) {
                // handle this failure correctly
                alert('failed to open local storage');
            });
        }
        
        if (localImages && Object.keys(localImages).length) {
            // I was contemplating where to do this but the tags have to get grouped by date
            const tagsGroupedByDate = {};
            
            localImages.forEach((image) => {
                if (image.datetime in tagsGroupedByDate) {
                    tagsGroupedByDate[image.datetime].push(image);
                } else {
                    tagsGroupedByDate[image.datetime] = [image];
                }
            });

            return Object.keys(tagsGroupedByDate).map((date, index) => {
                const groupDate = date.indexOf("T") !== -1 ? date.split("T")[0] : date.split(" ")[0];

                return <React.Fragment key={ index }>
                    { renderDateRow(groupDate) }
                    { tagsGroupedByDate[date].map((image, subIndex) => {
                        return <div
                            key={ subIndex }
                            style={{
                                backgroundImage: `url(${image.thumbnail_src})`
                            }}
                            alt="address thumbnail"
                            className={ "address__tag-image " + getImagePreviewAspectRatioClass(localImages[index]) } />
                    })}
                </React.Fragment>
            });
        } else {
            return(localImages && Object(localImages).length)
                ? <div className="tagging-tracker__view-address-loading css-delayed-fade-in">
                    <span>Loading tags...</span>
                    <img src={ ajaxLoaderGray } alt="loading tags spinner" />
                </div>
                : <div className="tagging-tracker__view-address-no-tags">
                    <h4>No Tags</h4>
                </div>;
        }
    }

    return(
        <div className="tagging-tracker__view-address">
            { renderTags() }
        </div>
    )
}

export default ViewAddress;