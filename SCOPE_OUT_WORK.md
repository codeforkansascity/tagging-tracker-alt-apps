### Overview
Restructure app to allow sorting/grouping and future events while still sharing same address.

I think I have to condense `Edit/Add Events` to one button since there is a `Delete` button as well.

### Semi undo-update
- [ ] View Address
    - [ ] update top navbar
        - [ ] set DELETE back to EDIT
        - [ ] change CANCEL to DELETE
            - this becomes the "delete address" call that was in the bottom navbar
    - [ ] update bottom navbar
        - [ ] set Delete to Owner Info
        - [ ] Owner Info to Edit Event
            - [ ] goes to events
        - [ ] Add Event
            - [ ] goes to tag info(new obv)
- [ ] Events
    - add toggle in navbar eg. Delete, shows delete icons
- [ ] New functionality
    - [ ] Add "Link Existing Features" to Tag Info
        - Shows photos... I guess the idea you may have taken photos in advance, then add them to an event later
        - [ ] show plus icons on top left corner of thumbnail
        - [ ] Add(top right navbar I guess)
        - [ ] prompt to confirm, then add/update relationships
- [ ] Extra
    - [ ] way to update event date