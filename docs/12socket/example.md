# Example Sockets

This example is a combination of Haxe Node examples

- [Example Website](05website/about.md)
- [Example Automation](11automation/about.md)

and [Socket.IO](http://socket.io/)!

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
		- Main.hx
		- MainClient.hx
	- javascript.hxml
```

## Install

check out [the installation](installation.md).

## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

This next code is the `server`

```haxe
package ;
import js.Node;
import js.npm.Express;
import js.npm.SocketIo;
import js.Node;
import js.node.Http;
import js.node.Path;
import js.npm.Express;
import js.npm.express.*;
import js.npm.Jade;

class Main
{
	private var PORT = 3700;
	function new()
	{
		trace("Express website (Basic): open browser at http://localhost:" + PORT);
		trace("Stop node.js : CTRL + c");

		var app    = new js.npm.Express();
		var server = js.node.Http.createServer( cast app );
		var io     = new js.npm.socketio.Server(server);

		app.set('views', Node.__dirname + '/public/views');
		app.set('view engine', "jade");

		app.use(new Static(Node.__dirname + '/public'));
		app.use(new Morgan('dev'));
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));

		app.get("/", function(req : Request, res : Response ){
			var liveReload = "";
			#if debug
			// liveReload = '<script src="http://0.0.0.0:35729/livereload.js" type="text/javascript"></script>';
			liveReload = 'http://0.0.0.0:35729/livereload.js';
			#end
			res.render("page", {livereload : liveReload});
		});

		// app.use(BodyParser.json());
		// app.use(BodyParser.urlencoded({ extended: true }));
		// app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		// app.use(new Static(Path.join(Node.__dirname, 'public')));

		io.on('connection', function (socket) {
			socket.emit('message', { message: 'welcome to the chat' });
			socket.on('send', function (data) {
				io.sockets.emit('message', data);
			});
		});
		trace ("Listening on port " + PORT);
		server.listen(PORT);
	}

	static public function main()
	{
		var main = new Main();
	}
}
```

The new part in comparison of the "advance website" [example](05website/exampleAdvanced.md) is the `io` part.

```
		io.on('connection', function (socket) {
			socket.emit('message', { message: 'welcome to the chat' });
			socket.on('send', function (data) {
				io.sockets.emit('message', data);
			});
		});
```

Which basicly just says: once you are connected to the socket, send "welcome to the chat".
And if you send data, send that data back... :D

## The MainClient.hx

Now talk about the `client` that will receive and send data to the server.
This code is part of a bigger file you can find in [MainClient.hx](/code/src/MainClient.hx);

I will highlight a small part.

First wait for the dom to be ready with

```
	new JQuery(Browser.document).ready ( function () {} );
```

Connect to the "server" create in `Main.hx`:

```
_socket     = js.browser.SocketIo.connect('http://localhost:3700');
```

Make sure you can receive messages from the server:

```
	_socket.on('message', function (data) {
		// do clever stuff
	} ) ;

```

Send the data from the input (name and message) to the server

```
		_socket.emit('send', { message: _inputField.value, username: _inputName.value });
```

## The Haxe build file, javascript.hxml

The build file is used for two targets. New in the `.hxml` file is

```
--next
```

which is used to create the build script for a new target (in our case first javascript and then Node.js)

And `hxnodejs` has an extra check to make sure you use the correct node.js version.
We don't need that in the client part

To remove the check, use:

```
-D hxnodejs_no_version_warning
```

Check out the complete version open this [file](/code/javascript.hxml);

## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml`
3. type `haxe javascript.hxml`
4. press enter

Remember that for node the start you need to uncomment

```
# -cmd cd bin
# -cmd node example.js
```

The better solution is to use the automation

## Automation

Update the `node_modules`

```
npm install
```

This will create a new folder with modules-folders in it:

```
+ node_modules
	+ livereload
	+ nodemon
	+ onchange

```

Start NPM watch so it will rebuild `javascript.hxml` as soon as file changes

```
npm run watch
```

And your done!

Cool huh!

---

To stop the terminal process

```
Ctrl + c
```

---
