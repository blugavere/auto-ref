'use strict';

const argList = require('@captemulation/get-parameter-names');

const defaults = {
  enumerable: true
};

const autoRef = (self, args, options) => {
  options = Object.assign({}, defaults, options);
  if (!options.names) {
    options.names = argList(self.constructor);
  }
  Object.keys(args).forEach((key, i) => {
    Object.defineProperty(self, options.names[i], {
      value: args[key],
      enumerable: options.enumerable,
      configurable: true,
      writable: true
    });
  });
};

module.exports = autoRef;
