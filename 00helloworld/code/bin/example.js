(function (console) { "use strict";
var Main = function() {
	console.log("Node.js Hello World Example");
	js_node_Http.createServer(function(request,response) {
		response.writeHead(200,{ 'Content-Type' : "text/plain"});
		response.end("Hello World\n");
	}).listen(8080);
	console.log("Server started: ");
	console.log("open http://localhost:8080");
	console.log("Close Node with CTRL + C");
};
Main.main = function() {
	var main = new Main();
};
var js_node_events_IEventEmitter = function() { };
var js_node_Http = require("http");
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
