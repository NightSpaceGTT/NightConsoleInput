# **Night-Console-Input**
 - If you like the project drop a star and fork it !
 - Night-Console-Input is a npm package hete input prompt for the console.
 - **Night-Console-Input is based on a not working module**

## **Installation**

```
npm install night-console-input --save
```

## **How to use**

**At first** you **have to** import the module **exemple:**

```js
let { input } = require('night-console-input');

or 

let NightInput = require('night-console-input');
```

after you can ask what you want

```js
let { input } = require('night-console-input');

const key = input('Enter your api key: ');

console.log(`Your key is: ${key}`);

let NightInput = require('night-console-input');

const key = NightInput.input('Enter your api key: ');

console.log(`Your key is: ${key}`);

```
or
```js
let NightInput = require('night-console-input');

const name = NightInput.input('Enter your name: ');

console.log(`hello, ${name}`);
```

## **License**

 - [License](https://github.com/NightSpaceGTT/NightConsoleInput/blob/main/LICENSE)
