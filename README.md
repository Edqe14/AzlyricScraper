# AzlyricsScraper
Search and Scrape lyric from Azlyrics.com

[![License](https://img.shields.io/pypi/l/ansicolortags.svg)](https://github.com/Edqe14/AzylricsScraper/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)](https://github.com/Edqe14/AzylricsScraper/commit/master)

## Quick Start
```js
const scraper = require("azlyrics-scraper");
// Or use ES6 import
import scraper from "azlyrics-scraper";

const title = "bazzi mine";
scraper.getLyric(title).then(result => {
    console.log(result.join(""));
}).catch(error => {
    // Error handling
});
```

## Docs
**search(query)**: Returns an array of search results from Azlyrics. returns Promise(result<Array>, error)  
**getLyric(query)**: Returns an array of queried lyrics. returns Promise(result<Array>, error)  
**getLyricFromLink(uri)**: _Must Azlyrics URI_ Returns an array of queried lyrics. returns Promise(result<Array>, error)