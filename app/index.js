'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BackboneModuleGenerator = module.exports = function BackboneModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BackboneModuleGenerator, yeoman.generators.Base);

BackboneModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n';

  console.log(welcome);

  var prompts = [{
    name: 'moduleName',
    message: 'What do you want to name this module?'
  },
  {
    name: 'githubName',
    message: 'What is the github username or organization where this module will be stored?'
  },
  {
    name: 'authorName',
    message: 'What is your name?' 
  }];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    this.moduleName = props.moduleName;
    this.githubName = props.githubName;
    this.authorName = props.authorName;

    cb();
  }.bind(this));
};

BackboneModuleGenerator.prototype.directoryStructure = function directoryStructure() {
  this.mkdir('lib');
  this.mkdir('test');
  this.mkdir('example');
  this.directory('util', 'util');
};

BackboneModuleGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_README.md', 'README.md');
  this.template('_LICENSE.md', 'LICENSE.md');

  this.copy('travis.yml', '.travis.yml');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

BackboneModuleGenerator.prototype.testFiles = function testFiles() {
  var testPath = 'test/test.' + this._.slugify(this.moduleName) +  '.js';
  this.template('test/test.config.js', 'test/test.config.js');
  this.template('test/test.the-module.js', testPath);

  this.template('_testrunner.html', 'testrunner.html');
};

BackboneModuleGenerator.prototype.examples = function examples() {
  this.template('example/example.html', 'example/example.html');
};

BackboneModuleGenerator.prototype.libFiles = function libFiles() {
  var libPath = 'lib/' + this._.slugify(this.moduleName) +  '.js';
  this.template('lib/the-module.js', libPath);
};