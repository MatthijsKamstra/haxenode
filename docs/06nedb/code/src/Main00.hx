package;

import js.Node;
import js.node.Path;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main00 {
	function new() {
		trace("Node.js NeDB example");

		// https://github.com/louischatriot/nedb#creatingloading-a-database

		var options:nedb.DataStoreOptions = {filename: Path.join(Node.__dirname, '/database00.db'), autoload: true};
		var db = new Nedb(options);

		var doc = {
			hello: 'world',
			n: 5,
			today: Date.now(),
			nedbIsAwesome: true,
			notthere: null,
			// notToBeSaved: undefined,  // Will not be saved (Doesn't even work in Haxe: src/Main00.hx:29: characters 17-26 : Unknown identifier : undefined)
			fruits: ['apple', 'orange', 'pear'],
			infos: {name: 'nedb'}
		};

		db.insert(doc, function(err, newDoc) {
			// Callback is optional
			// newDoc is the newly inserted document, including its _id
			// newDoc has no key called notToBeSaved since its value was undefined

			trace('newDoc: $newDoc');
		});
	}

	static public function main() {
		var main = new Main00();
	}
}
