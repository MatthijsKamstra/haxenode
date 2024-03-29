# Installation

Read the how to install **Node.js** and **Haxe** [here](../haxenode/download.md).
Once you have installed **Haxe** you will automatically installed `haxelib`.
The same goes for **Node.js**, you will have automatically installed `NPM`.

## Install Node.js externs for Haxe

Install the [official Haxe node.js externs](https://github.com/HaxeFoundation/hxnodejs) lib via [haxelib](http://lib.haxe.org/p/hxnodejs/).
Haxelib is automaticly installed when installing Haxe and you can see it as a sort of NPM.

```bash
haxelib install hxnodejs
```

## AND install haxelow via haxelib

Use haxelib to install **haxelow** :

```bash
haxelib install haxelow
```

## Install Steno via NPM:

haxelow uses steno to write to disk, so you need to install it using NPM.

```
npm install --save steno
```
