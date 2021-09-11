(function ($global) { "use strict";
class Main02 {
	constructor() {
		console.log("src/Main02.hx:11:","Node.js NeDB example 02");
		let options = { filename : js_node_Path.join(__dirname,"/database02.db"), autoload : true, timestampData : true};
		let db = new Nedb(options);
		let _planet = { _id : "id1", planet : "Mars", system : "solar", inhabited : false};
		db.insert(_planet);
		db.update({ _id : "id1"},{ $set : { satellites : ["Phobos","Deimos"]}});
	}
	static main() {
		let main = new Main02();
	}
}
var Nedb = require("nedb");
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
var js_node_Path = require("path");
{
}
Main02.main();
})({});
