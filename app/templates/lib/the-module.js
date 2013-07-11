// ## <%= _.slugify(moduleName) %>.js
// 
// author: <%= authorName %>
//
// > description
// 
// The below Use Anywhere setup was so graciously provided to me by:
// <https://github.com/umdjs/umd/blob/master/returnExports.js>

// -------------------------------------------------------------
// Use this if you have no dependancies
// -------------------------------------------------------------
// (function (root, factory) {
//     if (typeof exports === 'object') {
//         // Node. Does not work with strict CommonJS, but
//         // only CommonJS-like enviroments that support module.exports, like Node.
//         module.exports = factory();
//     } else if (typeof define === 'function' && define.amd) {
//         // AMD. Register as an anonymous module.
//         define(factory);
//     } else {
//         // Browser globals (root is window)
//         root.<%= _.camelize(_.slugify(moduleName)) %> = factory();
//   }
// }(this, function () {
//   'use strict';

//   // This is <%= _.slugify(moduleName) %>.

//   // HEY THIS IS WHERE THE CODE FOR YOUR MODULE GOES.
//   return {};
// }));


// -------------------------------------------------------------
// Use this if you have dependencies (like Backbone!)
// -------------------------------------------------------------
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['backbone'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('backbone'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Backbone);
    }
}(this, function (Backbone) {
    
    // Create a Backbone model
    var <%= _.camelize(_.slugify(moduleName)) %> = Backbone.Model.extend({
      defaults: {
        name: 'My awesome <%= moduleName %>'
      }
    });

    // Export it.  This can be an object or a function.
    return <%= _.camelize(_.slugify(moduleName)) %>;
}));