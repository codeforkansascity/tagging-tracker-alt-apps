### Overview
Restructure app to allow sorting/grouping and future events while still sharing same address.

I think I have to condense `Edit/Add Events` to one button since there is a `Delete` button as well.

### Sections to update
#### Address screen
Dang this one is unfortunatetly brutal despite how simple it seems.
- [ ] test date, issue with splitting based on `T` or `" "`
- [x] bottom navbar
    - [x] Tag Info `->` Events
        - [x] Events shows list of events
- [ ] Event Date Info(both Edit Event and Add Event go here)
    - [ ] Tag Info screen
        - [x] change 'Date of Picture' to 'Date of entry'
        - [x] add to 'Tag text' add clarifying text: (separated by commas)
            - [x] change to long line, textarea input
        - [x] add to 'Small tag text' add clarifying text: (separated by commas)
            - [x] change to long line, textarea input
        - [ ] add 'Link Existing Pictures'
- [ ] Link existing pictures event
    - [ ] shows photos by date with `+` icons to top left
    - [ ] prompt "Link selected photos to this event"