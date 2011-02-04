/*
    cssx/plugin/inlineBlock
    (c) copyright 2010, unscriptable.com
    author: john

    LICENSE: see the LICENSE.txt file. If file is missing, this file is subject to the AFL 3.0
    license at the following url: http://www.opensource.org/licenses/afl-3.0.php.

    This cssx plugin fixes lack of inline-block support in IE6 and IE7

*/
define(
	function () {

		function cssxFinder (str) {
			var m = /\s*-cssx-(\w*)/.match(str);
			return m && m[1];
		}

		return {

			onProperty: function (processor, parseArgs) {
				// processor: the cssx processor in context
				// parseArgs:
				// 		propName: String
				// 		value: String
				// 		selectors: String|Array
				// 		sheet: String
				if (parseArgs.propValue.match(/inline-block/) && parseArgs.propName.match(/display/)) {
					processor.resolve([
						{propName: 'display', propValue: 'inline'},
						{propName: 'zoom', propValue: '1'}
					]);
				}
				else {
					// nothing to do
					processor.resolve();
				}
			}

		};

	}
);