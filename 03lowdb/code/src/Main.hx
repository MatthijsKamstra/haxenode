package;

import js.npm.FileSync;
import js.html.FileReaderSync;
import js.Syntax;
import Lowdb;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main {
	function new() {
		trace("Node.js Lowdb Example");

		// var str = Date.now();

		// var _lowdb = Lowdb.call('db.json');
		// Lowdb.query(_lowdb, 'posts').push({title: 'Lowdb is awesome', date: str});

		// trace(Lowdb.query(_lowdb, 'posts').find({title: 'Lowdb is awesome'}));

		// // _lowdb.save();
		// trace("_lowdb.object: " + _lowdb.object);

		var adapter = new FileSync('db.json');
		var db = Lowdb.call(adapter);

		trace(Type.typeof(db));
		trace(db);

		// Set some defaults (required if your JSON file is empty)
		untyped db.defaults({posts: [], user: {}, count: 0}).write();

		// Add a post
		untyped db.get('posts').push({id: 1, title: 'lowdb is awesome'}).write();

		// Set a user using Lodash shorthand syntax
		untyped db.set('user.name', 'typicode').write();

		// Increment count
		untyped db.update('count', n -> n + 1).write();
	}

	static public function main() {
		var main = new Main();
	}
}
