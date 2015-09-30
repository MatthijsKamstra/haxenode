#Installation

Read the how to install **Node.js** and **Haxe** [here](../haxenode/download.md).  
Once you have installed **Haxe** you will automatically installed `haxelib`.  
The same goes for **Node.js**, you will have automatically installed `NPM`.


This example is not about Node.js per se, but we use an node example to explain the workings of automation.
And that's why we need to install js-kit.


##Install Node.js externs for Haxe

Use haxelib to install **js-kit** :

> Currently this is done via git, but it will not change a lot, so you could ignore this message :D

```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib
```


##Install Grunt with NPM

You really should read more about Grunt [here](http://gruntjs.com/getting-started), it will explain the workings of Grunt.
But the quick-and-dirty install is the line below in your terminal.

```
npm install -g grunt-cli
```
 

## Install Nodemon with NPM

To restart node we will use [Nodemon](http://nodemon.io/).

>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.
>
>Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes. 


```
npm install -g nodemon
```

