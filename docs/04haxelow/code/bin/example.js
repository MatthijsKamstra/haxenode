(function ($global) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""));
	}
	match(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	matched(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
}
$hxClasses["EReg"] = EReg;
EReg.__name__ = "EReg";
Object.assign(EReg.prototype, {
	__class__: EReg
	,r: null
});
class HaxeLowDisk {
}
$hxClasses["HaxeLowDisk"] = HaxeLowDisk;
HaxeLowDisk.__name__ = "HaxeLowDisk";
Object.assign(HaxeLowDisk.prototype, {
	__class__: HaxeLowDisk
	,readFileSync: null
	,writeFile: null
});
class NodeJsDisk {
	constructor() {
		this.steno = require("steno");
		try {
			this.fs = require("graceful-fs");
		} catch( _g ) {
			this.fs = require("steno/node_modules/graceful-fs");
		}
		if(this.steno == null) {
			throw haxe_Exception.thrown("Node.js error: package 'steno' not found. Please install with 'npm install --save steno'");
		}
	}
	readFileSync(file) {
		if(this.fs.existsSync(file)) {
			return this.fs.readFileSync(file,{ encoding : "utf8"});
		} else {
			return null;
		}
	}
	writeFile(file,data) {
		this.steno.writeFile(file,data,function(err) {
			if(err) {
				throw haxe_Exception.thrown(err);
			}
		});
	}
}
$hxClasses["NodeJsDisk"] = NodeJsDisk;
NodeJsDisk.__name__ = "NodeJsDisk";
NodeJsDisk.__interfaces__ = [HaxeLowDisk];
Object.assign(NodeJsDisk.prototype, {
	__class__: NodeJsDisk
	,steno: null
	,fs: null
});
class HaxeLow {
	constructor(file,disk) {
		this.file = file;
		this.disk = disk;
		this.db = { };
		if(disk == null && file != null) {
			this.disk = new NodeJsDisk();
		}
		if(this.file != null) {
			if(this.disk == null) {
				throw haxe_Exception.thrown("HaxeLow: no disk storage set.");
			}
			this.checksum = this.disk.readFileSync(this.file);
			if(this.checksum != null) {
				this.restore(this.checksum);
			}
		}
	}
	backup(file) {
		let backup = tjson_TJSON.encode(this.db,"fancy");
		if(file != null) {
			this.disk.writeFile(file,backup);
		}
		return backup;
	}
	restore(s) {
		try {
			this.db = tjson_TJSON.parse(s);
			this.checksum = null;
		} catch( _g ) {
			let e = haxe_Exception.caught(_g).unwrap();
			throw haxe_Exception.thrown("HaxeLow: JSON parsing failed: file \"" + this.file + "\" is corrupt. " + Std.string(e));
		}
		return this;
	}
	save() {
		if(this.file == null) {
			return this;
		}
		let data = this.backup();
		if(data == this.checksum) {
			return this;
		}
		this.checksum = data;
		this.disk.writeFile(this.file,data);
		return this;
	}
	col(cls) {
		let name = cls.__name__;
		if(!Object.prototype.hasOwnProperty.call(this.db,name)) {
			this.db[name] = [];
			this.save();
		}
		return Reflect.field(this.db,name);
	}
}
$hxClasses["HaxeLow"] = HaxeLow;
HaxeLow.__name__ = "HaxeLow";
Object.assign(HaxeLow.prototype, {
	__class__: HaxeLow
	,file: null
	,db: null
	,checksum: null
	,disk: null
});
class HxOverrides {
	static cca(s,index) {
		let x = s.charCodeAt(index);
		if(x != x) {
			return undefined;
		}
		return x;
	}
	static substr(s,pos,len) {
		if(len == null) {
			len = s.length;
		} else if(len < 0) {
			if(pos == 0) {
				len = s.length + len;
			} else {
				return "";
			}
		}
		return s.substr(pos,len);
	}
	static now() {
		return Date.now();
	}
}
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = "HxOverrides";
class Main {
	constructor() {
		console.log("src/Main.hx:10:","Node.js Haxelow Example");
		let db = new HaxeLow("db.json");
		let persons = db.col(Person);
		persons.push(new Person("Test-" + new Date().getTime(),Math.round(Math.random() * 100)));
		db.save();
		console.log("src/Main.hx:27:",db.col(Person).length);
		console.log("src/Main.hx:29:","open /bin/db.json");
	}
	static main() {
		let main = new Main();
	}
}
$hxClasses["Main"] = Main;
Main.__name__ = "Main";
Object.assign(Main.prototype, {
	__class__: Main
});
class Person {
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}
}
$hxClasses["Person"] = Person;
Person.__name__ = "Person";
Object.assign(Person.prototype, {
	__class__: Person
	,name: null
	,age: null
});
Math.__name__ = "Math";
class Reflect {
	static field(o,field) {
		try {
			return o[field];
		} catch( _g ) {
			return null;
		}
	}
	static fields(o) {
		let a = [];
		if(o != null) {
			let hasOwnProperty = Object.prototype.hasOwnProperty;
			for( var f in o ) {
			if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
				a.push(f);
			}
			}
		}
		return a;
	}
	static isObject(v) {
		if(v == null) {
			return false;
		}
		let t = typeof(v);
		if(!(t == "string" || t == "object" && v.__enum__ == null)) {
			if(t == "function") {
				return (v.__name__ || v.__ename__) != null;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
}
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = "Reflect";
class Std {
	static string(s) {
		return js_Boot.__string_rec(s,"");
	}
	static parseInt(x) {
		if(x != null) {
			let _g = 0;
			let _g1 = x.length;
			while(_g < _g1) {
				let i = _g++;
				let c = x.charCodeAt(i);
				if(c <= 8 || c >= 14 && c != 32 && c != 45) {
					let nc = x.charCodeAt(i + 1);
					let v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
					if(isNaN(v)) {
						return null;
					} else {
						return v;
					}
				}
			}
		}
		return null;
	}
}
$hxClasses["Std"] = Std;
Std.__name__ = "Std";
class StringTools {
	static replace(s,sub,by) {
		return s.split(sub).join(by);
	}
}
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = "StringTools";
var ValueType = $hxEnums["ValueType"] = { __ename__:true,__constructs__:null
	,TNull: {_hx_name:"TNull",_hx_index:0,__enum__:"ValueType",toString:$estr}
	,TInt: {_hx_name:"TInt",_hx_index:1,__enum__:"ValueType",toString:$estr}
	,TFloat: {_hx_name:"TFloat",_hx_index:2,__enum__:"ValueType",toString:$estr}
	,TBool: {_hx_name:"TBool",_hx_index:3,__enum__:"ValueType",toString:$estr}
	,TObject: {_hx_name:"TObject",_hx_index:4,__enum__:"ValueType",toString:$estr}
	,TFunction: {_hx_name:"TFunction",_hx_index:5,__enum__:"ValueType",toString:$estr}
	,TClass: ($_=function(c) { return {_hx_index:6,c:c,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TClass",$_.__params__ = ["c"],$_)
	,TEnum: ($_=function(e) { return {_hx_index:7,e:e,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TEnum",$_.__params__ = ["e"],$_)
	,TUnknown: {_hx_name:"TUnknown",_hx_index:8,__enum__:"ValueType",toString:$estr}
};
ValueType.__constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TClass,ValueType.TEnum,ValueType.TUnknown];
class Type {
	static getInstanceFields(c) {
		let result = [];
		while(c != null) {
			let _g = 0;
			let _g1 = Object.getOwnPropertyNames(c.prototype);
			while(_g < _g1.length) {
				let name = _g1[_g];
				++_g;
				switch(name) {
				case "__class__":case "__properties__":case "constructor":
					break;
				default:
					if(result.indexOf(name) == -1) {
						result.push(name);
					}
				}
			}
			c = c.__super__;
		}
		return result;
	}
	static typeof(v) {
		switch(typeof(v)) {
		case "boolean":
			return ValueType.TBool;
		case "function":
			if(v.__name__ || v.__ename__) {
				return ValueType.TObject;
			}
			return ValueType.TFunction;
		case "number":
			if(Math.ceil(v) == v % 2147483648.0) {
				return ValueType.TInt;
			}
			return ValueType.TFloat;
		case "object":
			if(v == null) {
				return ValueType.TNull;
			}
			let e = v.__enum__;
			if(e != null) {
				return ValueType.TEnum($hxEnums[e]);
			}
			let c = js_Boot.getClass(v);
			if(c != null) {
				return ValueType.TClass(c);
			}
			return ValueType.TObject;
		case "string":
			return ValueType.TClass(String);
		case "undefined":
			return ValueType.TNull;
		default:
			return ValueType.TUnknown;
		}
	}
}
$hxClasses["Type"] = Type;
Type.__name__ = "Type";
class haxe_IMap {
}
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = "haxe.IMap";
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message);
		this.message = message;
		this.__previousException = previous;
		this.__nativeException = native != null ? native : this;
	}
	unwrap() {
		return this.__nativeException;
	}
	get_native() {
		return this.__nativeException;
	}
	static caught(value) {
		if(((value) instanceof haxe_Exception)) {
			return value;
		} else if(((value) instanceof Error)) {
			return new haxe_Exception(value.message,null,value);
		} else {
			return new haxe_ValueException(value,null,value);
		}
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value);
			return e;
		}
	}
}
$hxClasses["haxe.Exception"] = haxe_Exception;
haxe_Exception.__name__ = "haxe.Exception";
haxe_Exception.__super__ = Error;
Object.assign(haxe_Exception.prototype, {
	__class__: haxe_Exception
	,__skipStack: null
	,__nativeException: null
	,__previousException: null
});
class haxe_Utf8 {
	constructor(size) {
		this.__b = "";
	}
}
$hxClasses["haxe.Utf8"] = haxe_Utf8;
haxe_Utf8.__name__ = "haxe.Utf8";
Object.assign(haxe_Utf8.prototype, {
	__class__: haxe_Utf8
	,__b: null
});
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native);
		this.value = value;
	}
	unwrap() {
		return this.value;
	}
}
$hxClasses["haxe.ValueException"] = haxe_ValueException;
haxe_ValueException.__name__ = "haxe.ValueException";
haxe_ValueException.__super__ = haxe_Exception;
Object.assign(haxe_ValueException.prototype, {
	__class__: haxe_ValueException
	,value: null
});
class haxe_ds_List {
	constructor() {
		this.length = 0;
	}
	iterator() {
		return new haxe_ds__$List_ListIterator(this.h);
	}
}
$hxClasses["haxe.ds.List"] = haxe_ds_List;
haxe_ds_List.__name__ = "haxe.ds.List";
Object.assign(haxe_ds_List.prototype, {
	__class__: haxe_ds_List
	,h: null
	,length: null
});
class haxe_ds__$List_ListNode {
	constructor(item,next) {
		this.item = item;
		this.next = next;
	}
}
$hxClasses["haxe.ds._List.ListNode"] = haxe_ds__$List_ListNode;
haxe_ds__$List_ListNode.__name__ = "haxe.ds._List.ListNode";
Object.assign(haxe_ds__$List_ListNode.prototype, {
	__class__: haxe_ds__$List_ListNode
	,item: null
	,next: null
});
class haxe_ds__$List_ListIterator {
	constructor(head) {
		this.head = head;
	}
	hasNext() {
		return this.head != null;
	}
	next() {
		let val = this.head.item;
		this.head = this.head.next;
		return val;
	}
}
$hxClasses["haxe.ds._List.ListIterator"] = haxe_ds__$List_ListIterator;
haxe_ds__$List_ListIterator.__name__ = "haxe.ds._List.ListIterator";
Object.assign(haxe_ds__$List_ListIterator.prototype, {
	__class__: haxe_ds__$List_ListIterator
	,head: null
});
class haxe_ds_StringMap {
	constructor() {
		this.h = Object.create(null);
	}
}
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = "haxe.ds.StringMap";
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
Object.assign(haxe_ds_StringMap.prototype, {
	__class__: haxe_ds_StringMap
	,h: null
});
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
$hxClasses["haxe.iterators.ArrayIterator"] = haxe_iterators_ArrayIterator;
haxe_iterators_ArrayIterator.__name__ = "haxe.iterators.ArrayIterator";
Object.assign(haxe_iterators_ArrayIterator.prototype, {
	__class__: haxe_iterators_ArrayIterator
	,array: null
	,current: null
});
class js_Boot {
	static getClass(o) {
		if(o == null) {
			return null;
		} else if(((o) instanceof Array)) {
			return Array;
		} else {
			let cl = o.__class__;
			if(cl != null) {
				return cl;
			}
			let name = js_Boot.__nativeClassName(o);
			if(name != null) {
				return js_Boot.__resolveNativeClass(name);
			}
			return null;
		}
	}
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
			if(o.__enum__) {
				let e = $hxEnums[o.__enum__];
				let con = e.__constructs__[o._hx_index];
				let n = con._hx_name;
				if(con.__params__) {
					s = s + "\t";
					return n + "(" + ((function($this) {
						var $r;
						let _g = [];
						{
							let _g1 = 0;
							let _g2 = con.__params__;
							while(true) {
								if(!(_g1 < _g2.length)) {
									break;
								}
								let p = _g2[_g1];
								_g1 = _g1 + 1;
								_g.push(js_Boot.__string_rec(o[p],s));
							}
						}
						$r = _g;
						return $r;
					}(this))).join(",") + ")";
				} else {
					return n;
				}
			}
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
	static __interfLoop(cc,cl) {
		if(cc == null) {
			return false;
		}
		if(cc == cl) {
			return true;
		}
		let intf = cc.__interfaces__;
		if(intf != null && (cc.__super__ == null || cc.__super__.__interfaces__ != intf)) {
			let _g = 0;
			let _g1 = intf.length;
			while(_g < _g1) {
				let i = _g++;
				let i1 = intf[i];
				if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
					return true;
				}
			}
		}
		return js_Boot.__interfLoop(cc.__super__,cl);
	}
	static __implements(o,iface) {
		return js_Boot.__interfLoop(js_Boot.getClass(o),iface);
	}
	static __nativeClassName(o) {
		let name = js_Boot.__toStr.call(o).slice(8,-1);
		if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
			return null;
		}
		return name;
	}
	static __resolveNativeClass(name) {
		return $global[name];
	}
}
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = "js.Boot";
class tjson_TJSON {
	static parse(json,fileName,stringProcessor) {
		if(fileName == null) {
			fileName = "JSON Data";
		}
		let t = new tjson_TJSONParser(json,fileName,stringProcessor);
		return t.doParse();
	}
	static encode(obj,style,useCache) {
		if(useCache == null) {
			useCache = true;
		}
		let t = new tjson_TJSONEncoder(useCache);
		return t.doEncode(obj,style);
	}
}
$hxClasses["tjson.TJSON"] = tjson_TJSON;
tjson_TJSON.__name__ = "tjson.TJSON";
class tjson_TJSONParser {
	constructor(vjson,vfileName,stringProcessor) {
		if(vfileName == null) {
			vfileName = "JSON Data";
		}
		this.json = vjson;
		this.fileName = vfileName;
		this.currentLine = 1;
		this.lastSymbolQuoted = false;
		this.pos = 0;
		this.floatRegex = new EReg("^-?[0-9]*\\.[0-9]+$","");
		this.intRegex = new EReg("^-?[0-9]+$","");
		this.strProcessor = stringProcessor == null ? $bind(this,this.defaultStringProcessor) : stringProcessor;
		this.cache = [];
	}
	doParse() {
		try {
			let _g = this.getNextSymbol();
			switch(_g) {
			case "[":
				return this.doArray();
			case "{":
				return this.doObject();
			default:
				let s = _g;
				return this.convertSymbolToProperType(s);
			}
		} catch( _g ) {
			let _g1 = haxe_Exception.caught(_g).unwrap();
			if(typeof(_g1) == "string") {
				let e = _g1;
				throw haxe_Exception.thrown(this.fileName + " on line " + this.currentLine + ": " + e);
			} else {
				throw _g;
			}
		}
	}
	doObject() {
		let o = { };
		let val = "";
		let key;
		let isClassOb = false;
		this.cache.push(o);
		while(this.pos < this.json.length) {
			key = this.getNextSymbol();
			if(key == "," && !this.lastSymbolQuoted) {
				continue;
			}
			if(key == "}" && !this.lastSymbolQuoted) {
				if(isClassOb && o.TJ_unserialize != null) {
					o.TJ_unserialize();
				}
				return o;
			}
			let seperator = this.getNextSymbol();
			if(seperator != ":") {
				throw haxe_Exception.thrown("Expected ':' but got '" + seperator + "' instead.");
			}
			let v = this.getNextSymbol();
			if(key == "_hxcls") {
				let cls = $hxClasses[v];
				if(cls == null) {
					throw haxe_Exception.thrown("Invalid class name - " + v);
				}
				o = Object.create(cls.prototype);
				this.cache.pop();
				this.cache.push(o);
				isClassOb = true;
				continue;
			}
			if(v == "{" && !this.lastSymbolQuoted) {
				val = this.doObject();
			} else if(v == "[" && !this.lastSymbolQuoted) {
				val = this.doArray();
			} else {
				val = this.convertSymbolToProperType(v);
			}
			o[key] = val;
		}
		throw haxe_Exception.thrown("Unexpected end of file. Expected '}'");
	}
	doArray() {
		let a = [];
		let val;
		while(this.pos < this.json.length) {
			val = this.getNextSymbol();
			if(val == "," && !this.lastSymbolQuoted) {
				continue;
			} else if(val == "]" && !this.lastSymbolQuoted) {
				return a;
			} else if(val == "{" && !this.lastSymbolQuoted) {
				val = this.doObject();
			} else if(val == "[" && !this.lastSymbolQuoted) {
				val = this.doArray();
			} else {
				val = this.convertSymbolToProperType(val);
			}
			a.push(val);
		}
		throw haxe_Exception.thrown("Unexpected end of file. Expected ']'");
	}
	convertSymbolToProperType(symbol) {
		if(this.lastSymbolQuoted) {
			if(symbol.startsWith(tjson_TJSON.OBJECT_REFERENCE_PREFIX)) {
				let idx = Std.parseInt(HxOverrides.substr(symbol,tjson_TJSON.OBJECT_REFERENCE_PREFIX.length,null));
				return this.cache[idx];
			}
			return symbol;
		}
		if(this.looksLikeFloat(symbol)) {
			return parseFloat(symbol);
		}
		if(this.looksLikeInt(symbol)) {
			return Std.parseInt(symbol);
		}
		if(symbol.toLowerCase() == "true") {
			return true;
		}
		if(symbol.toLowerCase() == "false") {
			return false;
		}
		if(symbol.toLowerCase() == "null") {
			return null;
		}
		return symbol;
	}
	looksLikeFloat(s) {
		if(!this.floatRegex.match(s)) {
			if(this.intRegex.match(s)) {
				let intStr = this.intRegex.matched(0);
				if(HxOverrides.cca(intStr,0) == 45) {
					return intStr > "-2147483648";
				} else {
					return intStr > "2147483647";
				}
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	looksLikeInt(s) {
		return this.intRegex.match(s);
	}
	getNextSymbol() {
		this.lastSymbolQuoted = false;
		let c = "";
		let inQuote = false;
		let quoteType = "";
		let symbol = "";
		let inEscape = false;
		let inSymbol = false;
		let inLineComment = false;
		let inBlockComment = false;
		while(this.pos < this.json.length) {
			c = this.json.charAt(this.pos++);
			if(c == "\n" && !inSymbol) {
				this.currentLine++;
			}
			if(inLineComment) {
				if(c == "\n" || c == "\r") {
					inLineComment = false;
					this.pos++;
				}
				continue;
			}
			if(inBlockComment) {
				if(c == "*" && this.json.charAt(this.pos) == "/") {
					inBlockComment = false;
					this.pos++;
				}
				continue;
			}
			if(inQuote) {
				if(inEscape) {
					inEscape = false;
					if(c == "'" || c == "\"") {
						symbol += c;
						continue;
					}
					if(c == "t") {
						symbol += "\t";
						continue;
					}
					if(c == "n") {
						symbol += "\n";
						continue;
					}
					if(c == "\\") {
						symbol += "\\";
						continue;
					}
					if(c == "r") {
						symbol += "\r";
						continue;
					}
					if(c == "/") {
						symbol += "/";
						continue;
					}
					if(c == "u") {
						let hexValue = 0;
						let _g = 0;
						while(_g < 4) {
							let i = _g++;
							if(this.pos >= this.json.length) {
								throw haxe_Exception.thrown("Unfinished UTF8 character");
							}
							let nc = HxOverrides.cca(this.json,this.pos++);
							hexValue <<= 4;
							if(nc >= 48 && nc <= 57) {
								hexValue += nc - 48;
							} else if(nc >= 65 && nc <= 70) {
								hexValue += 10 + nc - 65;
							} else if(nc >= 97 && nc <= 102) {
								hexValue += 10 + nc - 95;
							} else {
								throw haxe_Exception.thrown("Not a hex digit");
							}
						}
						let utf = new haxe_Utf8();
						utf.__b += String.fromCodePoint(hexValue);
						symbol += utf.__b;
						continue;
					}
					throw haxe_Exception.thrown("Invalid escape sequence '\\" + c + "'");
				} else {
					if(c == "\\") {
						inEscape = true;
						continue;
					}
					if(c == quoteType) {
						return symbol;
					}
					symbol += c;
					continue;
				}
			} else if(c == "/") {
				let c2 = this.json.charAt(this.pos);
				if(c2 == "/") {
					inLineComment = true;
					this.pos++;
					continue;
				} else if(c2 == "*") {
					inBlockComment = true;
					this.pos++;
					continue;
				}
			}
			if(inSymbol) {
				if(c == " " || c == "\n" || c == "\r" || c == "\t" || c == "," || c == ":" || c == "}" || c == "]") {
					this.pos--;
					return symbol;
				} else {
					symbol += c;
					continue;
				}
			} else {
				if(c == " " || c == "\t" || c == "\n" || c == "\r") {
					continue;
				}
				if(c == "{" || c == "}" || c == "[" || c == "]" || c == "," || c == ":") {
					return c;
				}
				if(c == "'" || c == "\"") {
					inQuote = true;
					quoteType = c;
					this.lastSymbolQuoted = true;
					continue;
				} else {
					inSymbol = true;
					symbol = c;
					continue;
				}
			}
		}
		if(inQuote) {
			throw haxe_Exception.thrown("Unexpected end of data. Expected ( " + quoteType + " )");
		}
		return symbol;
	}
	defaultStringProcessor(str) {
		return str;
	}
}
$hxClasses["tjson.TJSONParser"] = tjson_TJSONParser;
tjson_TJSONParser.__name__ = "tjson.TJSONParser";
Object.assign(tjson_TJSONParser.prototype, {
	__class__: tjson_TJSONParser
	,pos: null
	,json: null
	,lastSymbolQuoted: null
	,fileName: null
	,currentLine: null
	,cache: null
	,floatRegex: null
	,intRegex: null
	,strProcessor: null
});
class tjson_TJSONEncoder {
	constructor(useCache) {
		if(useCache == null) {
			useCache = true;
		}
		this.uCache = useCache;
		if(this.uCache) {
			this.cache = [];
		}
	}
	doEncode(obj,style) {
		if(!Reflect.isObject(obj)) {
			throw haxe_Exception.thrown("Provided object is not an object.");
		}
		let st;
		if(js_Boot.__implements(style,tjson_EncodeStyle)) {
			st = style;
		} else if(style == "fancy") {
			st = new tjson_FancyStyle();
		} else {
			st = new tjson_SimpleStyle();
		}
		let buffer_b = "";
		if(((obj) instanceof Array) || ((obj) instanceof haxe_ds_List)) {
			buffer_b += Std.string(this.encodeIterable(obj,st,0));
		} else if(((obj) instanceof haxe_ds_StringMap)) {
			buffer_b += Std.string(this.encodeMap(obj,st,0));
		} else {
			this.cacheEncode(obj);
			buffer_b += Std.string(this.encodeObject(obj,st,0));
		}
		return buffer_b;
	}
	encodeObject(obj,style,depth) {
		let buffer_b = "";
		buffer_b += Std.string(style.beginObject(depth));
		let fieldCount = 0;
		let fields;
		let dontEncodeFields = null;
		let cls = js_Boot.getClass(obj);
		if(cls != null) {
			fields = Type.getInstanceFields(cls);
		} else {
			fields = Reflect.fields(obj);
		}
		let _g = Type.typeof(obj);
		if(_g._hx_index == 6) {
			let c = _g.c;
			if(fieldCount++ > 0) {
				buffer_b += Std.string(style.entrySeperator(depth));
			} else {
				buffer_b += Std.string(style.firstEntry(depth));
			}
			buffer_b += Std.string("\"_hxcls\"" + style.keyValueSeperator(depth));
			buffer_b += Std.string(this.encodeValue(c.__name__,style,depth));
			if(obj.TJ_noEncode != null) {
				dontEncodeFields = obj.TJ_noEncode();
			}
		}
		let _g1 = 0;
		while(_g1 < fields.length) {
			let field = fields[_g1];
			++_g1;
			if(dontEncodeFields != null && dontEncodeFields.indexOf(field) >= 0) {
				continue;
			}
			let value = Reflect.field(obj,field);
			let vStr = this.encodeValue(value,style,depth);
			if(vStr != null) {
				if(fieldCount++ > 0) {
					buffer_b += Std.string(style.entrySeperator(depth));
				} else {
					buffer_b += Std.string(style.firstEntry(depth));
				}
				buffer_b += Std.string("\"" + field + "\"" + style.keyValueSeperator(depth) + (vStr == null ? "null" : "" + vStr));
			}
		}
		buffer_b += Std.string(style.endObject(depth));
		return buffer_b;
	}
	encodeMap(obj,style,depth) {
		let buffer_b = "";
		buffer_b += Std.string(style.beginObject(depth));
		let fieldCount = 0;
		let h = obj.h;
		let field_h = h;
		let field_keys = Object.keys(h);
		let field_length = field_keys.length;
		let field_current = 0;
		while(field_current < field_length) {
			let field = field_keys[field_current++];
			if(fieldCount++ > 0) {
				buffer_b += Std.string(style.entrySeperator(depth));
			} else {
				buffer_b += Std.string(style.firstEntry(depth));
			}
			let value = obj.h[field];
			buffer_b += Std.string("\"" + field + "\"" + style.keyValueSeperator(depth));
			buffer_b += Std.string(this.encodeValue(value,style,depth));
		}
		buffer_b += Std.string(style.endObject(depth));
		return buffer_b;
	}
	encodeIterable(obj,style,depth) {
		let buffer_b = "";
		buffer_b += Std.string(style.beginArray(depth));
		let fieldCount = 0;
		let value = $getIterator(obj);
		while(value.hasNext()) {
			let value1 = value.next();
			if(fieldCount++ > 0) {
				buffer_b += Std.string(style.entrySeperator(depth));
			} else {
				buffer_b += Std.string(style.firstEntry(depth));
			}
			buffer_b += Std.string(this.encodeValue(value1,style,depth));
		}
		buffer_b += Std.string(style.endArray(depth));
		return buffer_b;
	}
	cacheEncode(value) {
		if(!this.uCache) {
			return null;
		}
		let _g = 0;
		let _g1 = this.cache.length;
		while(_g < _g1) {
			let c = _g++;
			if(this.cache[c] == value) {
				return "\"" + tjson_TJSON.OBJECT_REFERENCE_PREFIX + c + "\"";
			}
		}
		this.cache.push(value);
		return null;
	}
	encodeValue(value,style,depth) {
		if(typeof(value) == "number" && ((value | 0) === value) || typeof(value) == "number") {
			return value;
		} else if(((value) instanceof Array) || ((value) instanceof haxe_ds_List)) {
			let v = value;
			return this.encodeIterable(v,style,depth + 1);
		} else if(((value) instanceof haxe_ds_List)) {
			let v = value;
			return this.encodeIterable(v,style,depth + 1);
		} else if(((value) instanceof haxe_ds_StringMap)) {
			return this.encodeMap(value,style,depth + 1);
		} else if(typeof(value) == "string") {
			return "\"" + StringTools.replace(StringTools.replace(StringTools.replace(StringTools.replace(Std.string(value),"\\","\\\\"),"\n","\\n"),"\r","\\r"),"\"","\\\"") + "\"";
		} else if(typeof(value) == "boolean") {
			return value;
		} else if(Reflect.isObject(value)) {
			let ret = this.cacheEncode(value);
			if(ret != null) {
				return ret;
			}
			return this.encodeObject(value,style,depth + 1);
		} else if(value == null) {
			return "null";
		} else {
			return null;
		}
	}
}
$hxClasses["tjson.TJSONEncoder"] = tjson_TJSONEncoder;
tjson_TJSONEncoder.__name__ = "tjson.TJSONEncoder";
Object.assign(tjson_TJSONEncoder.prototype, {
	__class__: tjson_TJSONEncoder
	,cache: null
	,uCache: null
});
class tjson_EncodeStyle {
}
$hxClasses["tjson.EncodeStyle"] = tjson_EncodeStyle;
tjson_EncodeStyle.__name__ = "tjson.EncodeStyle";
Object.assign(tjson_EncodeStyle.prototype, {
	__class__: tjson_EncodeStyle
	,beginObject: null
	,endObject: null
	,beginArray: null
	,endArray: null
	,firstEntry: null
	,entrySeperator: null
	,keyValueSeperator: null
});
class tjson_SimpleStyle {
	constructor() {
	}
	beginObject(depth) {
		return "{";
	}
	endObject(depth) {
		return "}";
	}
	beginArray(depth) {
		return "[";
	}
	endArray(depth) {
		return "]";
	}
	firstEntry(depth) {
		return "";
	}
	entrySeperator(depth) {
		return ",";
	}
	keyValueSeperator(depth) {
		return ":";
	}
}
$hxClasses["tjson.SimpleStyle"] = tjson_SimpleStyle;
tjson_SimpleStyle.__name__ = "tjson.SimpleStyle";
tjson_SimpleStyle.__interfaces__ = [tjson_EncodeStyle];
Object.assign(tjson_SimpleStyle.prototype, {
	__class__: tjson_SimpleStyle
});
class tjson_FancyStyle {
	constructor(tab) {
		if(tab == null) {
			tab = "    ";
		}
		this.tab = tab;
		this.charTimesNCache = [""];
	}
	beginObject(depth) {
		return "{\n";
	}
	endObject(depth) {
		return "\n" + this.charTimesN(depth) + "}";
	}
	beginArray(depth) {
		return "[\n";
	}
	endArray(depth) {
		return "\n" + this.charTimesN(depth) + "]";
	}
	firstEntry(depth) {
		return this.charTimesN(depth + 1) + " ";
	}
	entrySeperator(depth) {
		return "\n" + this.charTimesN(depth + 1) + ",";
	}
	keyValueSeperator(depth) {
		return " : ";
	}
	charTimesN(n) {
		if(n < this.charTimesNCache.length) {
			return this.charTimesNCache[n];
		} else {
			let tmp = this.charTimesN(n - 1);
			return this.charTimesNCache[n] = tmp + this.tab;
		}
	}
}
$hxClasses["tjson.FancyStyle"] = tjson_FancyStyle;
tjson_FancyStyle.__name__ = "tjson.FancyStyle";
tjson_FancyStyle.__interfaces__ = [tjson_EncodeStyle];
Object.assign(tjson_FancyStyle.prototype, {
	__class__: tjson_FancyStyle
	,tab: null
	,charTimesNCache: null
});
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
$hxClasses["Math"] = Math;
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = "String";
	$hxClasses["Array"] = Array;
	Array.__name__ = "Array";
	Date.prototype.__class__ = $hxClasses["Date"] = Date;
	Date.__name__ = "Date";
}
js_Boot.__toStr = ({ }).toString;
tjson_TJSON.OBJECT_REFERENCE_PREFIX = "@~obRef#";
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
