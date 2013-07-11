define([
  'jquery',
  'backbone',
  'chai',
  'lib/<%= _.slugify(moduleName) %>'
], function($, Backbone, chai, <%= _.camelize(_.slugify(moduleName)) %>) { 
  'use strict';

  var expect = chai.expect;

  describe('<%= _.slugify(moduleName) %>', function() {
    it('should have a name attribute by default', function() {      
      expect(<%= _.camelize(_.slugify(moduleName)).get('name')).to.not.be(undefined);
    });
  });
});