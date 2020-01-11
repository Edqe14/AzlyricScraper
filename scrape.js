import search from "./src/search.js";
import lyrics from "./src/lyrics.js"

export default {
    search(query) {
        return new Promise((resolve, reject) => {
            search.search(query).then(dom => {
                return resolve(search.extract(dom))
            }, rejection => reject(rejection));
        })
    },
    getLyric(query) {
        return new Promise((resolve, reject) => {
            search.search(query).then(dom => {
                lyrics.reqLyric(search.extract(dom)[0]).then(dom => {
                    return resolve(lyrics.extractLyric(dom));
                }, rejection => reject(rejection))
            }, rejection => reject(rejection));
        });
    },
    getLyricFromLink(link) {
        return new Promise((resolve, reject) => {
            lyrics.reqLyric(link).then(dom => {
                return resolve(lyrics.extractLyric(dom));
            }, rejection => reject(rejection))
        });
    }
}