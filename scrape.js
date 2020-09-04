const search = require('./src/search.js');
const lyrics = require('./src/lyrics.js');
const hot = require('./src/hot.js');
const random = require('./src/random.js');

module.exports = {
    /**
     * Search songs from Azlyrics
     * @param {String} query Query Input
     */
    search(query) {
        return new Promise((resolve, reject) => {
            if(!query) return reject(new Error("Invalid Query"));
            search.fetch(query).then(dom => {
                return resolve(search.extract(dom));
            }, rejection => reject(rejection));
        });
    },
    /**
     * Search and get a song lyric
     * @param {String} query Query Input
     */
    getLyric(query) {
        return new Promise((resolve, reject) => {
            if(!query) return reject(new Error("Invalid Query"));
            search.fetch(query).then(dom => {
                lyrics.fetch(search.extract(dom)[0]).then(dom => {
                    return resolve(lyrics.extractLyric(dom));
                }, rejection => reject(rejection));
            }, rejection => reject(rejection));
        });
    },
    /**
     * Search and get a song lyric using link
     * @param {String} link Azlyrics URI
     */
    getLyricFromLink(link) {
        return new Promise((resolve, reject) => {
            if(!link || !link.includes('azlyrics')) return reject(new Error("Invalid URI"));
            lyrics.fetch(link).then(dom => {
                return resolve(lyrics.extractLyric(dom));
            }, rejection => reject(rejection));
        });
    },
    /**
     * Returns an Array of popular songs
     */
    hotSongs() {
        return new Promise((resolve, reject) => {
            hot.fetch().then(dom => {
                return resolve(hot.extract(dom));
            }, rejection => reject(rejection));
        })
    },
    /**
     * Return a url to a random artist on azlyrics
     * @param {String=} letter First letter of specified artists
     */
    randomArtist(letter) {
        return new Promise((resolve, reject) => {
            random.fetch(letter).then(dom => {
                return resolve(random.randomArtist(dom));
            }, rejection => reject(rejection));
        });
    },
    /**
     * Return a object with title and link to lyric on azlyrics
     */
    randomSong() {
        return new Promise((resolve, reject) => {
            random.fetch().then(dom => {
                random.fetch(null, random.randomArtist(dom)).then(body => {
                    return resolve(random.randomSong(body));
                }, rejection => reject(rejection));
            }, rejection => reject(rejection));
        }, rejection => reject(rejection));
    }
}