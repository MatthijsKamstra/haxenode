# Example basic website

We start with a simple example from the ExpressJS homepage:
<http://expressjs.com/starter/hello-world.html>

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- MainBasic.hx
	- javascript.hxml
```

## Install

Check out [the installation](installation.md).

## The MainBasic.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```haxe
package ;
import js.Node;
import js.npm.Express;
class MainBasic
{
	private var server:Dynamic;
	function new()
	{
		trace("Express website (Basic): open browser at http://localhost:3000");
		trace("stop node : CTRL + c");

		var app : Express = new Express();

		app.get('/', function (req, res) {
			res.send('Hello World!');
		});

		server = app.listen(3000, function ()
		{
			var host = server.address().address;
			var port = server.address().port;
			trace( 'Example app listening at http://$host:$port'); // ???? http://:::3000
		});

	}

    static public function main()
    {
        var main = new MainBasic();
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
-main MainBasic
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
