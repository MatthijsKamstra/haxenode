(function (console) { "use strict";
var MainAdvanced = function() {
	console.log("Express website (Advanced): open browser at http://localhost:3000");
	console.log("Stop node.js : CTRL + c");
	var app = new (Express__1||require("express"))();
	var server = (Http__8||require("http")).createServer(app);
	app.set("port",3000);
	app.set("views",js_Node.__dirname + "/public/views");
	app.set("view engine","jade");
	app["use"](new (Favicon__18||require("serve-favicon"))(js_Node.__dirname + "/public/favicon.ico"));
	app["use"](new (Morgan__19||require("morgan"))("dev"));
	app["use"]((BodyParser__20||require("body-parser")).json());
	app["use"]((BodyParser__20||require("body-parser")).urlencoded());
	app["use"](new (Static__21||require("express").static)((Path__7||require("path")).join(js_Node.__dirname,"public")));
	app.get("/",function(req,res) {
		res.sendfile(js_Node.__dirname + "/public/index_advanced.html");
	});
	app.get("/remote",function(req1,res1) {
		res1.sendfile(js_Node.__dirname + "/public/remote_advanced.html");
	});
	app.get("/jade",function(req2,res2) {
		res2.render("index",{ title : "Home", h1 : "Title"});
	});
	app.get("/api/users",function(req3,res3) {
		var username = req3.param("username");
		res3.send("username: " + username);
	});
	app["use"](function(req4,res4,next) {
		res4.status(404).send("404");
	});
	server.listen(app.get("port"),function() {
		console.log("Express server listening on port " + Std.string(app.get("port")));
	});
};
MainAdvanced.__name__ = true;
MainAdvanced.main = function() {
	var main = new MainAdvanced();
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
var Crypto__11 = require("crypto");
var EventEmitter__3 = require("events").EventEmitter;
var Http__8 = require("http");
var Net__16 = require("net");
var Path__7 = require("path");
var Url__14 = require("url");
var Stats__22 = require("fs").Stats;
var Agent__9 = require("http").Agent;
var ClientRequest__6 = require("http").ClientRequest;
var Server__10 = require("http").Server;
var Writable__4 = require("stream").Writable;
var ServerResponse__5 = require("http").ServerResponse;
var Server__17 = require("net").Server;
var Socket__15 = require("net").Socket;
var Duplex__12 = require("stream").Duplex;
var Readable__13 = require("stream").Readable;
var Express__1 = require("express");
var Jade__0 = require("jade");
var BodyParser__20 = require("body-parser");
var Favicon__18 = require("serve-favicon");
var Morgan__19 = require("morgan");
var Router__2 = require("express").Router;
var Static__21 = require("express")["static"];
js_Node.__dirname = __dirname;
MainAdvanced.main();
})(typeof console != "undefined" ? console : {log:function(){}});
