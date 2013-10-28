define([
  'jquery',
  'backbone',
  'chai',
  'lib/<%= _.slugify(moduleName) %>'
], function($, Backbone, chai, <%= _.classify(moduleName) %>) {
  'use strict';

  var expect = chai.expect;

  describe('<%= _.classify(moduleName) %>', function() {
    it('should have a name attribute by default', function() {
      expect(new <%= _.classify(moduleName) %>().get('name')).to.equal('');
    });
  });
});
