define([
  'jquery',
  'backbone',
  'chai',
  'lib/<%= _.slugify(moduleName) %>'
], function($, Backbone, chai, <%= _.camelize(_.slugify(moduleName)) %>) { 
  'use strict';

  var expect = chai.expect;

  describe('<%= _.slugify(moduleName) %>', function() {
    it('expect 1 + 1 to equal 2', function() {
      var sum = 1 + 1;
      expect(sum).to.equal(2);
    });
  });
});