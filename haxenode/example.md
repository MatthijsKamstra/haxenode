# Node.js example

Here you will see an original node.js code and the Haxe version of the same code.
I will not do that every time, so this is just an example to show you that there is not a lot of difference between the two ways.

----

### Node.js
```
// example.js

var http = require('http');
var server = http.createServer(
  	function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World\\n');
	   	}
 	)
 
server.listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
```

### Run

In terminal:

```
node example.js
# Server running at http://127.0.0.1:1337/
```

----
		  
# Haxe example

### haxe node

```
// Haxenode.hx

package ;

import js.Node;
import js.node.Http;
import js.node.http.ServerResponse;
import js.node.http.IncomingMessage;

class Main
{
	static public function main()
	{		
		var server = Http.createServer(function (request:IncomingMessage, response:ServerResponse):Void
		{
			res.setHeader("Content-Type","text/plain");
			res.writeHead(200);
			res.end('Hello World\\n');
		});
		server.listen(1337,"localhost");

		trace( 'Server running at http://127.0.0.1:1337/' );
	}
}

```


### Compile & run

In terminal:

```
haxe -lib hxnodejs -js haxenode.js -main Haxenode
node haxenode.js
# Server running at http://127.0.0.1:1337/
```
