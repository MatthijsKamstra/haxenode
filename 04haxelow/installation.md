#Installation

Read the how to install **Node.js** and **Haxe** [here](../haxenode/download.md).  
Once you have installed **Haxe** you will automatically installed `haxelib`.  
The same goes for **Node.js**, you will have automatically installed `NPM`.


##Install Node.js externs for Haxe

Use haxelib to install **js-kit** :

> Currently this is done via git, but it will not change a lot, so you could ignore this message :D

```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib

```

## AND install haxelow via haxelib

Use haxelib to install **haxelow** :

```
haxelib install haxelow
```

##Install Steno via NPM:

haxelow uses steno to write to disk, so you need to install it using NPM.

```
npm install --save steno
```