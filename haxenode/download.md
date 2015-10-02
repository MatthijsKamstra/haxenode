#Install Haxe and Node.js

Before you can use there are a couple of thing you need to do.

Obviously you need to install Haxe. There are a [couple of ways to do it](../haxe/installation.md), but in this document I will only send you to the [official place](#haxe).

Don't want to kick in some open doors, but before you can use Node.js ... you need to [install](#node) that also.

Last but not least, you need to install the [Haxe Externs](#externs). These are the "translators" from untyped node.js code to typed Haxe code. You only need to install the Node.js externs but get other fun stuff as wel. You will need them further on these documentation. 


Current versions are:  

* **Haxe** v3.2.0
* **Node.js** v0.12.7

But if the version numbers changed, it only means I haven't updated this part of the document in some time :D

<a name="haxe"></a>
##Download Haxe

![](../img/haxe_logo.png)

* Get your version here: [http://haxe.org/download/](http://haxe.org/download/)

<a name="node"></a>
##Download Node.js

![](../img/nodejs_logo.png)

* Get your version here: [https://nodejs.org/](https://nodejs.org/)

<a name="externs"></a>
##Externs

For now you need to install externs via haxelib.   
But when Haxe hits version 3.2.1 you don't have to (the node externs will be part of the install).
So for now, I advice to install the Haxe Externs from js-kit.   
**(install this after you have installed Haxe; you need haxelib to install js-kit this way)**

```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib

```