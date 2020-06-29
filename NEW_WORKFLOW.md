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

#### Verified workflows
- [x] single address
    - [x] owner info
        - back button goes to address events
        - owner info saves
    - [x] add event
        - back text is correct
        - saves event/checks for existing
    - [x] single event
        - [x] add/edit tags
            - click address
            - click event
            - click add picture
            - add picture
            - save to event
            - back (Event navbar click)
            - show event with new picture(s)
            - edit
            - show same images with edit
            - deletes image
                - [x] file name too long on display
                    - added truncation
            - back to event
            - back to events (for address)
            - back to addresses (home)
        - [x] delete event works
        - [x] event info
        - [x] add picture back navbar
        

#### Clean up of related tables
- [ ] for example delete event, bound images remain

#### Misc
- [ ] intent to upload/stuff that requires being logged in
    - prompted not logged in
    - after logging in does not take you back to what you were doing before

#### Safari UI testing
- [ ] height issues
- [ ] responsive issues