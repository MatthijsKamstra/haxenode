# Node.js example

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

### run

in terminal

```
node example.js
# Server running at http://127.0.0.1:1337/
```

		  
# Haxe example

### haxe node

```
// Haxenode.hx

package ;

import js.Node;
import js.node.Http;
import js.node.http.ServerResponse;

class Main
{
	static public function main()
	{		
		var server = Http.createServer(function (req:HttpServerReq, res:ServerResponse)
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


### compile & run

in terminal

```
haxe -lib nodejs -js haxenode.js -main Haxenode
node haxenode.js
# Server running at http://127.0.0.1:1337/
```
