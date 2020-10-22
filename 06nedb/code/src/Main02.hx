package;

import js.Node;
import js.node.Path;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main02 {
	function new() {
		trace("Node.js NeDB example");

		// https://github.com/louischatriot/nedb#finding-documents

		var options:nedb.DataStoreOptions = {filename: Path.join(Node.__dirname, '/database02.db'), autoload: true, timestampData: true};
		var db = new Nedb(options);

		var _planet:Planet = {
			_id: 'id1',
			planet: 'Mars',
			system: 'solar',
			inhabited: false
		};

		db.insert(_planet);

		db.update({_id: 'id1'}, {$set:{satellites:['Phobos', 'Deimos']}});
	}

	static public function main() {
		var main = new Main02();
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
