(function (console) { "use strict";
var Main = function() {
	console.log("Node.js NeDB example");
	var options = { filename : (Path__1||require("path")).join(js_Node.__dirname,"/intermediate.db"), autoload : true};
	var db = new (NeDB__0||require("nedb"))(options);
	db.insert({ _id : "id1", planet : "Mars", system : "solar", inhabited : false, satellites : ["Phobos","Deimos"]});
	db.insert({ _id : "id2", planet : "Earth", system : "solar", inhabited : true, humans : { genders : 2, eyes : true}});
	db.insert({ _id : "id3", planet : "Jupiter", system : "solar", inhabited : false});
	db.insert({ _id : "id4", planet : "Omicron Persei 8", system : "futurama", inhabited : true, humans : { genders : 7}});
	db.insert({ _id : "id5", completeData : { planets : [{ name : "Earth", number : 3},{ name : "Mars", number : 2},{ name : "Pluton", number : 9}]}});
	db.find({ system : "solar"},function(err,docs) {
		console.log("{ system: 'solar' } :: " + docs.length);
	});
	db.find({ system : "solar", inhabited : true},function(err1,docs1) {
		console.log("{ system: 'solar', inhabited: true } :: " + docs1.length);
	});
	db.find({ 'humans.genders' : 2},function(err2,docs2) {
		console.log("{ \"humans.genders\": 2 } :: " + docs2.length);
	});
	db.find({ 'completeData.planets.name' : "Mars"},function(err3,docs3) {
		console.log("docs: " + docs3);
	});
	db.find({ 'completeData.planets.name' : "Jupiter"},function(err4,docs4) {
		console.log("docs: " + docs4);
	});
	db.find({ 'completeData.planets.0.name' : "Earth"},function(err5,docs5) {
		console.log("docs: " + docs5);
	});
	db.find({ humans : { genders : 2}},function(err6,docs6) {
		console.log("docs.length: " + docs6.length);
	});
	db.find({ },function(err7,docs7) {
		console.log("docs.length: " + docs7.length);
	});
	db.findOne({ _id : "id1"},function(err8,doc) {
		console.log("doc.planet: " + doc.planet);
	});
};
Main.main = function() {
	var main = new Main();
};
var js_Node = function() { };
var Path__1 = require("path");
var EventEmitter__2 = require("events").EventEmitter;
var Readable__3 = require("stream").Readable;
var Writable__4 = require("stream").Writable;
var NeDB__0 = require("nedb");
js_Node.__dirname = __dirname;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
