#Example simple website


http://expressjs.com/starter/hello-world.html


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

## The Haxe build file, javascript.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

You could build everything directly in the terminal, but this is more readable and I have added some comments in there to explain some of it.

```
# // javascript.hxml

# libs used in project
-lib js-kit

#integrate files to classpath
-cp src

#this class wil be used as entry point for your app.
-main Main

#JavaScript target
-js bin/NodeJsScraping.js

#You can use -D source-map-content (requires Haxe 3.1+) to have the .hx 
#files directly embedded into the map file, this way you only have to 
#upload it, and it will be always in sync with the compiled .js even if 
#you modify your .hx files.
-D source-map-content

#Generate source map and add debug information
-debug

#dead code elimination : remove unused code
#"-dce no" : do not remove unused code
#"-dce std" : remove unused code in the std lib (default)
#"-dce full" : remove all unused code
-dce full

# This is very cool, but not necessary for this project, you can create a package.json with the correct depencicies (https://github.com/clemos/haxe-js-kit#exporting-your-project-dependencies)
--macro npm.Package.export("package.json")

# Use terminal command to start Node.js!
-cmd node bin/NodeJsScraping.js
```



## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml` 
3. type `haxe javascript.hxml`
4. press enter


It will output 

	Node.js Scraping Example
	It’s 26.3 degrees Celsius.

> It's possible that it outputs F, like the tutorial says.  
> But I got Celsius so I changed it accordantly 