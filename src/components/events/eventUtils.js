const addNewTagInfo = async ( addressId, offlineStorage, setAddingEvent ) => {
    // this is dumb, I can't explain this, the transaction is a promise
    // so you shouldn't need a promise around a promise
    // but it seems to be the only way to force these to execute in order
    return new Promise((resolve, reject) => {
        offlineStorage.transaction('rw', offlineStorage.tagInfo, async () => {
            offlineStorage.tagInfo.add({
                addressId,
                eventId: null,
                formData: {}
            }).then((tagInfoId) => {
                resolve(tagInfoId);
            })
        })
        .catch(e => {
            console.log('failed to create tag info for event', e);
            alert('Failed to create tag info for event');
            setAddingEvent(false);
            reject();
        });
    });
}

const addNewEvent = async ( tagInfoId, addressId, offlineStorage, formatTimeStr, getDateTime, setAddingEvent ) => {
    return new Promise((resolve, reject) => {
        offlineStorage.transaction('rw', offlineStorage.events, async () => {
            offlineStorage.events.add({
                addressId,
                tagInfoId: tagInfoId,
                tagIds: [],
                datetime: formatTimeStr(getDateTime()) // makes YYYY-MM-DD HH:MM:SS format for MySQL DateTime
            }).then((eventId) => {
                resolve(eventId);
            });
        })
        .catch(e => {
            console.log('failed to create event', e);
            alert('Failed to create event');
            setAddingEvent(false);
            reject();
        });
    });
}

const updateTagInfoEventId = ( tagInfoId, eventId, offlineStorage, setAddingEvent ) => {
    return new Promise((resolve, reject) => {
        offlineStorage.transaction('rw', offlineStorage.tagInfo, () => {
            offlineStorage.tagInfo.where(":id").equals(tagInfoId).modify({ // should only be one match
                eventId
            }).then((updatedId) => {
                resolve(updatedId);
            })
            .catch(e => {
                console.log('failed to update tag info with event id', e);
                alert('failed to update tag info with event id');
                setAddingEvent(false);
                reject(false);
            });
        });
    });
}

module.exports = {
    addNewTagInfo,
    addNewEvent,
    updateTagInfoEventId
}