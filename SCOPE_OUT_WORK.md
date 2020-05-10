### Overview
Restructure app to allow sorting/grouping and future events while still sharing same address.

I think I have to condense `Edit/Add Events` to one button since there is a `Delete` button as well.

### Sections to update
#### Address screen
Dang this one is unfortunatetly brutal despite how simple it seems.
- [ ] bottom navbar
    - [ ] Tag Info `->` Events
        - [ ] Events shows list of events
    - [ ] Tag Info `->` Add Event
- [ ] Event Date Info(both Edit Event and Add Event go here)
    - [ ] Tag Info screen
        - [ ] change 'Date of Picture' to 'Date of entry'
        - [ ] add to 'Tag text' add clarifying text: (separated by commas)
            - [ ] change to long line, textarea input
        - [ ] add to 'Small tag text' add clarifying text: (separated by commas)
            - [ ] change to long line, textarea input
        - [ ] add 'Link Existing Pictures'
- [ ] Link existing pictures event
    - [ ] shows photos by date with `+` icons to top left
    - [ ] prompt "Link selected photos to this event"