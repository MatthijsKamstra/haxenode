#TODO

* add images
* add code examples folders
* ask permission from writers blogposts
* write about this article
    *http://saumya.github.io/ray/articles/50/
* https://github.com/clemos/haxetelier-haxe-nodejs
* https://github.com/janekp/saffron
* https://groups.google.com/forum/#!topic/haxelang/6lzIeg6RUC4

-----
 	http://stackoverflow.com/questions/14116253/import-haxe-modules-into-a-node-js-script

//Haxenode.hx

class Haxenode {
  @:expose("hello")
  public static function hello(){
    return "hello";
  }
}
@:expose("hello") part is to put something in module.exports.

Now launch

haxe -js haxenode.js -dce no Haxenode
Now you can use haxenode.js in nodejs

var haxenode = require('./haxenode.js');
var hello = haxenode.hello;
So, this combined together is an answer to your question:

var cp = require('child_process');

function requireHaxe(haxeClassPath,cb){
    //generate a JavaScript module from the Haxe file, and then return the generated JavaScript module

    cp.exec('haxe -js haxenode.js -dce no ' + haxeClassPath,function(err){
        if (err){
            cb(err); return;
        }

        cb(null,require('./haxenode.js'));
    });
}
Mind that output filename is a stub.

But don't do that - better to compile haxe as build step (with all necessary compile options) and then use regular require at runtime.