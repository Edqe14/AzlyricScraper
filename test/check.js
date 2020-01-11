//  _____  _____  _____  _____ 
// |_   _||  ___|/  ___||_   _|
//   | |  | |__  \ `--.   | |  
//   | |  |  __|  `--. \  | |  
//   | |  | |___ /\__/ /  | |  
//   \_/  \____/ \____/   \_/

const scraper = require('../scrape.js')

// Search
scraper.search('bazzi mine').then(a => {
    if(a.length > 0) console.log("[SEARCH] Checked!");
}, r => console.log("[SEARCH] Something went wrong!"));

// Get Lyrics
scraper.getLyric('bazzi mine').then(a => {
    if(a.length > 0) console.log("[GET LYRICS] Checked!");
}, r => console.log('[GET LYRICS] Something went wrong!'));

// Get Lyrics from URI
scraper.getLyricFromLink('https://www.azlyrics.com/lyrics/bazzi/mine.html').then(a => {
    if(a.length > 0) console.log("[GET LYRICS FROM URI] Checked!");
}, r => console.log('[GET LYRICS FROM URI] Something went wrong!'))