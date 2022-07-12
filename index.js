const axios = require('axios').default

class Zensia {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async translate(text, to, from = 'en') {
        try {
            return (await axios.post('https://api.zensia.io/translate/single', { from, to, text }, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data
        } catch (exc) {
            throw new Error("ZENSIA: Invalid API key")
        }
    }

    async translateBulk(texts, to, from = 'en') {
        try {
            return (await axios.post('https://api.zensia.io/translate/bulk', { from, to, texts }, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data
        } catch (exc) {
            throw new Error("ZENSIA: Invalid API key")
        }
    }

    async translateHtml(html, to, from = 'en') {
        try {
            return (await axios.post('https://api.zensia.io/translate/html', { html, to, from }, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data
        } catch (exc) {
            throw new Error("ZENSIA: Invalid API key")
        }
    }

    async translateHtmlBulk(htmls, to, from = 'en') {
        try {
            return (await axios.post('https://api.zensia.io/translate/html', { html: htmls, to, from }, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data
        } catch (exc) {
            throw new Error("ZENSIA: Invalid API key")
        }
    }

    async translateCustom(payload, func) {
        try {
            return (await axios.post(`https://api.zensia.io/translate/${func}`, payload, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data
        } catch (exc) {
            throw new Error("ZENSIA: Invalid API key")
        }
    }
}


module.exports = Zensia
module.exports.default = Zensia
module.exports.Zensia = Zensia