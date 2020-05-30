### Work related to new interface workflow
Features grouped tags by event in the new heirarchy: address > event > tags

### About
Unfortunately any sort of change with the UI usually means a three-stage thing since there are three parts to this app: front end, back end, sync service. Technically four as each front-end/back-end has a sync layer...

### Frontend
- [ ] replace rendered view for single address with list of events instead of tags
    - [x] update linking from View Addresses to next screen(previously View Address) now Events pulling address
    - [ ] event view then shows tags grouped by this event
    - [ ] fix backwards states after you go through: Address > events > tags/owner info/events
        - [ ] change third step bottom navbar
            - show Tag Info and Tags
            - soft state of active address is lost going backwards

### Frontend Extra
- you could check if there is only 1 event for an address, then go to it directly vs. showing list of events

### Frontend sync

### Backend

### Backend sync