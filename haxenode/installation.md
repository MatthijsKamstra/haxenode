#Install Haxenode
  

##Install node externs for Haxe

Setup haxelib if you haven't done so already
    
```
haxelib setup
```   
And follow instructions.


Haxe will have default externs for working with `node.js` : [https://github.com/HaxeFoundation/hxnodejs/](https://github.com/HaxeFoundation/hxnodejs/) but I have no idea when that will be released.

Currently I would suggest you install
[https://github.com/clemos/haxe-js-kit](https://github.com/clemos/haxe-js-kit).
It has all the externs for `node.js` and **extras**!


##Install **js-kit** using haxelib:

Currently this is done via git, but it will not change a lot, so you could ignore this message :D

```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib
```

(optional) check that js-kit was installed successfully

```
haxelib list
```

search for js-kit:

```
...
js-kit: git [dev:/usr/lib/haxe/lib/js-kit/git]
...
```

