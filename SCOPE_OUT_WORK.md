### Overview
Restructure app to allow sorting/grouping and future events while still sharing same address.

I think I have to condense `Edit/Add Events` to one button since there is a `Delete` button as well.

### Sections to update
#### Address screen
Dang this one is unfortunatetly brutal despite how simple it seems.
- [ ] sort photos by date
    - [x] need to update tag schema to include datetime
        - [x] update client side
            - [x] Dexie update
                - it has timestamp field already, I think it was a lazy attempt for unique file names.
            - [x] sync process
                - `App.js` `Dexie` schema with new `datetime` field to persist
                - sync up
                - sync down
        - [x] update API
            - [x] update table schema
            - [x] update methods eg. insert/query responses...
    - [x] sort by descending date sort probably have to use `new Date()` or something
    - [ ] fix the switch/unfinished datetime to timestamp
        - timestamp never synced with client side it was just a way to delete uniquely selected photos since the same photo/same filename could be uploaded so don't know which photo to delete. This is in `EditTags.js`
- [ ] update tag delete process
    - use filename for display
    - use `datetime` for deletion/unique select
- [ ] bottom navbar
    - [ ] Owner Info `->` Edit Event
        - [ ] Edit Event shows list of events
    - [ ] Tag Info `->` Add Event
- [ ] Event Date Info(both Edit Event and Add Event go here)
    - [ ] Tag Info screen
        - [ ] change 'Date of Picture' to 'Date of entry'
        - [ ] add to 'Tag text' add clarifying text: (separated by commas)
            - [ ] change to long line, textarea input
        - [ ] add to 'Small tag text' add clarifying text: (separated by commas)
            - [ ] change to long line, textarea input
        - [ ] add 'Link Existing Pictures'
- [ ] Link existing pictures screen
    - [ ] shows photos by date with `+` icons to top left
    - [ ] prompt "Link selected photos to this event"
- [x] if no photos, can't go back eg. "Loading tags...", `< Addresses` is not functional
    - css issue eg. overlay blocking content underneath