# **Night-Console-Input**
 - If you like the project you can drop a star and fork it !
 - Night-Console-Input is a npm package here to help you to do console input.
 - **Night-Console-Input is based on a not working module**

## **Installation**

```
npm install night-console-input --save
```

## **How to use**

**At first** you **have to** import the module **exemple:**

```js
let { input } = require('night-console-input');
```

after you can ask what you want

```js
const key = input('Enter your api key: ');

console.log(`Your key is: ${key}`);
```
or
```js
const name = input('Enter your name: ');

console.log(`hello, ${name}`);
```

## **License**

 - [License](https://github.com/NightSpaceGTT/NightConsoleInput/blob/main/LICENSE)
