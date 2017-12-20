# Example

This is the hello world in node.js. An example you can find everywhere.


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
import js.node.Http;
import js.node.http.ServerResponse;
import js.node.http.IncomingMessage;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Node.js Hello World Example");

		Http.createServer(function (request:IncomingMessage, response:ServerResponse):Void {
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.end('Hello World\n');
		}).listen(8080);

		trace('Server started: ');
		trace('open http://localhost:8080');
		trace('Close Node with CTRL + C');
	}

	static public function main()
	{
		var main = new Main();
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

