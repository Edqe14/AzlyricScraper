# AzlyricsScraper
Search and Scrape lyric from [Azlyrics.com](https://www.azlyrics.com/) using Node

[![GitHub license](https://img.shields.io/github/license/Edqe14/AzlyricScraper.svg?style=for-the-badge)](https://github.com/Edqe14/AzlyricScraper/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/Edqe14/AzlyricScraper.svg?style=for-the-badge)](https://github.com/Edqe14/AzlyricScraper/releases/)
![Dependencies](https://img.shields.io/librariesio/release/npm/azlyrics-scraper?style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)
[![Open Issues](https://img.shields.io/bitbucket/issues-raw/Edqe14/AzlyricScraper?style=for-the-badge)](https://github.com/Edqe14/AzylricsScraper/issues)

## Quick Start
```js
const scraper = require("azlyrics-scraper");
// Or use ES6 import
import scraper from "azlyrics-scraper";

/* <> Required
 * [] Optional
 */
scraper.search(<Title>).then(result => {
    console.log(result);
}).catch(error => {
    // Error handling here
});

scraper.getLyric(<Title>).then(result => {
    console.log(result.join(""));
}).catch(error => {
    // Error handling here
});

scraper.getLyricFromLink(<URL>).then(result => {
    console.log(result.join(""));
}).catch(error => {
    // Error handling here
});

scraper.hotSongs().then(result => {
    console.log(result.join(""));
}).catch(error => {
    // Error handling here
});

scraper.randomArtist([First Letter/Number]).then(result => {
    console.log(result);
}).catch(error => {
    // Error handling here
});

scraper.randomSong().then(result => {
    console.log(result);
}).catch(error => {
    // Error handling here
});
```

## Docs
> **search(query)**: Returns an array of search results from Azlyrics. **returns Promise(result\<Array\>, error)**  
> **getLyric(query)**: Returns an array of queried lyrics. **returns Promise(result\<Array\>, error)**  
> **getLyricFromLink(uri)**: **_Must Azlyrics URI_** Returns an array of queried lyrics. **returns Promise(result\<Array\>, error)**  
> **hotSongs()**: Returns an array of current hot songs. **returns Promise(result\<Array\> _{ title, url }_, error)**  
> **randomArtist()**: Returns a url to a random artist on Azlyrics. **returns Promise(result\<String\>, error)**  
> **randomSong()**: Returns a object to a random song lyric from Azlyrics. **returns Promise(result\<Object\> _{ title, url }_, error)**

## License
> **This project is using MIT License, © Edqe14. [Read Here](https://github.com/Edqe14/AzylricsScraper/blob/master/LICENSE)**
