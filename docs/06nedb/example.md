# Example NeDB

What is NeDB (Node embedded database)?

> Embedded persistent database for Node.js, written in Javascript, with no dependency (except NPM modules), which can be used with a simple require statement. The API is a subset of MongoDB's. You can use it as a persistent or an in-memory only datastore, and it can also be used in all recent browsers (Chrome, Firefox, Safari, IE9+).

This example is a combination of tutorials/examples below:

- https://ehret.me/a-desktop-web-app-with-node-webkit-database-with-nedb/
- https://github.com/louischatriot/nedb#creatingloading-a-database

Although js-kit is awesome, it doesn't have externs for NeDB...
So I added it [here](https://github.com/MatthijsKamstra/haxenode/blob/master/docs/06nedb/code/src/js/npm/NeDB.hx).

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

## The MainBasic.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```haxe
package ;
import js.Node;
import js.node.Path;
import js.npm.NeDB;
class MainBasic
{
	function new()
	{
		var options : DataStoreOptions = { filename : Path.join(Node.__dirname, '/basic.db'), autoload : true};
		var db = new NeDB(options);
		var doc = {
			hello: 'world',
			n: 5,
			today: Date.now(),
			nedbIsAwesome: true,
			notthere: null,
			// notToBeSaved: undefined,  // Will not be saved (Doesn't even work in Haxe: src/MainBasic.hx:29: characters 17-26 : Unknown identifier : undefined)
			fruits: [ 'apple', 'orange', 'pear' ],
			infos: { name: 'nedb' }
		};
		db.insert(doc, function (err, newDoc) {
			// Callback is optional
			// newDoc is the newly inserted document, including its _id
			// newDoc has no key called notToBeSaved since its value was undefined
			trace ('newDoc: $newDoc');
		});
	}

	static public function main()
	{
		var main = new MainBasic();
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
