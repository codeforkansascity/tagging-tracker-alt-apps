### Overview
Restructure app to allow sorting/grouping and future events while still sharing same address.

I think I have to condense `Edit/Add Events` to one button since there is a `Delete` button as well.

### Sections to update
#### Address screen
Dang this one is unfortunatetly brutal despite how simple it seems.
- [ ] sort photos by date
    - [ ] need to update tag schema to include datetime
        - [ ] update client side
            - [ ] Dexie update
                - it has timestamp field already, I think it was a lazy attempt for unique file names.
            - [ ] sync process
        - [ ] update API
            - [ ] update table schema
            - [ ] update methods eg. insert/query responses...
    - [ ] sort by descending date sort probably have to use `new Date()` or something
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