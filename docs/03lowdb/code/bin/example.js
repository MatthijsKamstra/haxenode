(function ($global) { "use strict";
var Lowdb = require("lowdb");
class Main {
	constructor() {
		console.log("src/Main.hx:14:","Node.js Lowdb Example");
		let now = new Date();
		let adapter = new lowdb_adapters_FileSync("db.json");
		let db = Lowdb(adapter);
	}
	static main() {
		let main = new Main();
	}
}
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
var lowdb_adapters_FileSync = require("lowdb/adapters/FileSync");
{
}
Main.main();
})({});
