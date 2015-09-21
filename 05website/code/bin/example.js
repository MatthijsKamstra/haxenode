(function (console) { "use strict";
var Main = function() {
	console.log("Express website: open browser at http://localhost:3000");
	console.log("stop node : CTRL + c");
	var app = new (Express__0||require("express"))();
	var server = (Http__7||require("http")).createServer(app);
	app.set("port",3000);
	app["use"](new (Favicon__17||require("serve-favicon"))(js_Node.__dirname + "/public/favicon.ico"));
	app["use"](new (Morgan__18||require("morgan"))("dev"));
	app["use"]((BodyParser__19||require("body-parser")).urlencoded());
	app["use"](new (Static__20||require("express").static)((Path__6||require("path")).join(js_Node.__dirname,"public")));
	app.get("/",function(req,res) {
		res.sendfile(js_Node.__dirname + "/public/index.html");
	});
	app.get("/remote",function(req1,res1) {
		res1.sendfile(js_Node.__dirname + "/public/remote.html");
	});
	app["use"](function(req2,res2,next) {
		res2.status(404).send("404");
	});
	server.listen(app.get("port"),function() {
		console.log("Express server listening on port " + Std.string(app.get("port")));
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_Node = function() { };
js_Node.__name__ = true;
var js_node_events_IEventEmitter = function() { };
js_node_events_IEventEmitter.__name__ = true;
var js_node_IHttpServerListener = function() { };
js_node_IHttpServerListener.__name__ = true;
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__name__ = true;
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
String.__name__ = true;
Array.__name__ = true;
var Crypto__10 = require("crypto");
var EventEmitter__2 = require("events").EventEmitter;
var Http__7 = require("http");
var Net__15 = require("net");
var Path__6 = require("path");
var Url__13 = require("url");
var Stats__21 = require("fs").Stats;
var Agent__8 = require("http").Agent;
var ClientRequest__5 = require("http").ClientRequest;
var Server__9 = require("http").Server;
var Writable__3 = require("stream").Writable;
var ServerResponse__4 = require("http").ServerResponse;
var Server__16 = require("net").Server;
var Socket__14 = require("net").Socket;
var Duplex__11 = require("stream").Duplex;
var Readable__12 = require("stream").Readable;
var Express__0 = require("express");
var BodyParser__19 = require("body-parser");
var Favicon__17 = require("serve-favicon");
var Morgan__18 = require("morgan");
var Router__1 = require("express").Router;
var Static__20 = require("express")["static"];
js_Node.__dirname = __dirname;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
