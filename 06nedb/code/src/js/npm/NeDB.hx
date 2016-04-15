package js.npm;


typedef Cursor<T> = {
	function sort(query:Dynamic):Cursor<T>;
	function skip(n:Float):Cursor<T>;
	function limit(n:Float):Cursor<T>;
	function projection(query:Dynamic):Cursor<T>;
	function exec(callback:Error -> Array<T> -> Void):Void;
};

typedef CursorCount = {
	function exec(callback:Error -> Float -> Void):Void;
};

typedef DataStoreOptions = {
	@:optional
	var filename : String;
	@:optional
	var inMemoryOnly : Bool;
	@:optional
	var nodeWebkitAppName : Bool;
	@:optional
	var autoload : Bool;
	@:optional
	var timestampData : Bool;
	@:optional
	var onload : Error -> Dynamic;
	@:optional
	var afterSerialization : String -> String;
	@:optional
	var beforeDeserialization : String -> String;
	@:optional
	var corruptAlertThreshold : Float;
};

typedef UpdateOptions = {
	@:optional
	var multi : Bool;
	@:optional
	var upsert : Bool;
};

typedef RemoveOptions = {
	@:optional
	var multi : Bool;
};

typedef EnsureIndexOptions = {
	var fieldName : String;
	@:optional
	var unique : Bool;
	@:optional
	var sparse : Bool;
};

typedef Persistence = {
	function compactDatafile():Void;
	function setAutocompactionInterval(interval:Float):Void;
	function stopAutocompaction():Void;
};

/**
 * @author Matthijs Kamstra aka [mck]
 */
extern class NeDB
implements npm.Package.Require < "nedb", "^1.2.0" >
{
	@:overload(function(path:String):Void { })
	@:overload(function(options:NeDB.DataStoreOptions):Void { })
	function new():Void;

	var persistence : NeDB.Persistence;
	function loadDatabase(?cb:Error -> Void):Void;
	function getAllData():Array<Dynamic>;
	function resetIndexes(newData:Dynamic):Void;
	function ensureIndex(options:NeDB.EnsureIndexOptions, ?cb:Error -> Void):Void;
	function removeIndex(fieldName:String, ?cb:Error -> Void):Void;

	@:overload(function<T>(doc:Array<T>):Void { })
	function addToIndexes<T>(doc:T):Void;

	@:overload(function<T>(doc:Array<T>):Void { })
	function removeFromIndexes<T>(doc:T):Void;

	@:overload(function<T>(updates:Array<{ var oldDoc : T; var newDoc : T; }>):Void { })
	function updateIndexes<T>(oldDoc:T, newDoc:T):Void;
	function getCandidates(query:Dynamic):Void;
	function insert<T>(newDoc:T, ?cb:Error -> T -> Void):Void;

	@:overload(function(query:Dynamic):NeDB.CursorCount { })
	function count(query:Dynamic, callback:Error -> Float -> Void):Void;

	@:overload(function<T>(query:Dynamic, projection:T):NeDB.Cursor<T> { })
	@:overload(function<T>(query:Dynamic, callback:Error -> Array<T> -> Void):Void { })
	@:overload(function<T>(query:Dynamic):NeDB.Cursor<T> { })
	function find<T>(query:Dynamic, projection:T, callback:Error -> Array<T> -> Void):Void;
	
	@:overload(function<T>(query:Dynamic, callback:Error -> T -> Void):Void { })
	function findOne<T>(query:Dynamic, projection:T, callback:Error -> T -> Void):Void;
	function update(query:Dynamic, updateQuery:Dynamic, ?options:NeDB.UpdateOptions, ?cb:Error -> Float -> Bool -> Void):Void;
	
	@:overload(function(query:Dynamic, ?cb:Error -> Float -> Void):Void { })
	function remove(query:Dynamic, options:NeDB.RemoveOptions, ?cb:Error -> Float -> Void):Void;
}