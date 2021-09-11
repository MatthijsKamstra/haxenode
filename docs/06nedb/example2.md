# Example NeDB

What is NeDB (Node embedded database)?

> Embedded persistent database for Node.js, written in Javascript, with no dependency (except NPM modules), which can be used with a simple require statement. The API is a subset of MongoDB's. You can use it as a persistent or an in-memory only datastore, and it can also be used in all recent browsers (Chrome, Firefox, Safari, IE9+).

This example is a combination of tutorials/examples below:

- https://github.com/louischatriot/nedb#finding-documents

Although js-kit is awesome, it doesn't have externs for NeDB...
So I added it [here](/code/src/js/npm/NeDB.hx).

check out the first [example](example.md)

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		+ js
			+ npm
				- NeDB.hx
		- Main.hx
	- javascript.hxml
```

## Install

Check out [the installation](installation.md).

## The Main.hx

It's really a long list, so not everything is written in this example, download the [source Main.hx](code/src/Main.hx) or view it [here](https://github.com/MatthijsKamstra/haxenode/blob/master/docs/06nedb/code/src/Main.hx).

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```haxe
package ;
import js.Node;
import js.node.Path;
import js.npm.NeDB;
class Main
{
	function new()
	{
		// https://github.com/louischatriot/nedb#finding-documents
		var options : DataStoreOptions = { filename : Path.join(Node.__dirname, '/intermediate.db'), autoload : true};
		var db = new NeDB(options);

		db.insert( { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] } );
		db.insert( { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } } );
		db.insert( { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false } );
		db.insert( { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } } );
		db.insert( { _id: 'id5', completeData: { planets: [ { name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 } ] } } );

		// Finding all planets in the solar system
		db.find({ system: 'solar' }, function (err, docs) {
			// docs is an array containing documents Mars, Earth, Jupiter
			// If no document is found, docs is equal to []
			trace ('{ system: \'solar\' } :: ${docs.length}');
		});

		// this example works, but check out the source file  of this class for more examples
	}

	static public function main()
	{
		var main = new Main();
	}
}

```

## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`
This is the short version, you want to chech out the full version open this [file](/code/javascript.hxml);

```
# // javascript.hxml
-lib js-kit
-lib hxnodejs
-cp src
-main Main
-js bin/example.js
-cmd cd bin
-cmd node example.js
```

## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml`
3. type `haxe javascript.hxml`
4. press enter

---
