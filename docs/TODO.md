# TODO

```
-D hxnodejs_no_version_warning
```



```
import js.Node.console;

...

console.log()

```



- https://revolugame.com/2017/03/04/haxe-nodejs-module.html





* ask permission from writers blogposts
* write about this article
    * http://saumya.github.io/ray/articles/50/
* https://github.com/clemos/haxetelier-haxe-nodejs
* https://github.com/janekp/saffron


### autoconvert
* http://lib.haxe.org/p/refactor

```
js_to_haxe.cmd <path_to_js_source_directory>
```

```
haxelib install refactor

```



## automated convert

haxelib run refactor convert --exclude-string-literals --exclude-comments PATH_TO_SOURCE_JS_FOLDER *.js PATH_TO_DEST_HAXE_FOLDER /[.]js/.hx/ js_to_haxe.rules

haxelib run refactor convert --exclude-string-literals --exclude-comments ~/Documents/workingdir/haxe/haxejs/05externs/code/bin *.js ~/Documents/workingdir/haxe/haxejs/05externs/code/bin/out /[.]js/.hx/ js_to_haxe.rules




----

https://www.patreon.com/posts/2740520

### Examples DB
https://github.com/louischatriot/nedb

### desktop
https://github.com/nwjs/nw.js/

-----

http://book.mixu.net/node/ch10.html


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