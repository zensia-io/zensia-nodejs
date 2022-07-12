# Zensia Nodejs Translator

## :guardsman: How do I install this library?

```npm install zensia```
<br>
or
<br>
```yarn add zensia```
<br>

## :star: How do I get started ?

1. Register account at https://app.zensia.io
2. Generate API key under settings https://app.zensia.io/settings
3. (optionally for enterprise): Buy premium

<br>

## :fire: What does it do ?

- [x] Translate text into over 90 languages
- [x] Translate bulk into over 90 languages
- [x] Translate html into over 90 languages
<br>

## :bookmark_tabs: Examples
```js
const zensia = new Zensia('API_KEY');

// Single Translation
console.log(await zensia.translate('Hello there!', 'zh')) // -> 你好呀！

// Translate "Hello there!" into [Russian, Simplified Chinese]
console.log(await zensia.translate('Hello there!', ['ru', 'zh'])) // -> { zh: '你好呀！', ru: 'Привет!' }

// Translate "你好" from Simplified Chinese (zh) to [English, Russian]
console.log(await zensia.translate('你好', ['en', 'ru'], 'zh')) // -> { en: 'Hello', ru: 'Привет' }

// Translate Bulk ["Hello", "World"] into French
console.log(await zensia.translateBulk(['Hello', 'World'], 'fr')) // -> { Hello: 'Bonjour', World: 'Monde' }

// Translate Bulk ["Hello", "World"] into [Russian, Simplified Chinese]
console.log(await zensia.translateBulk(['Hello', 'World'], ['ru', 'zh'])) // { Hello: { ru: 'Привет', zh: '你好' }, World: { ru: 'Мир', zh: '世界' } }
```