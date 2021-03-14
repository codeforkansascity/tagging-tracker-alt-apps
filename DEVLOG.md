Investigate some mechanism to check remote side for changes.
Somehow ping device to say "update available"

### 03/14/2021
- [ ] bigger font
  - made some updates on this, when simulated at scale in iPhone 11 the font is much smaller
  - see feedback
- [ ] download report feature
- [ ] acct change request
- [ ] check auto fill in iPhone from GMaps
- [x] stay logged in
  - fixed by persisting token in db also increased token life
- [ ] event type fixes (bullet point flex problem in Safari)
  - fixed in Safari... doesn't work in iPhone 11?
- [x] bottom navbar cutoff, wrote fix for iPhone 11
- [ ] number select for number of tags
  - seems to be text-based
- [ ] automatically edit event screen(state issue hence need to hit edit, has to exist first before editing)

### 03/08/2021
Noting problems in Safari

- [ ] does the PWA actually install or is it just a web bookmark?
- [x] event editor
  - [x] text overlapping bullets for Type of property, vacant property, land bank property
- owner information
  - is building survey an input or no? don't think so

### 02/22/2021
- [x] update how login token state is managed
    - [x] add it to Dexie db
        - [x] update Dexie db schema
        - [x] update state setters to populate/pull from this db field
    - [x] update client side token lifetime I think it's 15mins right now
    - [x] have to update new workflow
        - on refresh/mount app checks for token in table/if one exists sets it
          it may be outdated
        - there should probably be a "forced to login" thing at some point but the whole point of this app
          is for it to be usable without internet connection eg. can't login if you don't hit a server
          so yeah... you'll hit a point where it asks you to login say at sync time

Hmm... my mac doesn't have the environment setup that's great... also the seeder works but the users don't exist.
Should have seeded those as well but can call the function `createUser` manually in the utils folder of backend

Ehh... also when you directly call the function have to specify the path for env directly, it's normally "inherited" from `index.js` call but that starts at the root.

After that you're able to login

After first implementation

Overall this code is not great... I mean the functionality is there but structurally it's architected poorly and that's on me. I wanted this app to get off the ground fast/get used and iterate.

Anyway there are still functional changes to do and implementation... it does seem like the most "user friend/less resistance way" are native apps.

What is not pretty is the version management of the `IndexedDB` store when the schema changes like it did now I believe you're supposed to push out a new version of the db. I have to check if that's factored into the manual "software update" (gear icon) which was supposed to be automatically happening but needed to dump more time into that eg. some kind of web worker/background task on the

Have to think of some way to purge the DB on client side with their current app but new JS code comes down. Should be tied into software update.

updated token lifetime

not automatically forward http to https on api