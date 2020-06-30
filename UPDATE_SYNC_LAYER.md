### This is on both client and remote side(Node/Express/MySQL API)
This is going to be ugly... take a bit of work to do. Generally straight forward though, just have to regroup data/get new data from the updated Dexie schema.

### Dexie schema
- addresses
    - id, address, lat, lng, created, updated
- events (new)
    - addressId, tagInfoId, tagIds, datetime
- tags
    - fileName, addressId, eventId, meta, datetime
- ownerInfo
    - addressId, formData
- tagInfo
    - addressId, eventId, formData

### Todo
- [x] update sync up client side
- [ ] update sync up API side
- [ ] update sync down API side
- [ ] update sync down client side

### Misc
- [ ] update delete event so it cleans up related tables
    - left behind random tags and what not before, caused problems