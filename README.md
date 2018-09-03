# Sunderland

## Run The App:

Make sure Node.js and npm are installed.

```
git clone https://github.com/domnikmack/sunderland.git
cd sunderland
npm i
npm run start
```

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Test
```
npm test
```
Very basic test to see if the app is runnig without crashing.

## Production
```
npm run build
```
Creates a production build.

## Notes:
Clicking on a tile in Masonry view will direct to the article view. Clicking on the 'Home' link in the
nav bar will link back the Masonry view.
Masonsry and Article views are routed in a way an overview of articles would
be routed to an article. Because there is only content for one Article all the
tiles are linked to the same article. In the real world the tiles would link to different articles.

