'use strict';

// REGEX //

var re = '';

// Use a native function as a template...
re += Function.prototype.toString.call( Function );

// Escape special RegExp characters...
re = re.replace( /([.*+?^=!:$(){}|[\]\/\\])/g, '\\$1' );

// Replace any mentions of `Function` to make template generic.
// Replace `for ...` and additional info provided in other environments, such as Rhino (see lodash).
re = re.replace( /Function|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?' );

// Bracket the regex:
re = '^' + re + '$';


// EXPORTS //

module.exports = new RegExp( re );
