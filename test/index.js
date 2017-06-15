/* eslint no-unused-vars: 0 */

'use strict';

const assert = require('assert');
const autoRef = require('../index.js');

class Cat {
  constructor(paws, claws, eyes) {
    this.foo = 'bar';
    autoRef(this, arguments, {
      enumerable: false
    });
  }
}
class Lion {
  constructor(paws, claws, eyes) {
    this.foo = 'bar';
    autoRef(this, arguments, {
      enumerable: true,
      names: ['whoaaa', 'claws', 'eyes']
    });
  }
}
class Paws {

}

describe('autoRef', function () {
  it('should store paws on cat', function () {
    const cat = new Cat(Paws);
    assert(cat.paws);
  });
  it('should accept a names option', function () {
    const cat = new Lion(Paws, {});
    assert(cat.whoaaa);
    console.log(cat);
  });
});
