/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'regex-native-function', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should detect a native function', function test() {
		var values = [
			Date,
			Boolean,
			String,
			Number,
			Function,
			RegExp,
			Number,
			Int8Array,
			Math.sqrt,
			Math.pow
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( re.test( values[i].toString() ), values[i] );
		}
	});

	it( 'should correctly identify a non-native function', function test() {
		var values = [
			function(){},
			function beep(){},
			it,
			describe,
			test,
			assert.isFalse,
			assert.isTrue
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( re.test( values[i].toString() ), values[i] );
		}
	});

});
