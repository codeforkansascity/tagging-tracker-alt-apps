### Overview
Restructure app to allow sorting/grouping and future events while still sharing same address.

I think I have to condense `Edit/Add Events` to one button since there is a `Delete` button as well.

### Semi undo-update
- [x] View Address
    - [x] update top navbar
        - [x] set DELETE back to EDIT
        - [x] change CANCEL to DELETE
            - this becomes the "delete address" call that was in the bottom navbar
    - [x] update bottom navbar
        - [x] set Delete to Owner Info
        - [x] Owner Info to Edit Event
            - [x] goes to events
        - [x] Add Event
            - [x] goes to tag info(new obv)
- [ ] Events
    - [x] add toggle in navbar eg. Delete, shows delete icons
    - [ ] add the actual delete method eg. `Dexie`
- [ ] New functionality
    - [ ] Add "Link Existing Features" to Tag Info
        - Shows photos... I guess the idea you may have taken photos in advance, then add them to an event later
        - [ ] show plus icons on top left corner of thumbnail
        - [ ] Add(top right navbar I guess)
        - [ ] prompt to confirm, then add/update relationships
- [ ] Extra
    - [ ] way to update event date
        - thoughts:
            - in edit mode the dates on the right side of the row are editable
                - ugly/too much work
            - use the date of entry on the form for the event date or vice versa... this makes sense but have to bridge two different `Dexie` tables 