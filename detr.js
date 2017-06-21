/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "detr",
			"path": "detr/detr.js",
			"file": "detr.js",
			"module": "detr",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/detr.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Defer and default option parameter.
	@end-module-documentation

	@include:
		{
			"depher": "depher",
			"doubt": "doubt",
			"empt": "empt",
			"falzy": "falzy",
			"protype": "protype"
		}
	@end-include
*/

const depher = require( "depher" );
const doubt = require( "doubt" );
const empt = require( "empt" );
const falzy = require( "falzy" );
const protype = require( "protype" );

const detr = function detr( parameter, defer ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"Arguments",
					"[*]"
				],
				"defer:required": "object"
			}
		@end-meta-configuration
	*/

	if( !doubt( parameter, AS_ARRAY ) ){
		throw new Error( "invalid parameter" );
	}

	if( falzy( defer ) || !protype( defer, OBJECT ) || empt( defer ) ){
		throw new Error( "invalid defer option" );
	}

	let option = depher( parameter, OBJECT, { } );

	Object.keys( defer ).forEach( ( property ) => {
		if( falzy( option[ property ] ) ){
			option[ property ] = defer[ property ];
		}
	} );

	return option;
};

module.exports = detr;
