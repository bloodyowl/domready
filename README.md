# nodelist

[![browser support](https://ci.testling.com/bloodyowl/domready.png)](https://ci.testling.com/bloodyowl/domready)

## Install

```
$ npm install bloody-domready
```

## Require

```javascript
var domReady = require("bloody-domready")
```

## API

#### `domReady(fn)`

Executes `fn` asynchronously, only when the DOM is ready. 
If an error is thrown within `fn`, it will not affect the rest of the code, of the other callbacks. 
