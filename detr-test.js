
const assert = require( "assert" );
const detr = require( "./detr.js" );

( function test( ){
	assert.deepEqual(
		detr( arguments, { "hi": "yeah", "hello": "yeah" } ),
		{ "hi": "yeah", "hello": "world" },
		"should be deeply equal"
	);
} )( 1, 2, { "hello": "world" }, 3, 4 );

let duration = Date.now( );
assert.deepEqual( detr( { "hello": "world", "hi": 123 }, { "hello": "hola", "hi": "yeah", "hola": "amigo" } ),
	{ "hello": "world", "hi": 123, "hola": "amigo" }, "should be deeply equal" );
duration = Date.now( ) - duration;

assert.deepEqual( detr( { "hello": "world", "hi": 123 }, function defer( ){
	return { "hello": 123, "hi":"world", "hola": "amigo" };
} ), { "hello": "world", "hi": 123, "hola": "amigo" }, "should be deeply equal" );

console.log( "ok", duration, "ms" );
