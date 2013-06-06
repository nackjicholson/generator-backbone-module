require.config({
  baseUrl: '/',
  paths: {
    jquery: '/bower_components/jquery/jquery',
    underscore: '/bower_components/underscore/underscore',
    backbone: '/bower_components/backbone/backbone',
    mocha: '/bower_components/mocha/mocha',
    chai: '/bower_components/chai/chai'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require([
  'require', 'mocha'
],
function(require)  {

  mocha.setup('bdd');

  require([
    'test/test.<%= _.slugify(moduleName) %>'
  ], function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
  });
});