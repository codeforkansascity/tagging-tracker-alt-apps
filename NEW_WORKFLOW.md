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