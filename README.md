# nullcents

A website that shows all available
giveaways of games using API from GamerPower,
and also lists all games using API from FreeToGame.

**[Live demo](https://nullcents.israjatiangar.workers.dev)**

## Screenshots

<img src="./public/screenshots/desktop-dark.png" alt="a screenshot of nullcents app on desktop" height="200">
<img src="./public/screenshots/mobile-dark.png" alt="a screenshot of nullcents app on mobile" height="200">

Screenshots are located at : [./public/screenshots](./public/screenshots)

## Features

- Browse current game giveaways
- Browse a list of free-to-play games
- Save favourite games

## Tech-stack I used and why

- React : A popular library for building user interfaces,
  and the frontend technology I learned

- TypeScript: JavaScript with types,
  which helps catch errors and
  provides useful editor autocompletes

- Vite : A fast development server and build tool

- pnpm : Npm takes too much space

- React-Router : Handles navigation between pages in the app

- Tailwind CSS : Speeds up styling with utility classes

- daisyUI : Provides ready-made, themeable components for Tailwind CSS

## How I use the APIs

Although FreeToGame and GamerPower are very generous,
they rightfully limit the number of requests an IP can make per second (to around 10).

## How I use localStorage

- **API cache:** Fetched data is stored with a 10-minute expiration[^1], so the
  site makes fewer network calls and loads faster

- **Favourites:** Since I'm storing games from two different APIs, I use a Map
  with the API name as the key and an array of game IDs as the value. I store
  only IDs because I'm already caching full objects from two large APIs and
  don't want to bloat the storage.

[^1]: That felt like a reasonable amount of time to store api data without it going stale.

## API Credits

- [GamerPower](https://www.gamerpower.com/) for their free API
- [FreeToGame](https://www.freetogame.com/) for their free API

---

Made with ❤️ by [Rajat Iangar](https://github.com/israjatiangar)\
`🤖 used for editing this README and for git message body`
