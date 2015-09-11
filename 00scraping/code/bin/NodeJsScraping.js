(function (console) { "use strict";
var Main = function() {
	console.log("Node.js Scraping Example");
	var request = require("request");
	var url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=02888";
	request.post(url,function(error,response,body) {
		if(!error) {
			var _cheerio = (Cheerio__5||require("cheerio")).load(body);
			var temperature = _cheerio("[data-variable='temperature'] .wx-value").html();
			console.log("It’s " + temperature + " degrees Celsius.");
		} else console.log("We’ve encountered an error: " + (error == null?"null":"" + error));
	});
};
Main.main = function() {
	var main = new Main();
};
var js_node_events_IEventEmitter = function() { };
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
var js_node_stream_IReadable = function() { };
js_node_stream_IReadable.__interfaces__ = [js_node_events_IEventEmitter];
var EventEmitter__0 = require("events").EventEmitter;
var Writable__3 = require("stream").Writable;
var ServerResponse__4 = require("http").ServerResponse;
var Readable__1 = require("stream").Readable;
var Cheerio__5 = require("cheerio");
var Request__2 = require("request");
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
