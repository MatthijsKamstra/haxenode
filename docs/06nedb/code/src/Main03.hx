package;

import js.Node;
import js.node.Path;
import Nedb;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main03 {
	function new() {
		trace("Node.js NeDB example 03");

		// https://github.com/louischatriot/nedb#finding-documents

		var options:nedb.DataStoreOptions = {filename: Path.join(Node.__dirname, '/database03.db'), autoload: true};
		var db = new Nedb(options);

		db.insert({
			_id: 'id1',
			planet: 'Mars',
			system: 'solar',
			inhabited: false,
			satellites: ['Phobos', 'Deimos']
		});
		db.insert({
			_id: 'id${Date.now().getTime() + 2}',
			planet: 'Earth',
			system: 'solar',
			inhabited: true,
			humans: {genders: 2, eyes: true}
		});
		db.insert({
			_id: 'id${Date.now().getTime() + 3}',
			planet: 'Jupiter',
			system: 'solar',
			inhabited: false
		});
		db.insert({
			_id: 'id${Date.now().getTime() + 4}',
			planet: 'Omicron Persei 8',
			system: 'futurama',
			inhabited: true,
			humans: {genders: 7}
		});
		db.insert({
			_id: 'id${Date.now().getTime() + 5}',
			completeData: {
				planets: [
					{name: 'Earth', number: 3},
					{name: 'Mars', number: 2},
					{
						name: 'Pluton',
						number: 9
					}
				]
			}
		});

		// Finding all planets in the solar system
		db.find({system: 'solar'}, function(err, docs) {
			// docs is an array containing documents Mars, Earth, Jupiter
			// If no document is found, docs is equal to []
			trace('{ system: \'solar\' } :: ${docs.length}');
		});

		// Finding all planets whose name contain the substring 'ar' using a regular expression
		// db.find({ planet: /ar/ }, function (err, docs) {
		// 	// docs contains Mars and Earth
		// 	trace ('{ planet: /ar/ } :: $docs');
		// });

		// Finding all inhabited planets in the solar system
		db.find({system: 'solar', inhabited: true}, function(err, docs) {
			// docs is an array containing document Earth only
			trace('{ system: \'solar\', inhabited: true } :: ' + docs.length);
		});

		// Use the dot-notation to match fields in subdocuments
		db.find({"humans.genders": 2}, function(err, docs) {
			// docs contains Earth
			trace('{ "humans.genders": 2 } :: ' + docs.length);
		});

		// Use the dot-notation to navigate arrays of subdocuments
		db.find({"completeData.planets.name": "Mars"}, function(err, docs) {
			// docs contains document 5
			trace("docs: " + docs);
		});

		db.find({"completeData.planets.name": "Jupiter"}, function(err, docs) {
			// docs is empty
			trace("docs.length: " + docs.length);
		});

		db.find({"completeData.planets.0.name": "Earth"}, function(err, docs) {
			// docs contains document 5
			// If we had tested against "Mars" docs would be empty because we are matching against a specific array element
			trace("docs.length: " + docs.length);
		});

		// You can also deep-compare objects. Don't confuse this with dot-notation!
		db.find({humans: {genders: 2}}, function(err, docs) {
			// docs is empty, because { genders: 2 } is not equal to { genders: 2, eyes: true }
			trace("docs.length: " + docs.length);
		});

		// Find all documents in the collection
		db.find({}, function(err, docs) {
			trace("docs.length: " + docs.length);
		});

		// The same rules apply when you want to only find one document
		db.findOne({_id: 'id1'}, function(err, doc) {
			// doc is the document Mars
			// If no document is found, doc is null
			trace("doc.planet: " + doc.planet);
		});
	}

	static public function main() {
		var main = new Main03();
	}
}

typedef Planet = {
	@:optional var _id:String; // 'id1'
	var planet:String; // 'Mars'
	var system:String; // 'solar'
	var inhabited:Bool; // false
	@:optional var satellites:Array<String>; // ['Phobos', 'Deimos'] } );
	@:optional var humans:{
		var genders:Int;
		@:optional var eyes:Bool;
	};
	@:optional var completeData:Dynamic;
}
