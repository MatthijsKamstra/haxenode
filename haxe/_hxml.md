#Haxe build file .hxml

Command Line Arguments

Here is a list of the different arguments that you are able to pass to the Haxe compiler.

These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the haxe compiler as a build script.



### Using a HaXe XML File to Compile
HaXe is a cross platform language. Thus, while compiling your code, you need to tell the haXe compiler which platform you are going to compile to and the information it requires. This is achieved using the hxml file.

## Writing a HXML File

A hxml file consists of what are called compile switches. These are like keywords that tell the compiler how you want your hx files to be compiled. They allow you to perform operations that cannot be achieved in the haXe code ( like directing the haXe compiler ).These switches are followed by `-` or sometimes `--`. 


**The -main switch**

This switch specifies which class should be compiled as the entry class for execution. The entry class is the class which contains the main function which is called first by the computer while executing your program. The class should have a static main function as its member ( we declared this kind of main function in the last lesson of the Getting Started chapter ).
Here is the code for specifying the main class -

```
-main Main
```

This tells the compiler to take the class Main present in the Main.hx file as the main class which contains the static main function.

### The Platform switch

The next switch tells the compiler which platform to compile the code to.
Platform Switch

`-neko`
Compiles for the Neko platform to execute code on server and desktops  

`-swf`
Compiles for the flash platform

`-js`
Compiles for the javascript/web platform

`-cpp`
Compiles into C++ source files and then
to an executable

`-php`
Compiles for the php platform to execute
server side scripts

To use the switch, we specify the switch name followed by the name of the file we get after compiling. For example, if we want to compile haXe to get a swf file we just give the following:

`-swf test.swf`

So, the name of the output swf would be test.swf. Note that we also need to specify the Main class using the switch explained earlier.

### Executing a HXML File

Now, we need to put all this together in one file. Let us say we need to compile a class called Main for the neko platform. This is the hxml file required:

`-main Main`
 
`-neko main.n`

We can put the two switches on the same line also. We save this file as compile.hxml

We can double click on the hxml file to compile or we can open the terminal, go to the directory where the file is located and type
haxe compile.hxml
This will make the haXe compiler compile the instructions specified in the compile.hxml file,.i.e, to compile the Main class to a neko executable and save it as main.n. If you want compile for other platforms, just change the platform switch.

### Compile Without a HXML

You can also compile a haxe file without creating a hxml file. For example if you wanted to compile the above example without a hxml file, you can just type this:
haxe -main Main -neko main.n
You just need to replace the word compile.hxml with its contents.

This method can be used when the compile.hxml file is short. However, when the hxml file contains more information such as libraries to include and other switches it is easier to create a hxml file as you do not need to write its contents over and over again.
The best approach is to use a hxml file.




##Resources:

* <http://old.haxe.org/doc/compiler>
* <http://haxelearning.wikispaces.com/Using+a+HaXe+XML+File+to+Compile>
* <http://blog.onthewings.net/2013/03/04/hxml-tricks-every-haxe-user-should-know/>
* <http://haxe.org/manual/compiler-usage.html>
* <http://matttuttle.com/2015/06/hxml-overview/>

