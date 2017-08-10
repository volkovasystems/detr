"use strict";var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                                                                                                                      			"contributors": [
                                                                                                                                                                                                                                                                                                                      				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                                                                                                                      				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                                                                                                                      			],
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
                                                                                                                                                                                                                                                                                                                      			"empt": "empt",
                                                                                                                                                                                                                                                                                                                      			"falzy": "falzy"
                                                                                                                                                                                                                                                                                                                      		}
                                                                                                                                                                                                                                                                                                                      	@end-include
                                                                                                                                                                                                                                                                                                                      */

var depher = require("depher");
var empt = require("empt");
var falzy = require("falzy");

var detr = function detr(parameter, defer) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"list:required": [
                                            				"Arguments",
                                            				"[*]"
                                            			],
                                            			"defer:required": [
                                            				"object",
                                            				"function"
                                            			]
                                            		}
                                            	@end-meta-configuration
                                            */

	if ((typeof defer === "undefined" ? "undefined" : (0, _typeof3.default)(defer)) != "object" && typeof defer != "function") {
		throw new Error("invalid defer option");
	}

	var choice = {};
	var option = depher(parameter, OBJECT, choice);

	if (typeof defer == "function") {
		defer = defer(option);
	}

	if (empt(defer)) {
		throw new Error("empty defer option");
	}

	var key = (0, _keys2.default)(defer);
	while (key.length) {
		var property = key.pop();

		if (falzy(option[property])) {
			choice[property] = defer[property];

		} else {
			choice[property] = option[property];
		}
	}

	return choice;
};

module.exports = detr;

//# sourceMappingURL=detr.support.js.map