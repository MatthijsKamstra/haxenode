#Example simple website

We start with a simple example van de express homepage:
<http://expressjs.com/starter/hello-world.html>


## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- javascript.hxml
```


## Install

check out [the installation](installation.md).


## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 

```
package ;
import js.Node;
import js.npm.Express;
/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	private var server:Dynamic;
	function new()
	{
		trace("Express website");
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
        var main = new Main();
	}
}
```

###More complex example

This is the basic example how to work with expressjs.
You can find a more complex version in de code folder: [Main.hx](code/src/MainIntermediate.hx)

(this example described above can be found in [MainSimple.hx](code/src/MainSimple.hx))


## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`
This is the short version, you want to chech out the full version open this [file](/code/javascript.hxml);

```
# // javascript.hxml
-lib js-kit
-cp src
-main Main
-js bin/example.js
-cmd node bin/example.js
```



## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml` 
3. type `haxe javascript.hxml`
4. press enter