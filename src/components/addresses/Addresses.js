import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
/* global google */
import { Link } from 'react-router-dom';
import './Addresses.scss';
import rightArrow from './../../assets/icons/svgs/chevron.svg';
import location from './../../assets/icons/svgs/location.svg';

const Addresses = (props) => {
    const newAddressInput = useRef(null);
    const cancelAddAddressBtn = useRef(null);
    const createAddressBtn = useRef(null);
    const [addAddressProcessing, setAddAddressProcessing] = useState(false);
    const [recentAddresses] = useState([]); // what is the difference between this and activeAddresses
    const [activeAddresses, setActiveAddresses] = useState(null);
    const [revGeocodedAdresses, setRevGeocodedAddresses] = useState(null);
    const { token } = props;
    let autoComplete;
    
    // this search may need to get restructured depending on what's available/important to search against
    // versus the obvious address field, but tag search is something based on the tag text
    // I will implement an address-first then tag search, this is not going to be as optimized/fast as plain SQL
    // also I have not done any indexing this is just using regular tables/main parent
    // more info here:
    // https://dexie.org/docs/WhereClause/WhereClause, https://dexie.org/docs/Table/Table.filter(), https://dexie.org/docs/Table/Table.where()
    const searchAddresses = (searchStr) => {
        const offlineStorage = props.offlineStorage;

        if (!offlineStorage) {
            return; // offline storage not ready yet
        }

        // the /string/ pattern is a regex, can't make one from concatenating plain strings
        const regex = new RegExp(searchStr, "i"); // case insensitive

        // this is similar to a LIKE search https://github.com/dfahlander/Dexie.js/issues/146
        // other alternatives like .where("address").startsWith(searchStr)
        let addressesFormatted;
        offlineStorage.addresses.filter(address => regex.test(address.address))
            .toArray().then((addresses) => {
                if (!addresses.length) {
                    // try searching by tags
                    offlineStorage.tagInfo.filter(tag => regex.test(tag.tagText)).toArray().then((tags) => {
                        addressesFormatted = tags.map((tag) => {
                            return {
                                // not sure if this will work
                                address: offlineStorage.addresses.where("id").equals(tag.addressId).toArray().then((addresses) => {
                                        return addresses[0].id
                                    }),
                                addressId: tag.addressId
                            };
                        });
                    });
                } else {
                    addressesFormatted = addresses.map((address) => {
                        return {
                            address: address.address,
                            addressId: address.id
                        };
                    });
                }

				setActiveAddresses(addressesFormatted);
            });
    }

    const checkAddressExists = (autoCompleteAddress) => {
        // this is here because the address from autocomplete in the input field has the full address eg. includes city/state
        const addressStr = autoCompleteAddress ? autoCompleteAddress : newAddressInput.current.value;
        const offlineStorage = props.offlineStorage;

        offlineStorage.open().then((offlineStorage) => {
            offlineStorage.addresses.toArray().then((addresses) => {
                !addresses.length
                    ? saveAddress(addressStr)
                    :  offlineStorage.addresses
                        .where("address").equals(addressStr)
                        .toArray().then((addresses) => {
                            addresses.length ? alert('Address exists') : saveAddress(addressStr);
                        });
            });
        }).catch (function (err) {
            // handle this failure correctly
            alert('failed to open local storage');
        });
    }

    const saveAddress = async (addressStr) => {
        const offlineStorage = props.offlineStorage;

        if (!addressStr) {
            alert('Please enter an address');
            return;
        }

        setAddAddressProcessing(true);

        // check if address is in table already
        offlineStorage.transaction('rw', offlineStorage.addresses, async() => {
            let newRowId;

            if (
                await offlineStorage.addresses.add({
                    address: addressStr,
                    lat: "0.0", // turn to float when uploaded
                    lng: "0.0", // turn to float when uploaded
                    created: props.getDateTime(),
                    updated: props.getDateTime()
                }).then((insertedId) => {
                    newRowId = insertedId;
                    return true;
                })
            ) {
                setActiveAddresses(recentAddresses.concat({
                    address: addressStr,
                    addressId: newRowId
                }));
                setAddAddressProcessing(false);
                props.setShowAddressModal(false);
            } else {
                alert('Failed to save address');
            }
        })
        .catch(e => {
            alert('Failed to save address');
        });
    }

    const loadRecentAddresses = () => {
        // returns last 10 addresses used by updated date sorted descending
        if (!recentAddresses.length && props.offlineStorage) {
            props.offlineStorage.addresses.toArray().then((addresses) => {
                // format data
                const addressesFormatted = addresses.splice(0, 15).map((address) => {
                    return {
                        address: address.address,
                        addressId: address.id
                    };
                });

				setActiveAddresses(addressesFormatted);
			});
        }
    }

    const reverseGeocode = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
        // https://developers.google.com/maps/documentation/javascript/geocoding
        const success = (position) => {
            const navLat = position.coords.latitude;
            const navLong = position.coords.longitude;
            const geocoder = new google.maps.Geocoder;
            const latlng = {lat: parseFloat(navLat), lng: parseFloat(navLong)};
            geocoder.geocode({'location': latlng}, function(results, status) {
              if (status === 'OK') {
                if (results[0]) {
                  setRevGeocodedAddresses(results);
                } else {
                  alert('No address found');
                }
              } else {
                alert('Failed to find an address');
              }
            });
        }

        const error = () => {
            alert('Failed to determine your location');
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert('Geolocation not supported on your browser');
        }
    }

    const generateAddressStr = (revGeocodedAddressObj) => {
        // should type check this eg. basic exists
        const addressComponents = revGeocodedAddressObj.address_components;
        return `${addressComponents[0] ? addressComponents[0].long_name : ""}
             ${addressComponents[1] ? addressComponents[1].short_name : ""},
              ${addressComponents[2] ? addressComponents[2].long_name : ""}`;
    }

    const pickRevGeocodedAddress = (addressStr) => {
        checkAddressExists(addressStr);
        setRevGeocodedAddresses(null);
    }

    const addNewAddressModal = (showModal) => {
        return showModal ? (
            <div className="tagging-tracker__address-input-modal">
                <h3>{ revGeocodedAdresses ? 'Select Address' : 'Create New Address' }</h3>
                <p>{ revGeocodedAdresses ? null : 'Please enter a new address that you want to create' }</p>
                { token ? null :
                    <p className="disclaimer-text">Note: login required for address autocomplete</p> }
                { revGeocodedAdresses
                    ? <div className="tagging-tracker__reverse-geocoded-address-set">
                        <div className="tagging-tracker__reverse-geocoded-addresses">
                            {
                                revGeocodedAdresses.map((address) => {
                                    return <div
                                        className="tagging-tracker__reverse-geocoded-address"
                                        onClick={ () => pickRevGeocodedAddress(generateAddressStr(address)) }>
                                        {
                                            generateAddressStr(address)
                                        }
                                    </div>
                                })
                            }
                        </div>
                        <button className="tagging-tracker__reverse-geocode-back-btn" type="button" onClick={ () => setRevGeocodedAddresses(null) }>Back</button>
                    </div>
                    : <><div className="tagging-tracker__address-input-row">
                        { !token
                            ? null
                            : <img
                                className="address-input-row___location-icon"
                                src={ location }
                                alt="location icon"
                                onClick={ () => reverseGeocode() } /> }
                        <input type="text" ref={ newAddressInput } id="autocomplete" />
                    </div>
                    <div className="tagging-tracker__address-input-modal-btns">
                        <button type="button" ref={ cancelAddAddressBtn } onClick={ () => {props.toggleAddressModal(false)} } >CANCEL</button>
                        <button type="button" ref={ createAddressBtn } onClick={ () => checkAddressExists() } disabled={ addAddressProcessing ? true : false }>CREATE</button>
                    </div></>
                }
            </div>
        ) : null;
    }

    const renderActiveAddresses = () => {
        if (!activeAddresses) {
            return "";
        } else {
            return (activeAddresses.map((address, index) => {
                return <Link
                    key={index}
                    to={{ pathname: "/events", state: {
                            address: address.address,
                            addressId: address.addressId // used for lookup
                    }}}
                    className="tagging-tracker__address">
                        <h4>{ address.address }</h4>
                        <img src={ rightArrow } alt="right arrow" />
                </Link>}));
        }
    }

    const suggestedAddressPicked = () => {
        const addressObj = autoComplete.getPlace();
        if ('name' in addressObj) {
            checkAddressExists(addressObj.name);
        }
    }

    // focus
    useEffect(() => {
        if (props.showAddressModal) {
            newAddressInput.current.focus();
        }

        // this detects when route changed from a single address back to addresses and clears the search input
        // there are no hard routes eg. using Link so the parent state does not change
        if (typeof props.location.state !== "undefined" &&
            typeof props.location.state.clearSearch !== "undefined") {
            delete props.location.state.clearSearch; // lol without this non-ending loop
            props.clearSearchAddress();
        }

        if (recentAddresses) {
            setAddAddressProcessing(false);
        }
    }, [props, recentAddresses]);

    useEffect(() => {
        if (props.searchedAddress.length) {
            searchAddresses(props.searchedAddress);
        } else if (props.offlineStorage && (!recentAddresses || !activeAddresses)) {
            loadRecentAddresses(); // TODO unmounted state issue
        }

        // Google address autocomplete
        if (props.showAddressModal && token) {
            autoComplete = new google.maps.places.Autocomplete(newAddressInput.current, {"types": ["geocode"]})
            autoComplete.addListener('place_changed', suggestedAddressPicked);
        }
    });

    return(
        <div className="tagging-tracker__addresses">
            { renderActiveAddresses() }
            { addNewAddressModal((props.showAddressModal || revGeocodedAdresses)) }
        </div>
    )
}

export default Addresses;