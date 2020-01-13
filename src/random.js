const request = require('request');
const cheerio = require('cheerio');

const pages = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "19"];
module.exports = {
    fetch(page, url) {
        return new Promise((resolve, reject) => {
            if(url) {
                request({
                    url: url,
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
                        "Connection": "keep-alive"
                    }
                }, (e, res, body) => {
                    if(e) return reject(e);
                    else if (res.statusCode !== 200) {
                        const error = new Error(`Unexpected status code: ${res.statusCode}`);
                        error.res = res;
                        return reject(error);
                    };
                    return resolve(body);
                });
                return;
            } 

            if(!page) page = pages[Math.floor(Math.random()*pages.length)];
            if(!pages.includes(page)) return reject(new Error("Out of range! a-z or 19"));
            request({
                url: "http://www.azlyrics.com/"+page+".html",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
                    "Connection": "keep-alive"
                }
            }, (e, res, body) => {
                if(e) return reject(e);
                else if (res.statusCode !== 200) {
                    const error = new Error(`Unexpected status code: ${res.statusCode}`);
                    error.res = res;
                    return reject(error);
                };
                return resolve(body);
            });
        });
    },
    randomArtist(body) {
        const artists = [];
        const $ = cheerio.load(body);

        $('.row .artist-col a').each((_, e) => {
            artists.push("https://www.azlyrics.com/"+$(e).attr('href'));
        });
        return artists[Math.floor(Math.random()*artists.length-1)];
    },
    randomSong(body) {
        const songs = []
        const $ = cheerio.load(body);

        $('#listAlbum .listalbum-item a').each((_, e) => {
            songs.push({
                title: $(e).html().replace(/&quot;/gi, "\"").replace(/&amp; /gi, ""),
                url: $(e).attr('href').replace("..", "https://www.azlyrics.com")
            });
        });
        return songs[Math.floor(Math.random()*songs.length-1)];
    }
}