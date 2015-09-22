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



##Install express via NPM :

[Express](https://github.com/strongloop/express) 

> Fast, unopinionated, minimalist web framework for node.

```
npm install express
```



## Install for the more complex example

Express uses more dependencies:

```
npm install morgan
npm install body-parser
npm install serve-favicon
npm install express
```

-----