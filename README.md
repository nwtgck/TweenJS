# TweenJS

TweenJS is a simple tweening library for use in Javascript. It was developed to integrate well with the EaselJS library,
but is not dependent on or specific to it (though it uses the same Ticker and Event classes by default). It supports
tweening of both numeric object properties & CSS style properties.

## Demo pages

Demo pages which use GitHub pages

| demo page | source |
|------|--------|
|[CSSPlugin](https://nwtgck.github.io/TweenJS/examples/CSSPlugin.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/CSSPlugin.html)|
|[CSSPlugin_transform](https://nwtgck.github.io/TweenJS/examples/CSSPlugin_transform.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/CSSPlugin_transform.html)|
|[ColorPlugin](https://nwtgck.github.io/TweenJS/examples/ColorPlugin.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/ColorPlugin.html)|
|[Example](https://nwtgck.github.io/TweenJS/examples/Example.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/Example.html)|
|[MotionGuideBlitz](https://nwtgck.github.io/TweenJS/examples/MotionGuideBlitz.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/MotionGuideBlitz.html)|
|[MotionGuideDemo](https://nwtgck.github.io/TweenJS/examples/MotionGuideDemo.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/MotionGuideDemo.html)|
|[MultiMotionDemo](https://nwtgck.github.io/TweenJS/examples/MultiMotionDemo.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/MultiMotionDemo.html)|
|[PerfTest](https://nwtgck.github.io/TweenJS/examples/PerfTest.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/PerfTest.html)|
|[PerfTestCSS](https://nwtgck.github.io/TweenJS/examples/PerfTestCSS.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/PerfTestCSS.html)|
|[RelativePlugin](https://nwtgck.github.io/TweenJS/examples/RelativePlugin.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/RelativePlugin.html)|
|[RotationPlugin](https://nwtgck.github.io/TweenJS/examples/RotationPlugin.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/RotationPlugin.html)|
|[SamplePlugin](https://nwtgck.github.io/TweenJS/examples/SamplePlugin.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/SamplePlugin.html)|
|[SimpleTweenDemo](https://nwtgck.github.io/TweenJS/examples/SimpleTweenDemo.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/SimpleTweenDemo.html)|
|[SparkTable](https://nwtgck.github.io/TweenJS/examples/SparkTable.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/SparkTable.html)|
|[TweenOnlyDemo](https://nwtgck.github.io/TweenJS/examples/TweenOnlyDemo.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/TweenOnlyDemo.html)|
|[Tween_Circles](https://nwtgck.github.io/TweenJS/examples/Tween_Circles.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/Tween_Circles.html)|
|[Tween_SparkTable](https://nwtgck.github.io/TweenJS/examples/Tween_SparkTable.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/Tween_SparkTable.html)|
|[timeScale](https://nwtgck.github.io/TweenJS/examples/timeScale.html)|[source](https://github.com/nwtgck/TweenJS/blob/master/examples/timeScale.html)|

## Commands to adapt GitHub pages

```sh
# Copy _assets directory to assets (mv command is also OK)
$ cp -r _assets assets
# Move to examples directory
$ cd examples
# Replace "../_assets" with "../assets" (this is necessary to load .css files)
$ ls | grep html | xargs sed -i '' 's/..\/_assets/..\/assets/g' # Replace by destructive way
```


## Example
The API is simple but very powerful, making it easy to create complex tweens by chaining commands.

```javascript
var tween = createjs.Tween.get(myTarget)
    .to({x:300},400)
    .set({label:"hello!"})
    .wait(500).to({alpha:0,visible:false},1000)
    .call(onComplete);
```

The example above will create a new tween instance that:

* tweens the target to an x value of 300 over 400ms and sets its label to "hello!"
* waits 500 ms
* tweens the target's alpha to 0 over 1s & sets its visible to false
* calls the onComplete function

Tweens are composed of two elements: steps and actions.

Steps define the tweened properties and always have a duration associated with them (even if that duration is 0). Steps
are defined with the "to" and "wait" methods. Steps are entirely deterministic. You can arbitrarily set a tween's
position, and it will always set the same properties for that position.

Actions do not have a duration, and are executed between steps. They are defined with the "call", "set", "play", and
"pause" methods. They are guaranteed to execute in the correct order, but not at the precise moment in time that is
indicated in the sequence. This can lead to indeterminate results, especially when tweens are interacting via the play
and pause actions.

Tweens support a number of configuration properties, which are specified as the second param when creating a new tween:

```javascript
createjs.Tween.get(target, {loop:true, useTicks:true, css:true, ignoreGlobalPause:true}).to(etc...);
```

All configuration properties default to false. The properties are:
loop - indicates whether the tween should loop when it reaches the end
useTicks - the tween will use ticks for duration instead of milliseconds
css - enables css mapping for some css properties
ignoreGlobalPause - the tween will continue ticking even when Ticker is paused.

When using Tween.get, you can also specify true as the third parameter to override any active tweens on the target.

```javascript
createjs.Tween.get(target,null,true); // this will remove any existing tweens on the target.
```

## Support and Resources
* Find examples and more information at the [TweenJS web site](http://tweenjs.com/)
* Read the [documentation](http://createjs.com/docs/tweenjs/)
* Discuss, share projects, and interact with other users on [reddit](http://www.reddit.com/r/createjs/).
* Ask technical questions on [Stack Overflow](http://stackoverflow.com/questions/tagged/tweenjs).
* File verified bugs or formal feature requests using Issues on [GitHub](https://github.com/createjs/TweenJS/issues).
* Have a look at the included [examples](https://github.com/CreateJS/TweenJS/tree/master/examples) and
[API documentation](http://createjs.com/docs/tweenjs/) for more in-depth information.

It was built by [gskinner.com](http://www.gskinner.com), and is released for free under the MIT license, which means you
can use it for almost any purpose (including commercial projects). We appreciate credit where possible, but it is not a
requirement.

## Classes

**Tween**
Returns a new Tween instance.

**Timeline**
The Timeline class synchronizes multiple tweens and allows them to be controlled as a group.

**Ease**
The Ease class provides a collection of easing functions for use with TweenJS. It does not use the standard 4 param
easing signature. Instead it uses a single param which indicates the current linear ratio (0 to 1) of the tween.

## Thanks
Special thanks to [Robert Penner](http://flashblog.robertpenner.com/) for his easing equations, which form the basis for
the Ease class.
