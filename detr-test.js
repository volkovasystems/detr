
const assert = require( "assert" );
const detr = require( "./detr.js" );

( function test( ){
	assert.deepEqual( detr( arguments, { "hi": "yeah", "hello": "yeah" } ), { "hi": "yeah", "hello": "world" } );
} )( 1, 2, { "hello": "world" }, 3, 4 );

console.log( "ok" );
