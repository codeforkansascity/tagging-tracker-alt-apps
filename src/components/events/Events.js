import React, { useState, useEffect } from 'react';
import './Events.scss';

const Events = (props) => {
    console.log(props);
    const offlineStorage = props.offlineStorage;
    const [events, setEvents] = useState([]);

    const renderAddEvent = (
        <div classNmae="tagging-tracker__events-add-event"></div>
    )

    const renderEvents = (
        <div className="tagging-tracker__events">
        
        </div>
    )

    // check set any events
    useEffect(() => {
        if (offlineStorage) { // wait for offlineStorage to be ready
            offlineStorage.events.toArray().then((events) => {
                setEvents(events);
            });
        }
    }, [offlineStorage]);

    return (
        events
            ? renderEvents
            : renderAddEvent
    )
}

export default Events;