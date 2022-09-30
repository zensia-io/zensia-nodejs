const axios = require('axios').default
const NodeCache = require("node-cache")
const md5 = require('md5')
const sum = require('hash-sum')

class Zensia {
    constructor(apiKey, cache = true) {
        this.apiKey = apiKey
        this.caching = cache
        this.cache = new NodeCache({
            stdTTL: 100, checkperiod: 120
        }
        )
    }

    async handle(...props) {
        try {
            const key = sum(props)
            if (this.caching && this.cache.has(key)) return this.cache.get(key)

            const response = (await axios.post(...props, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data

            if (this.caching && !this.cache.has(key)) this.cache.set(key, response)

            return response
        } catch (exc) {
            // console.log(exc)
            throw new Error("Something went wrong. Make sure that API key is correct.")
        }
    }

    async translate(text, to, from = 'en') {
        return await this.handle('https://api.zensia.io/translate/single', { from, to, text })
    }

    async translateBulk(texts, to, from = 'en') {
        return await this.handle('https://api.zensia.io/translate/bulk', { from, to, texts })
    }

    async translateHtml(html, to, from = 'en') {
        return await this.handle('https://api.zensia.io/translate/bulk', { from, to, html })
    }

    async translateHtmlBulk(htmls, to, from = 'en') {
        return await this.handle('https://api.zensia.io/translate/bulk', { from, to, html: htmls })
    }

    async translateCustom(payload, func) {
        return await this.handle(`https://api.zensia.io/translate/${func}`, payload)
        // try {
        //     const key = md5(JSON.stringify(payload)+func)

        //     if (this.caching && this.cache.has(key)) return this.cache.get(key)

        //     const response = (await axios.post(`https://api.zensia.io/translate/${func}`, payload, { headers: { 'x-zensia-api-key': this.apiKey } }).catch()).data?.data

        //     if (this.caching && !this.cache.has(key)) this.cache.set(key, response)

        //     return response
        // } catch (exc) {
        //     throw new Error("Something went wrong. Make sure that API key is correct.")
        // }
    }
}


module.exports = Zensia
module.exports.default = Zensia
module.exports.Zensia = Zensia