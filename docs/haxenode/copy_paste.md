# Copy & paste

I sometime just need to test something quickly.
And so I `copy & paste` an example from internet.

This is usually doesn't work out of the box...
But I have some tips and tricks to get this working.


## debuggin aka console.log

In Haxe you usually use the Haxe specific way of logging: `trace()`

But you can always use the platform specific way.
In the case of JavaScript:

```js
console.log('test');
```

A handy shortcut for `console.log` is in package [js.Node](https://github.com/HaxeFoundation/hxnodejs/blob/master/src/js/Node.hx# L48)


So you could rewrite everything to that:

```haxe
// console.log('foo');
js.Node.console.log('foo');
```

But it's *MUCH* easier to add it to you imports

```haxe
import js.Node.console;
```

and then your `console.log` will just work without any changes to the copied code


## for loop

Okay this thing will not work!

**JavaScript** uses a classic C-style for-loop

```js
for (i = 0; i < 100; i++) {
	console.log(i);
}
```


**Haxe** uses a iterator based for-loop
You will have to change that to:

```haxe
for (i in 0...100) {
	console.log(i);
}
```

For more examples check [cheatsheet.html# loops](https://matthijskamstra.github.io/haxejs/haxejs/cheatsheet.html#loops).


## imports

Mostly its just search where the packages are located
Its to difficult to get you out off all your copy pasting, but for example:

```js
var req = new XMLHttpRequest();
```

works with the correct import

```haxe
import js.html.XMLHttpRequest;
```

Sometimes you just need to add `new`:

```js
reject(Error(req.statusText));
```

doesn't work, even if you have imported the correct package

```haxe
import js.Error;
```

just call the constructor:

```haxe
reject(new Error(req.statusText));
```

## Date

most copy paste stuff is easy fixed, so it this one.
But this is a different language decision

In Haxe you will create a [date](http://api.haxe.org/Date.html) with `new Date(year, month, day, hour, min, sec)`
In JS it will return the current date

```js
new Date ()
```

So use this in Haxe

```haxe
Date.now();
```


## ;

Okay .... Stupid but JavaScript is more flexible with this.
Just follow the instructions from the Haxe compiler.


## Start document

Okay maybe a little much but I use this example / test document a lot...
Perhaps someone has some use for it.

`Main.hx`

```haxe
package ;

class Main
{
	function new() {
		trace('Example');
	}


	static public function main(){
		var main = new Main();
	}
}

```

`build.hxml`

```
-lib hxnodejs
-cp src
-main Main
-js bin/example.js
-D source-map-content
-debug
-dce full
```

