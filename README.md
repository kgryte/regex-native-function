Native Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to detect a native function.


## Installation

``` bash
$ npm install regex-native-function
```


## Usage

``` javascript
var re = require( 'regex-native-function' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to detect a native `function`.

``` javascript
var bool = re.test( Math.sqrt.toString() );
// returns true

bool = re.test( (function(){}).toString() );
// returns false
```


## Examples

``` javascript
var re = require( 'regex-native-function' );

function isNative( fcn ) {
	return re.test( fcn.toString() );
}

console.log( isNative( Math.sqrt ) );
// returns true

console.log( isNative( String ) );
// returns true

console.log( isNative( Int8Array ) );
// returns true

console.log( isNative( Date ) );
// returns true

console.log( isNative( function(){} ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-native-function.svg
[npm-url]: https://npmjs.org/package/regex-native-function

[travis-image]: http://img.shields.io/travis/kgryte/regex-native-function/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-native-function

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-native-function/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-native-function?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-native-function.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-native-function

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-native-function.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-native-function

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-native-function.svg
[github-issues-url]: https://github.com/kgryte/regex-native-function/issues
