define([
  'jquery',
  'backbone',
  'chai',
  'lib/<%= _.slugify(moduleName) %>'
], function($, Backbone, chai, <%= _.capitalize(_.slugify(moduleName)) %>) { 
  'use strict';

  var expect = chai.expect;

  describe('<%= _.capitalize(_.slugify(moduleName)) %>', function() {
    it('should have a name attribute by default', function() {      
      expect(new <%= _.capitalize(_.slugify(moduleName)) %>().get('name')).to.equal('');
    });
  });
});