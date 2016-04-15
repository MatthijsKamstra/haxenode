#Installing

Okay I don't want to mention this again, but you need to install Node.js and Haxe first (read more about that [here](download.md))


##Install Node externs for Haxe



I suggest you install [https://github.com/clemos/haxe-js-kit](https://github.com/clemos/haxe-js-kit).
It has all the externs for **node.js** and **extras**!
In the future the default HaxeFoundation Node.js externs will be used, but the rest of the project is awesome too.


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



