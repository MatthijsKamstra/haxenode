#Installation

Read the how to install **Node.js** and **Haxe** [here](../haxenode/download.md).
Once you have installed **Haxe** you will automatically installed `haxelib`.
The same goes for **Node.js**, you will have automatically installed `NPM`.



##Install Node.js externs for Haxe

Install the [official Haxe node.js externs](https://github.com/HaxeFoundation/hxnodejs) lib via [haxelib](http://lib.haxe.org/p/hxnodejs/).
Haxelib is automaticly installed when installing Haxe and you can see it as a sort of NPM.

```
haxelib install hxnodejs
```

In this tutorial I use mostly js-kit externs, there are more ways to get externs but the js-kit has a lot so it's more a one stop shop thing!


```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib

```



##Install all modules with NPM via package.json

If you have a package.json file in your directory and you run npm install, then npm will look at the dependencies that are listed in that file and download the latest versions satisfying semver rules for all of those.

To do so, `cd` to the correct folder ( `cd path/to/correct/folder/with/package/dot/json/` )

```
npm install
```

This will install everything in `node_modules`, also the npm packages `sqlite3' and `sequelize`.