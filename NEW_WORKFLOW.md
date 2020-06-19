Overall my approach to three sub components varying functionality by route vs. several screens with same components inside lightly tweaked
was a bad idea. It's a pain dealing with all the possible render outcomes.

### Fix workflows(screen steps)
- [ ] save tags against an event
    - [ ] add tag currently shows address, switch to event
    - [ ] when saving tags add a `tagInfoId` column, maybe already exists

### Missing capability
- [ ] show tags under the event groups, need to complete tag save by event first

### Side bugs
- [x] Hitting save vs. using onblur event doesn't behave the same, looks like it didn't save but it did. Onblur is fine.
    - this is a result of the poor design of having three sub-components(navbar, body, bottom-navbar) sharing state so when you click `SAVE` on the navbar it makes the body re-render and the termporary form state is lost for rendering, it at least saves the form.
    - fix I applied at this time is when the user clicks `SAVE` they get redirected back to the events page, onblur/keyup events still save the form

### cleanup
- tag info not deleted when event is deleted, leaves extra tag infos unbound to events

### Bugs
- have to trace through all the new "workflows"
- [ ] clicking on EDIT in navbar of single event view takes you to edit tags whihc then shows all images for an address not just the event
- [ ] add tag does not show the specific event name but address as a whole
- [ ] spacer between navbar inputs eg. top left, top right... left one extends to fill in left over space/clickable


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

#### Verify workflows
- [ ] single event
    - [ ] add picture
            - [ ] forward (event click)
                - [x] shows right event
                - [x] has Events for back title
                - [x] has images for the event
                - [ ] edit
                    - [x] edit shows images under event/modifiable
                    - [ ] event back/event title displayed correctly
            - [ ] backward
                - [x] shows event/back event title in navbar
                - [ ] navigate backwards(navbar), return to event
                - [ ] add saves to right event
                - [ ] view pulls correct images