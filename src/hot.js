const request = require('request');
const cheerio = require('cheerio');

module.exports = {
    fetch() {
        return new Promise((resolve, reject) => {
            request({
                url: "http://www.azlyrics.com/",
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
    extract(body) {
        const links = [];
        const $ = cheerio.load(body);

        $('.hotsongs .list-group a').each((_, e) => {
            let el = $(e);
            links.push({
                title: el.html().replace(/&quot;/gi, "\"").replace(/&amp; /gi, ""),
                url: el.attr('href').replace(/\/\//gi, "https://")
            });
        });
        return links;
    }
}