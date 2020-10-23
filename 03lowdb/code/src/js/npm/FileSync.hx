package js.npm;

@:jsRequire("lowdb/adapters/FileSync")
@:native('FileSync')
extern class FileSync {
	function new(name:String);
}
