# Example intermediate website

This example is probably a collection of the next tutorials:

- https://www.codementor.io/nodejs/tutorial/build-google-tv-raspberrypi-nodejs-socket-io
- https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
		+ public
			+ css
			+ fonts
			+ images
			+ js
			- favicon.ico
			- index_advanced.html
			- index_intermediate.html
			- remote_intermediate.html
	+ src
		- MainIntermediate.hx
	- javascript.hxml
```

## Install

Check out [the installation](installation.md).

## The MainIntermediate.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```
package ;
import js.Node;
import js.node.Http;
import js.node.Path;
import js.npm.Express;
import js.npm.express.*;
class MainIntermediate
{
	function new()
	{
		var app : Express   = new Express();

		app.set('port', 3000);
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		// there is no Logger class in js-kit, so I added it in this source folder (js/npm/express/Logger.hx)
		app.use(new Logger('dev'));
		app.use(BodyParser.urlencoded({ extended : true}));
		// app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		app.use(new Static(Path.join(Node.__dirname, 'public')));

		// Routes
		// http://localhost:3000
		app.get('/', function (req, res) {
			res.sendfile(Node.__dirname + '/public/index_intermediate.html');
		});

		// http://localhost:3000/remote
		app.get('/remote', function (req, res) {
			res.sendfile(Node.__dirname + '/public/remote_intermediate.html');
		});

		// http://localhost:3000/nope
		app.use(function(req, res, next) {
			res.status(404).send('404');
		});

		app.listen(app.get('port'), function(){
			trace('Express server listening on port ' + app.get('port'));
		});
	}
	static public function main()
	{
		var main = new MainIntermediate();
	}
}}
```

## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`
This is the short version, you want to chech out the full version open this [file](/code/javascript.hxml);

```
# // javascript.hxml
-lib js-kit
-lib hxnodejs
-cp src
-main MainIntermediate
-js bin/example.js
-cmd cd bin
-cmd node example.js
```

## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml`
3. type `haxe javascript.hxml`
4. press enter

---
