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

import js.Node;
class Haxenode {
	public static function main() {
		var server = Node.http.createServer( function( req:NodeHttpServerReq, res:NodeHttpServerResp)
		{
			res.setHeader("Content-Type","text/plain");
			res.writeHead(200);
			res.end('Hello World\\n');
		}
	);

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
