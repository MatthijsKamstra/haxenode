(function (console) { "use strict";
var Main = function() {
	console.log("Slack Incoming Webhooks Example");
	var webhookURL = "https://hooks.slack.com/services/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";
	var slack1 = new slack_Webhook(webhookURL);
	var payload = { text : "another test", icon_emoji : ":8ball:", username : "3cpo"};
	slack1.send(payload);
};
Main.main = function() {
	var main = new Main();
};
var js_node_events_IEventEmitter = function() { };
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
var js_node_stream_IReadable = function() { };
js_node_stream_IReadable.__interfaces__ = [js_node_events_IEventEmitter];
var slack_Webhook = function(url) {
	this._url = url;
};
slack_Webhook.prototype = {
	send: function(payload) {
		var request = require("request");
		var option = { url : this._url, body : JSON.stringify(payload)};
		request.post(option,function(error,response,body) {
			if(!error) console.log("body: " + body); else console.log("We’ve encountered an error: " + (error == null?"null":"" + error));
		});
	}
};
var EventEmitter__0 = require("events").EventEmitter;
var Writable__3 = require("stream").Writable;
var ServerResponse__4 = require("http").ServerResponse;
var Readable__1 = require("stream").Readable;
var Request__2 = require("request");
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
