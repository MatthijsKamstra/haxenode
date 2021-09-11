(function ($global) { "use strict";
class Main03 {
	constructor() {
		console.log("src/Main03.hx:12:","Node.js NeDB example 03");
		let options = { filename : js_node_Path.join(__dirname,"/database03.db"), autoload : true};
		let db = new Nedb(options);
		db.insert({ _id : "id1", planet : "Mars", system : "solar", inhabited : false, satellites : ["Phobos","Deimos"]});
		db.insert({ _id : "id" + (new Date().getTime() + 2), planet : "Earth", system : "solar", inhabited : true, humans : { genders : 2, eyes : true}});
		db.insert({ _id : "id" + (new Date().getTime() + 3), planet : "Jupiter", system : "solar", inhabited : false});
		db.insert({ _id : "id" + (new Date().getTime() + 4), planet : "Omicron Persei 8", system : "futurama", inhabited : true, humans : { genders : 7}});
		db.insert({ _id : "id" + (new Date().getTime() + 5), completeData : { planets : [{ name : "Earth", number : 3},{ name : "Mars", number : 2},{ name : "Pluton", number : 9}]}});
		db.find({ system : "solar"},function(err,docs) {
			console.log("src/Main03.hx:64:","{ system: 'solar' } :: " + docs.length);
		});
		db.find({ system : "solar", inhabited : true},function(err,docs) {
			console.log("src/Main03.hx:76:","{ system: 'solar', inhabited: true } :: " + docs.length);
		});
		db.find({ "humans.genders" : 2},function(err,docs) {
			console.log("src/Main03.hx:82:","{ \"humans.genders\": 2 } :: " + docs.length);
		});
		db.find({ "completeData.planets.name" : "Mars"},function(err,docs) {
			console.log("src/Main03.hx:88:","docs: " + docs);
		});
		db.find({ "completeData.planets.name" : "Jupiter"},function(err,docs) {
			console.log("src/Main03.hx:93:","docs.length: " + docs.length);
		});
		db.find({ "completeData.planets.0.name" : "Earth"},function(err,docs) {
			console.log("src/Main03.hx:99:","docs.length: " + docs.length);
		});
		db.find({ humans : { genders : 2}},function(err,docs) {
			console.log("src/Main03.hx:105:","docs.length: " + docs.length);
		});
		db.find({ },function(err,docs) {
			console.log("src/Main03.hx:110:","docs.length: " + docs.length);
		});
		db.findOne({ _id : "id1"},function(err,doc) {
			console.log("src/Main03.hx:117:","doc.planet: " + doc.planet);
		});
	}
	static main() {
		let main = new Main03();
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
Main03.main();
})({});
