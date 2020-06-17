Overall my approach to three sub components varying functionality by route vs. several screens with same components inside lightly tweaked
was a bad idea. It's a pain dealing with all the possible render outcomes.

### Obvious bugs
- [x] when first saving event(tag info) against address, everytime you save it makes a new one
    - save as blur/save button
    - from bottom navbar first save, no callback to set active event based on newly generated, so keeps making more 
- [x] the save process itself is not working

### Fix workflows(screen steps)
- [x] save event
    - add a "date exists" check as part of fix below
- [x] save tags against an event
    - addresses view, select address
    - address view shows events, select event
    - [ ] add tag currently shows address, switch to event
    - [ ] when saving tags add a `tagInfoId` column, maybe already exists
- [x] filter tags by an event
    - addresses view, select address
    - select event
    - click edit on top navbar
    - `tagInfoId` passed into this screen of `edit-tags` use it to filter the
        photos by the `tagInfoId`

### Missing capability
- [ ] show tags under the event groups, need to complete tag save by event first

### Side bugs
Hitting save vs. using onblur event doesn't behave the same, looks like it didn't save but it did. Onblur is fine.

### cleanup
- tag info not deleted when event is deleted, leaves extra tag infos unbound to events

### Bugs
- have to trace through all the new "workflows"
- [ ] clicking on EDIT in navbar of single event view takes you to edit tags whihc then shows all images for an address not just the event
- [ ] add tag does not show the specific event name but address as a whole


### Verify click throughs (navigation through app) specifically going backwards maintains previous state
#### If not specifically mentioned back works fine
- address
    - events
        - [ ] single event
            - [ ] navbar
                - [ ] edit button
                    - check modifies/saves right image set based on active event
            - [ ] bottom navbar
                - [ ] event info
                - [ ] pictures
                - [ ] events
                - [ ] add picture
        - [ ] owner info
            - [ ] back test
                - fail, does not go back to events
                - save works correctly though
        - [ ] add event
            - [ ] issue with save button, due to not using blur event, blur doesn't help
                - it's the re-render it actually saves but the read-only mode doesn't show the updated values until next load