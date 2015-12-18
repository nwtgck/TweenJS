/*
* SmartRotationPlugin
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/*
	IMPORTANT: This class is not documented. Please read the TweenJS documentation for `installPlugin`, or check out the
	SamplePlugin class for details on how to use plugins.

	The SmartRotationPlugin will ensure rotation tweens will always take the shortest path.
	Installing this plugin will currently add this behaviour to all tweens.
 */
this.createjs = this.createjs||{};

(function() {
	"use strict";

	function SmartRotationPlugin() {
		throw("SmartRotation plugin cannot be instantiated.")
	}

	var s = SmartRotationPlugin;

	s.install = function() {
	    createjs.Tween.installPlugin(s, ["rotation"]);
	};

	s.init = function(tween, prop, value) {
		return value;
	}

	s.tween = function(tween, prop, value, starts, ends, ratio) {
	    var start = starts.rotation % 360;
	    var end = ends.rotation % 360;
	    var dif = start - end;
	    if (dif > 180) { start -= 360; }
	    else if (dif < -180) { start += 360; }
		return (end - start) * ratio + start;
	}

	createjs.SmartRotationPlugin = SmartRotationPlugin;

}());
