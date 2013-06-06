// ## <%= _.slugify(moduleName) %>.js
// 
// // author: <%= authorName %>
//
// > description
// 
// The below Use Anywhere setup was so graciously provided to me by:
// <https://github.com/umdjs/umd/blob/master/returnExports.js>

(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports, like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.<%= _.camelize(_.slugify(moduleName)) %> = factory();
  }
}(this, function () {
  'use strict';

  // This is <%= _.slugify(moduleName) %>.

  // HEY THIS IS WHERE THE CODE FOR YOUR MODULE GOES.
  return {};
}));