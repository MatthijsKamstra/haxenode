(function (console) { "use strict";
var Main = function() {
	this.PORT = 3700;
	console.log("Express website (Basic): open browser at http://localhost:" + this.PORT);
	console.log("Stop node.js : CTRL + c");
	var app = new js_npm_Express();
	var server = js_node_Http.createServer(app);
	var io = new js_npm_socketio_Server(server);
	app.set("views",js_Node.__dirname + "/public/views");
	app.set("view engine","jade");
	app["use"](new js_npm_express_Static(js_Node.__dirname + "/public"));
	app["use"](new js_npm_express_Morgan("dev"));
	app["use"](new js_npm_express_Favicon(js_Node.__dirname + "/public/favicon.ico"));
	app.get("/",function(req,res) {
		var liveReload = "";
		liveReload = "http://0.0.0.0:35729/livereload.js";
		res.render("page",{ livereload : liveReload});
	});
	io.on("connection",function(socket) {
		socket.emit("message",{ message : "welcome to the chat"});
		socket.on("send",function(data) {
			io.sockets.emit("message",data);
		});
	});
	console.log("Listening on port " + this.PORT);
	server.listen(this.PORT);
};
Main.main = function() {
	var main = new Main();
};
var js_Node = function() { };
var js_node_events_IEventEmitter = function() { };
var js_node_IHttpServerListener = function() { };
var js_node_Http = require("http");
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
var js_npm_Express = require("express");
var js_npm_express_Favicon = require("serve-favicon");
var js_npm_express_Morgan = require("morgan");
var js_npm_express_Static = require("express").static;
var js_npm_socketio_Server = require("socket.io");
js_Node.__dirname = __dirname;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=example.js.map