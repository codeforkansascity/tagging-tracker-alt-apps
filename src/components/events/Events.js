import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.scss';
import { getDateTime, formatTimeStr } from '../../utils/date';
import { addNewTagInfo, addNewEvent, updateTagInfoEventId } from './eventUtils';
import { deleteEvent } from '../../utils/delete';

import closeIcon from './../../assets/icons/svgs/close.svg';
import rightArrow from './../../assets/icons/svgs/chevron.svg';

const Events = (props) => {
    const offlineStorage = props.offlineStorage;
    const address = props.location.state;
    const addressId = props.location.state.addressId;
    const [events, setEvents] = useState([]);
    const [addingEvent, setAddingEvent] = useState(false);

    // this just adds an event based on current date
    // const addEvent = async () => {
    //     setAddingEvent(true);

    //     /**
    //      * Three steps:
    //      * 1) make tag info for new event
    //      * 2) create event
    //      * 3) bind taginfo to event
    //      */
    //     const tagInfoId = await addNewTagInfo(addressId, offlineStorage, setAddingEvent);
    //     const eventId = await addNewEvent(tagInfoId, addressId, offlineStorage, formatTimeStr, getDateTime, setAddingEvent);
    //     const tagInfoEventIdUpdated = await updateTagInfoEventId(tagInfoId, eventId, offlineStorage, setAddingEvent);

    //     // bind tagInfoId to this event
    //     if (tagInfoEventIdUpdated) {
    //         offlineStorage.events.where("addressId").equals(addressId).toArray()
    //             .then((events) => {
    //                 setEvents(events);
    //                 setAddingEvent(false);
    //             })
    //             .catch((e) => {
    //                 console.log('Failed to update local events', e);
    //                 alert('Failed to update local events');
    //                 setAddingEvent(false);
    //             });
    //     } else {
    //         alert('Failed to create event');
    //         setAddingEvent(false);
    //     }
    // }

    const renderAddEvent = (
        <div className="tagging-tracker__events-add-event">
            <Link
                to={{ pathname: "/tag-info", state: {
                    address: address.address,
                    addressId // used for lookup
                }}}
                className="events-add-event__btn">
                <span>Add Event</span>
            </Link>
        </div>
    )

    const renderEvents = (
        <div className="tagging-tracker__events">
            {
                events.reverse().map((event, id) => {
                    return (
                        <Link
                            key={ id }
                            to={{ pathname: "/event-tags", state: {
                                addressId: event.addressId,
                                address: props.location.state.address,
                                tagInfoId: event.tagInfoId // used for lookup
                            }}}
                            className="tagging-tracker__event">
                            { props.deleteEventsMode ? <button type="button" id="event-delete-btn">
                                <img src={ closeIcon } alt="delete event icon" />
                            </button> : null }
                            <div id="event-text">
                                <span className="text">Event</span>
                                <span className="date">{ event.datetime.split(" ")[0] }</span>
                            </div>
                            <img id="event-view-icon" src={ rightArrow } alt="open event icon" />
                        </Link>
                    )
                })
            }
        </div>
    )

    // check set any events
    useEffect(() => {
        if (offlineStorage) { // wait for offlineStorage to be ready
            offlineStorage.events.where("addressId").equals(addressId).toArray().then((events) => {
                setEvents(events);
            });
        }
    }, [offlineStorage]);

    return ( events.length ? renderEvents : renderAddEvent )
}

export default Events;