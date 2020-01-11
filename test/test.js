//  _____  _____  _____  _____ 
// |_   _||  ___|/  ___||_   _|
//   | |  | |__  \ `--.   | |  
//   | |  |  __|  `--. \  | |  
//   | |  | |___ /\__/ /  | |  
//   \_/  \____/ \____/   \_/

import readline from "readline-sync";
import scraper from "../scrape.js";

let input = readline.question('What title of the song? ');

scraper.search(input).then(a => {
    if(!a[0]) return console.log("[NO RESULTS]")
    console.log(`[SEARCH] ${a[0]}`);
    scraper.getLyric(input).then(a => {
        console.log(`[GET LYRIC] ${a[0]}...`);
    }, r => { throw r });

    scraper.getLyricFromLink(a[0]).then(a => {
        console.log(`[GET LYRIC FROM URI] ${a[0]}...`);
    }, r => { throw r });
}, r => { throw r });