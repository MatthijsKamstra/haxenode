(function (console) { "use strict";
var MainBasic = function() {
	var _g = this;
	console.log("Express website (Basic): open browser at http://localhost:3000");
	console.log("Stop node.js : CTRL + c");
	var app = new js_npm_Express();
	app.get("/",function(req,res) {
		res.send("Hello World!");
	});
	this.server = app.listen(3000,function() {
		var host = _g.server.address().address;
		var port = _g.server.address().port;
		console.log("Example app listening at http://" + host + ":" + port);
	});
};
MainBasic.main = function() {
	var main = new MainBasic();
};
var js_node_events_IEventEmitter = function() { };
var js_node_IHttpServerListener = function() { };
var js_npm_Express = require("express");
MainBasic.main();
})(typeof console != "undefined" ? console : {log:function(){}});
