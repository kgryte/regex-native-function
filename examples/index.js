'use strict';

var re = require( './../lib' );

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
