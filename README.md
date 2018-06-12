# Twitch Highlighter
The purpose of this app is to give the twitch viewers (fans) a chance to build playlist from clips/highlights/uploads of their favorite twitch streamers and then share them with their friends.

# ToDo's

### Streamer Header
* [X] Add Header and pull data from twitch API on streamer
* [X] Rewrite to scale
* [X] Work out the favorited streamer state better
* [X] Adjust the favorited icon

### Left Nav
* [X] Add the ability to add/remove favs
* [X] Add the ability to click and fast search

### Playlist Seciton
* [X] Build out right menu
* [X] Add ability to watch a video from the right menu
* [X] Add ability to add a video 
* [X] Style videos 
* [X] Add Ability to remove a video

### Landing Page
* [ ] Add logo
* [ ] Add quick tips
* [ ] Rotate quick tips on a timer, fadein/out
* [ ] Create a fake recently created playlist section

### Other Items
* [X] Setup all needed API calls so I can use them as needed
* [X] Convert the app to Redux
* [ ] Build out the app help stuff before searching
* [X] Layout the loading components and build HOC
* [ ] Plan how to do the backend, DB and API
* [ ] Design a landing page
* [ ] Design a auth page with twitch
* [ ] Update fonts on the app
* [X] Add Drag and drop ability when creating a playlist
* [ ] When sharing playlist or video look at sharing to social media options
* [X] When using fav streamer from left auto update that streamer name to search input
* [ ] Add a filter to video list by game
* [ ] Drag n drop reorder ability
* [X] Organize videos by date
* [ ] Infinite scroll loading

### Refactors
* [ ] Move the play video button out of rightvan and videolist component and make reusable

### Issues
* [X] Duration not displaying on highlights
* [X] flexbox for only two videos doesn't justify content correctly
* [ ] Have favs when clicked populate videos based on current selected filter
* [ ] Main content needs to scroll up and the menus need to be fixed
* [ ] Review app and add UI sugar
* [ ] Playlist allows you to add two of the same videos, fix that.
* [ ] video list needs to be same height as right nav