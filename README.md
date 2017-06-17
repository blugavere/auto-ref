# auto-ref [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Automatically create references to constructor arguments.

## Installation

```sh
$ npm install --save auto-ref
```

## Usage

```js
const autoRef = require('auto-ref');

class Service {
  constructor(repo, baz) { // eslint-disable-line no-unused-vars
    autoRef(this, arguments);
  }
}

// or, with the third options arg

class Service {
  constructor() {
    autoRef(this, arguments, { names: ['repo', 'baz'] });
  }
}


const service = new Service('foo', 'bar');

console.log(service.repo); // => 'foo'
console.log(service.baz); // => 'bar'

```
## License

Apache-2.0 © [Ben Lugavere]()


[npm-image]: https://badge.fury.io/js/auto-ref.svg
[npm-url]: https://npmjs.org/package/auto-ref
[travis-image]: https://travis-ci.org/blugavere/auto-ref.svg?branch=master
[travis-url]: https://travis-ci.org/blugavere/auto-ref
[daviddm-image]: https://david-dm.org/blugavere/auto-ref.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/blugavere/auto-ref
[coveralls-image]: https://coveralls.io/repos/blugavere/auto-ref/badge.svg
[coveralls-url]: https://coveralls.io/r/blugavere/auto-ref
