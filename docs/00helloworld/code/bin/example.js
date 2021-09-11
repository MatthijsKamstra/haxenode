(function ($global) { "use strict";
class Main {
	constructor() {
		console.log("src/Main.hx:13:","Node.js Hello World Example");
		js_node_Http.createServer(function(request,response) {
			response.writeHead(200,{ "Content-Type" : "text/plain"});
			response.end("Hello World\n");
		}).listen(8080);
		console.log("src/Main.hx:20:","Server started: ");
		console.log("src/Main.hx:21:","open http://localhost:8080");
		console.log("src/Main.hx:22:","Close Node with CTRL + C");
	}
	static main() {
		let main = new Main();
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
var js_node_Http = require("http");
{
}
Main.main();
})({});
