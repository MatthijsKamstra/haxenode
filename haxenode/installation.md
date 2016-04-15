#Installing

Okay I don't want to mention this again, but you need to install Node.js and Haxe first (read more about that [here](download.md))


##Install Node externs for Haxe


The HaxeFoundation maintains the [hxnodejs](https://github.com/HaxeFoundation/hxnodejs) externs.

Beside the hsxnodejs externs I suggest you install [https://github.com/clemos/haxe-js-kit](https://github.com/clemos/haxe-js-kit) as well. It has all the externs this documentation is written upon.



##Install hxnodejs

Install [hxnodejs](http://lib.haxe.org/p/hxnodejs) via haxelib:

```
haxelib install hxnodejs
```


##Install **js-kit** using haxelib:

You install via git:

```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib
```

Optional: check that js-kit was installed successfully

```
haxelib list
```

Search for js-kit:

```
...
js-kit: git [dev:/usr/lib/haxe/lib/js-kit/git]
...
```



