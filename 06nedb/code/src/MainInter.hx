package ;

import js.Node;
import js.node.Path;
import js.npm.NeDB;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class MainInter
{
	function new()
	{
		trace("Node.js NeDB example");

		// https://github.com/louischatriot/nedb# finding-documents

		var options : DataStoreOptions = { filename : Path.join(Node.__dirname, '/update.db'), autoload : true, timestampData : true};
		var db = new NeDB(options);

		var _planet : Planet = { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false };

		db.insert( _planet );

		db.update( {_id: 'id1'} , { $set: { satellites: ['Phobos', 'Deimos'] }} );

	}

	static public function main()
	{
		var main = new MainInter();
	}
}


typedef Planet = {
	@:optional var _id : String; // 'id1'
	var planet : String; //'Mars'
	var system : String; // 'solar'
	var inhabited : Bool; // false
	@:optional var satellites : Array<String>; // ['Phobos', 'Deimos'] } );
	@:optional var humans : {
		var genders: Int;
		@:optional var eyes: Bool;
	};
	@:optional var completeData : Dynamic;
}