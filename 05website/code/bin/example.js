// Generated by Haxe 4.1.4
(function ($global) { "use strict";
class MainAdvanced {
	constructor() {
		console.log("src/MainAdvanced.hx:15:","Express website (Advanced): open browser at http://localhost:3000");
		console.log("src/MainAdvanced.hx:16:","Stop node.js : CTRL + c");
		let app = new js_npm_Express();
		app.set("port",3000);
		app.set("views",__dirname + "/public/views");
		app.set("view engine","jade");
		app.use(new js_npm_express_Favicon(__dirname + "/public/favicon.ico"));
		app.use(new js_npm_express_Morgan("dev"));
		app.use(js_npm_express_BodyParser.json());
		app.use(js_npm_express_BodyParser.urlencoded());
		app.use(new js_npm_express_Static(js_node_Path.join(__dirname,"public")));
		app.get("/",function(req,res) {
			res.sendFile(__dirname + "/public/index_advanced.html");
		});
		app.get("/remote",function(req,res) {
			res.sendFile(__dirname + "/public/remote_advanced.html");
		});
		app.get("/jade",function(req,res) {
			res.render("index",{ title : "Home", h1 : "Title"});
		});
		app.get("/api/users",function(req,res) {
			let username = req.param("username");
			res.send("username: " + username);
		});
		app.use(function(req,res,next) {
			res.status(404).send("404");
		});
		let server = app.listen(app.get("port"),function() {
			console.log("src/MainAdvanced.hx:77:","Express server listening on port " + Std.string(app.get("port")));
		});
	}
	static main() {
		let main = new MainAdvanced();
	}
}
MainAdvanced.__name__ = true;
Math.__name__ = true;
class Std {
	static string(s) {
		return js_Boot.__string_rec(s,"");
	}
}
Std.__name__ = true;
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
haxe_iterators_ArrayIterator.__name__ = true;
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(((o) instanceof Array)) {
				let str = "[";
				s += "\t";
				let _g = 0;
				let _g1 = o.length;
				while(_g < _g1) {
					let i = _g++;
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr;
			try {
				tostr = o.toString;
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n";
			s += "\t";
			let hasp = o.hasOwnProperty != null;
			let k = null;
			for( k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue;
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue;
			}
			if(str.length != 2) {
				str += ", \n";
			}
			str += s + k + " : " + js_Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str += "\n" + s + "}";
			return str;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}
js_Boot.__name__ = true;
var js_node_Path = require("path");
var js_npm_Express = require("express");
var js_npm_express_BodyParser = require("body-parser");
var js_npm_express_Favicon = require("serve-favicon");
var js_npm_express_Morgan = require("morgan");
var js_npm_express_Static = require("express").static;
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
MainAdvanced.main();
})({});
