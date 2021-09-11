package;

import js.Node;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main {
	function new() {
		trace("Node.js Haxelow Example");

		// Create the database
		var db = new HaxeLow('db.json');

		// Get a collection of a class
		var persons = db.col(Person);

		// persons is now an Array<Person>
		// that can be manipulated as you like
		persons.push(new Person('Test-${Date.now().getTime()}', Math.round(Math.random() * 100)));

		// Save all collections to disk.
		// This is the only way to save, no automatic saving
		// takes place.
		db.save();

		trace(db.col(Person).length);

		trace("open /bin/db.json");
	}

	static public function main() {
		var main = new Main();
	}
}

class Person {
	public function new(name, age) {
		this.name = name;
		this.age = age;
	}

	public var name:String;
	public var age:Int;
}
