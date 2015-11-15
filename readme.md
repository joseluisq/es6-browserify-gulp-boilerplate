## ES6 Browserify Gulp Boilerplate [![devDependency Status](https://david-dm.org/joseluisq/es6-browserify-gulp-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/joseluisq/es6-browserify-gulp-boilerplate#info=devDependencies)

> A simple ES6 [Babel](http://babeljs.io/), [Browserify](http://browserify.org/) and [Gulp](http://gulpjs.com) boilerplate inspired by [es6-babel-browserify-boilerplate](https://github.com/thoughtram/es6-babel-browserify-boilerplate).

**Note:** This is an updated fork originally from [es6-babel-browserify-boilerplate](https://github.com/thoughtram/es6-babel-browserify-boilerplate) by **Christoph Burgdorf**.

### Setup

```sh
# Clone the repo...
git clone https://github.com/joseluisq/es6-browserify-gulp-boilerplate.git
cd es6-browserify-gulp-boilerplate

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global commands `karma` and `gulp`...
npm install -g gulp
```

### Usage

```sh
gulp watch
```

### Features

#### [ES6]
ECMAScript 6 is the newest version of the ECMAScript standard. ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009.

#### [Babel]
Transpiles ES6 code into Vanilla ES5.

#### [CommonJS]
Babel is configured to transpile ES6 modules into CommonJS syntax and we use browserify to bundle the code into one file to deliver it to the browser.

#### [Browserify]
Browserify walks through all files and traces down all `require()`s to bundle all files together.  

#### [Gulp]
Task runner to make defining and running the tasks simpler.

[ES6]: http://www.ecma-international.org/ecma-262/6.0/index.html
[Babel]: http://babeljs.io/
[CommonJS]: http://wiki.commonjs.org/wiki/CommonJS
[Browserify]: http://browserify.org/
[Gulp]: http://gulpjs.com/

## License
MIT
