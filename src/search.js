const request = require('request');
const cheerio = require('cheerio');
module.exports = {
    fetch(query) {
        return new Promise((resolve, reject) => {
            request({
                url: `http://search.azlyrics.com/search.php?q=${query}`,
                headers: {
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
                  "Connection": "keep-alive"
                }
            }, (err, res, body) => {
                if(err) return reject(err);
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
        const arr = [];
        const $ = cheerio.load(body);

        if($('.panel table').length > 1) {
            $('.panel table').next().children('tbody').children('tr').children('a').each((_, e) => arr.push($(e).attr('href')));
        } else {
            $('.panel table tbody tr .visitedlyr a').each((_, e) => arr.push($(e).attr('href')));
        };
        return arr;
    }
}