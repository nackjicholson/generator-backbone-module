# Generator-backbone-module
[![Build Status](https://secure.travis-ci.org/nackjicholson/generator-backbone-module.png?branch=master)](https://travis-ci.org/nackjicholson/generator-backbone-module)

Yeoman Generator for creating distributable backbone modules.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-backbone-module`
- Run: `yo backbone-module`

## Features

- Generates a backbone module that can be used with CommonJS, AMD, or as a global browser variable.
- automated jsHint setup
- automated tests with mocha-phantomjs and requirejs
- watch files for changes
- nodemon
- build process with uglify.js
- bower.json
- bowerrc
- pretty much ready to publish to bower.
- skeleton for creating an example of your module.
- Automatic setup for travis ci
- basic readme
- package.json

## Why?

I've been building a lot of small backbone modules / mixins and releasing them on github and bower. I built this generator so I can quickly break new modules out, test them, build, and deploy. The final result looks a lot like this project [backbone-gcl](https://github.com/CascadeEnergy/backbone-gcl).

## Where to put your code
Write your module in `lib/your-module-name.js`
Write your tests in `test/test.your-module-name.js`

## Grunt tasks

After you have done this:

```
$ mkdir my-module && cd $_ 
$ yo backbone-module
```

Yeoman will ask you for your module's name, as well as your name.

When it has finished you can do the following grunt tasks.

`$ grunt`  
sets up a nodemon server that will reload on file changes.

`$ grunt build`  
Will make a copy of your module to the root directory, as well as a `your-module-name.min.js` compressed via uglifyjs. You should run `$ grunt build` before publishing your module to bower or npm.

`$ grunt watch`  
You should run this task whenever you are developing on your module. It watches the directory for file changes, runs them through JSHint, and will automatically run the tests. Extremely Useful.

`$ grunt test` or `$ npm test`
Will do a single test run through a connect server on port 8981. This is the same set of tests that will run during a travis-ci build.

## Support

You can create an issue.

You can direct message me on twitter if you have any questions or comments [@nackjicholsonn](http://twitter.com/nackjicholsonn).

I am almost always on freenode IRC when I'm on my computer. Good places to reach me are `#sensei` and `#pdxnode`

Pull requests definitely encouraged.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
