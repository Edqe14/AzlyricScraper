# AzlyricsScraper
Search and Scrape lyric from [Azlyrics.com](https://www.azlyrics.com/)

[![GitHub license](https://img.shields.io/github/license/Edqe14/AzlyricScraper.svg?style=for-the-badge)](https://github.com/Edqe14/AzlyricsScraper/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/Edqe14/AzlyricScraper.svg?style=for-the-badge)](https://github.com/Edqe14/AzlyricScraper/releases/)
![Dependencies](https://img.shields.io/david/dev/Edqe14/AzlyricScraper?style=for-the-badge)
[![GitHub last commit](https://img.shields.io/github/last-commit/Edqe14/AzlyricScraper?style=for-the-badge)](https://github.com/Edqe14/AzlyricsScraper/commit/master)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)

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
> **search(query)**: Returns an array of search results from Azlyrics. returns Promise(result\<Array\>, error)  
> **getLyric(query)**: Returns an array of queried lyrics. returns Promise(result\<Array\>, error)  
> **getLyricFromLink(uri)**: **_Must Azlyrics URI_** Returns an array of queried lyrics. returns Promise(result\<Array\>, error)

## License
> **This project is using MIT License. [Read Here](https://github.com/Edqe14/AzylricsScraper/blob/master/LICENSE)**