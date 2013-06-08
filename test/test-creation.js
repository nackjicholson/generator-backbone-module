/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('backbone-module generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('backbone-module:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      ['lib/fried-chicken.js', /root.friedChicken/],
      'test/test.config.js',
      'test/test.fried-chicken.js',
      'example/example.html',
      'util/web-server.js',
      ['bower.json', /"name": "fried-chicken"/],
      ['package.json', /"author": "Leroy Jenkins"/],
      'testrunner.html',
      'Gruntfile.js',
      ['README.md', /https:\/\/secure\.travis-ci\.org\/leroyjenkins\/fried-chicken\.png\?branch\=master/],
      'LICENSE.md',
      '.travis.yml',
      '.bowerrc',
      '.gitignore',
      '.jshintrc',
      '.editorconfig'
    ];

    helpers.mockPrompt(this.app, {
      'moduleName': 'fried-chicken',
      'githubName': 'leroyjenkins',
      'authorName': 'Leroy Jenkins'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
