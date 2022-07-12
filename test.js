const { Zensia } = require('./index');

(async function () {
    const zensia = new Zensia('API_KEY');

    // Single Translation
    console.log(await zensia.translate('Hello there!', 'zh')) // -> 你好呀！

    // Translate "Hello there!" into [Russian, Simplified Chinese]
    console.log(await zensia.translate('Hello there!', ['ru', 'zh'])) // -> { zh: '你好呀！', ru: 'Привет!' }

    // Translate "你好" from Simpliefied Chinese (zh) to [English, Russian]
    console.log(await zensia.translate('你好', ['en', 'ru'], 'zh')) // -> { en: 'Hello', ru: 'Привет' }

    // Translate Bulk ["Hello", "World"] into French
    console.log(await zensia.translateBulk(['Hello', 'World'], 'fr')) // -> { Hello: 'Bonjour', World: 'Monde' }

    // Translate Bulk ["Hello", "World"] into [Russian, Simplified Chinese]
    console.log(await zensia.translateBulk(['Hello', 'World'], ['ru', 'zh'])) // { Hello: { ru: 'Привет', zh: '你好' }, World: { ru: 'Мир', zh: '世界' } }
})()

