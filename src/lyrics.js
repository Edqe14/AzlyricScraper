const request = require('request');
const cheerio = require('cheerio');
String.prototype.format = function() {
    'use strict'
    let txt = ''+this;
    txt = txt.split("<!--")[1].split("-->")[1];
    txt = txt.replace(/\n/gi, "");
    txt = txt.replace(/<br>/gi, "\n");
    txt = txt.replace(/<i>|<\/i>/gi, "*");
    txt = txt.replace(/&amp; /gi, "");
    txt = txt.replace(/&apos;/gi, "\'");

    return txt;
};

module.exports = {
    fetch(url) {
        return new Promise((resolve, reject) => {
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
        });
    },
    extractLyric(body) {
        const lyric = [];
        const $ = cheerio.load(body);

        let lyrics = $('.row .col-xs-12 div').each((_, e) => {
            if($(e).attr('class')) return;
            else if(!$(e).html()) return;
            else {
                $(e).html().format().split('\n').forEach(t => lyric.push(t));
            };
        });
        return lyric;
    }
}
