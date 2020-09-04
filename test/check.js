//  _____  _____  _____  _____ 
// |_   _||  ___|/  ___||_   _|
//   | |  | |__  \ `--.   | |  
//   | |  |  __|  `--. \  | |  
//   | |  | |___ /\__/ /  | |  
//   \_/  \____/ \____/   \_/

const scraper = require('../scrape.js');

// Search
scraper.search('bazzi mine').then(a => {
    if(a.length > 0) console.log("[SEARCH] Checked!");
}).catch(e => console.log("[SEARCH] Something went wrong!"));

// Get Lyrics
scraper.getLyric('bazzi mine').then(a => {
    if(a.length > 0) console.log("[GET LYRICS] Checked!");
}).catch(e => console.log("[GET LYRIC] Something went wrong!"));

// Get Lyrics from URI
scraper.getLyricFromLink('https://www.azlyrics.com/lyrics/bazzi/mine.html').then(a => {
    if(a.length > 0) console.log("[GET LYRICS FROM URI] Checked!");
}).catch(e => console.log("[GET LYRIC FROM URI] Something went wrong!"));

// Fetch Hot songs
scraper.hotSongs().then(a => {
    if(a.length > 0) console.log("[HOT SONGS] Checked!");
}).catch(e => console.log("[HOT SONGS] Something went wrong!"));

// Fetch Random Artist
scraper.randomArtist().then(a => {
    if(a.length > 0) console.log("[RANDOM ARTIST] Checked!");
}).catch(e => console.log("[RANDOM ARTIST] Something went wrong!"));

// Fetch Random Song
scraper.randomSong().then(a => {
    if(a.url) console.log("[RANDOM SONG] Checked!");
}).catch(e => console.log("[RANDOM SONG] Something went wrong!"));