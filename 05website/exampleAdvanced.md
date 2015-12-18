#Example advanced website

This example is probably a collection of the next tutorials:

- https://www.codementor.io/nodejs/tutorial/build-google-tv-raspberrypi-nodejs-socket-io
- https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
- http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus


With this we will also be using jade
But I have NO experience with Jade, so I decide to use a quick way to convert exhisting html to jade:
<http://html2jade.org/>



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
			+ views
				- index.jade
			- favicon.ico
			- index_advanced.html
			- index_intermediate.html
			- remote_intermediate.html
	+ src
		- MainIntermediate.hx
	- javascript.hxml
```

## Install

check out [the installation](installation.md).


## The MainAdvanced.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 

```
package ;
import js.Node;
import js.node.Http;
import js.node.Path;
import js.npm.Express;
import js.npm.express.*;
import js.npm.Jade;
class MainAdvanced
{
	function new()
	{
		var app : Express   = new Express();

		app.set('port', 3000);
		app.set('views', Node.__dirname + '/public/views');
		app.set('view engine', 'jade');
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		// if you read the code from Intermediate example you noticed Logger class here.
		// for some reason Morgan is used in js-kit, which you will see when you open the Logger.hx class I added :P
		app.use(new Morgan('dev'));
		app.use(BodyParser.json());
		app.use(BodyParser.urlencoded());
		// app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		app.use(new Static(Path.join(Node.__dirname, 'public')));

		app.get('/', function (req:Request,res:Response) {
			res.sendfile(Node.__dirname + '/public/index_advanced.html');
		});

		app.get('/remote', function (req:Request,res:Response) {
			res.sendfile(Node.__dirname + '/public/remote_advanced.html');
		});

		app.get('/jade', function (req:Request,res:Response) {
			res.render('index',{title:'Home',h1:'Title'});
		});

		// http://localhost:3000/api/users?username=foobar
		// routes will go here
		app.get('/api/users', function(req, res) {
			var username = req.param('username');  
			res.send('username: ' + username );
		});

		app.use(function(req, res, next) {
			res.status(404).send('404');
			// res.status(404).send(output);
		});

		app.listen(app.get('port'), function(){
			trace('Express server listening on port ' + app.get('port'));
		});
	}

	static public function main()
	{
		var main = new MainAdvanced();
	}
}
```



## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`
This is the short version, you want to chech out the full version open this [file](/code/javascript.hxml);

```
# // javascript.hxml
-lib js-kit
-lib hxnodejs
-cp src
-main MainAdvanced
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

----