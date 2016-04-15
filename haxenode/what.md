# What is Haxe Node?

## All the power of Haxe

* [Strong Typing](http://haxe.org/manual/types.html) 
* [Inlining](http://haxe.org/manual/class-field-inline.html) 
* [Interfaces](http://haxe.org/manual/types-interfaces.html) 
* [Type inference](http://haxe.org/manual/type-system-type-inference.html) 
* [Generics](http://haxe.org/manual/type-system-type-parameters.html)
* [Packages](http://haxe.org/manual/type-system-modules-and-paths.html)
* [Classes](http://haxe.org/manual/types-class-instance.html)
* [Conditionals](http://haxe.org/manual/lf-condition-compilation.html) 
* [Macros](http://haxe.org/manual/macro.html)
* [Enums](http://haxe.org/manual/types-enum-instance.html)
* [Iterators](http://haxe.org/manual/lf-iterators.html) 


## All the benefits of Node.js

Event-driven, non-blocking design. Use npm and many open-source node.js libraries and frameworks.

## What is Strong Typing?
The Haxe compiler uses static type checking at compile-time so you have a stronger guarantee of the application&#039;s behavior at run-time. Haxe uses several kinds of types.

```
class Int extends Float { }
```
		  
**Enum**
has a finite number of constructors

```
enum Bool {
	true;
	false;
}
```			  

**Dynamic** 
skips compile-time type-checking
		  

**Typedef**
Define a structure or long type to reuse throughout your applications.

```
typedef User = {
	var age : Int;
	var name : String;
}
// ....
var u : User = { age : 26, name : "Tom" };
```

**Function**
Define function types as variables.

```
// assign a function type to a variable "type", function accepts a String and returns a String

var ftype : String -> String

// create a function
function modifyString(s : String) : String {
	return StringTools.replace(s," ","_");
}

// check against it
static function main(){
	trace( type(modifyString) == f ); // print true
}
```


**Extensions**
Extends either a typedef or a class on-the-fly.
Or create cascading typedefs.

```
// anonymous typedef extension

typedef Point = {
	var x : Int;
	var y : Int;
}

// define 'p' as a Point with an additional field z

var p : {> Point, z : Int }
p = { x : 0, y : 0, z : 0 }; // works
p = { x : 0, y : 0 }; // fails
```

Use Extensions to create cascading typedefs

```
typedef Point = {
	var x : Int;
	var y : Int;
}
typedef Point3D = {> Point,
	var z : Int;
}
```				
			  
## What is Inlining?

[http://haxe.org/ref/inline]()

The main advantage of using &ldquo;inline&rdquo; is that you can use as many variables as you want without slowing down your code with these variables accesses since the value is directly replaced in the compiled/generated code.

```
// Inlining Static Variables
class Test {
	static inline var WIDTH = 500; // type Int inferred
	
	static function main() {
		trace(WIDTH);
		// variable is replaced with 500 at compile-time
	}
}
```


[http://haxe.org/ref/inline]()

The principle is the same for a method. The less expensive function call is the one that is never done. In order to achieve that for small methods that are often called, you can &ldquo;inline&rdquo; the method body at the place the method is called.

```
// Inlining Methods
class Point {
	public var x : Float;
	public var y : Float;
	public function new(x,y) { this.x = x; this.y = y; }
	public inline function add(x2,y2) { 
	return new Point(x+x2,y+y2); }
}
class Test {
	public static function main() {
		var p = new Point(1,2);
		var p2 = p.add(2,3);
	 	// is the same as writing :
		var p2 = new Point(p.x+2,p.y+3);
	}
}
```

## What is an Interface?

[http://en.wikipedia.org/wiki/Interface_(computing)#Software_interfaces_in_object_oriented_languages]()

In object-oriented languages the term &ldquo;interface&rdquo; is often used to define an abstract type that contains no data, but exposes behaviors defined as methods. A class having all the methods corresponding to that interface is said to implement that interface. Furthermore, a class can implement multiple interfaces, and hence can be of different types at the same time.

An interface is hence a type definition; anywhere an object can be exchanged (in a function or method call) the type of the object to be exchanged can be defined in terms of an interface instead of a specific class. This allows later code to use the same function exchanging different object types; hence such code turns out to be more generic and reusable.

		  
## What is Type Inference?

[http://haxe.org/ref/type_infer]()

Type Inference means that the type information is not only checked in the program, it&#039;s also carried when typing, so it doesn&#039;t have to be resolved immediately. For example a local variable can be declared without any type (it will have the type Unknown) and when first used, its type will be set to the corresponding one.
Type Inference enables the whole program to be strictly typed without any need to put types everywhere. In particular, local variables do not need to be typed, their types will be inferred when they are first accessed for reading or writing
	  
```
var loc;
type(loc); // print Unknown<0>
loc = "hello";
type(loc); // print String
```	  

## What are Generics?

[http://haxe.org/ref/type_params]()

A class can have several type parameters that can be used to get extensible behavior.
You can define your own parameterized classes with several type parameters for your own usage when you need it.

```
class GenericTest<T> {
  	private var something:T;
  	public function putSomething(value:T):T{
		something = value;
    	return something;
  	}
	public function getSomething():T {
		return something;
	}
}

// Generic Factory Method example by <em>hhoelzer</em>
class Item<T> {
	public var value:T;
	// factory method
	public static function create <T> ():Item<T> {
		return new Item<T>();
	}
	private function new () {}  // private constructor
}

// test it
class Main {
	public static function main () {
		\* this works because of type-inference, the compiler
		knows that the return type must be of type Item<Int>*/
		var myItem:Item<Int> = Item.create(); 
		myItem.value = 10; // works
		trace(myItem.value); // 10

		// complex type example
		var myItem2:Item<Array<Int>> = Item.create();
		myItem2.value = [1, 2, 3]; // works too
		trace(myItem2.value); // [1,2,3]
  	}
}
```

## What is a Package?

[http://haxe.org/ref/packages]()

Packages are used to organize and contain classes in namespaces to prevent collisions and group functionally similar files together.

the class   
`haxe.unit.TestCase`

belongs to package  
`haxe.unit`

and the class file is located in  
`haxe/unit/TestCase.hx`


> // in osx: /usr/lib/haxe/std/haxe/unit/TestCase.hx
		  

## What is a Class?

[http://en.wikipedia.org/wiki/Class_(computer_programming)]()

In object-oriented programming, a class is a construct that is used as a blueprint to create instances of itself – referred to as class instances, class objects, instance objects or simply objects. A class defines constituent members which enable these class instances to have state and behavior. Data field members (member variables or instance variables) enable a class object to maintain state. Other kinds of members, especially methods, enable a class object's behavior. Class instances are of the type of the associated class.
		  

## What is a Macro?

[http://haxe.org/manual/macros]()

Some languages features such as C #define enable the user to define syntax shortcuts. They are useful to perform some pseudo-code-generation, but at the same time allow to modify the syntax of the language, making the code unreadable for other developers.

The Haxe macro system allows powerful compile-time code-generation without modifying the Haxe syntax.

Macros are defined with the `@:macro` Metadata

```
// MyMacro.hx

import haxe.macro.Expr;
class MyMacro {
	@:macro public static function getDate() {
		var date = Date.now().toString();
		var pos = haxe.macro.Context.currentPos();
		return { expr : EConst(CString(date)), pos : pos };
	}
}

// Test.hx
class Test {
	static function main(){
		var now = MyMacro.getDate(); // String is inferred
		trace(now);
		// print the Date and time this file was <strong>compiled.</strong>
	}
}
```

>
Note: unlike _inline_ functions you can do actual code generation inside the macro, before it gets compiled.
I highly recommend reading more about this feature if you are new to it, it is very powerful.
>		  

## What is an Enum?

[http://haxe.org/ref/enums]()
Enums are different to classes and are declared with a finite number of constructors.
When you want to ensure that only a fixed number of values are used then enums are the best thing since they guarantee that other values cannot be constructed.

```
enum Color {
	red;
	green;
	blue;
}

class ColorTools {
	static function toInt( c : Color ) : Int {
		return switch( c ) {
			case red: 0xFF0000;
			case green: 0x00FF00;
			case blue: 0x0000FF;
		}
	}
}
```

## What is an Iterator?

[http://haxe.org/ref/iterators]()

An iterator is an object which follows the Iterator typedef (The type T is the iterated type) :

```
typedef Iterator<T> = {
	function hasNext() : Bool;
	function next() : T;
}
```

[http://haxe.org/ref/iterators]()

You can use the for syntax in order to execute iterators. The simplest iterator is the IntIter iterator which can easily be built using the operator `...` (three dots). For example this will list all numbers from 0 to 9 :

```
for( i in 0...10 ) {
	trace(i);
}

// Or the usual for loop :
for( i in 0...arr.length ) {
	foo( arr[i] );
}

// Same as :
for( item in arr ) {
	foo( item );
}
```  

## What is Conditional Compiling?

[http://haxe.org/ref/conditionals]()

Sometimes you might want to have a single library using specific API depending on the platform it is compiled on. At some other time, you might want to do some optimizations only if you turn a flag ON. For all that, you can use conditional compilation macros (AKA preprocessor macros)
If the following example was compiled with `-js out.js -D nodejs`
then starting the compiled javascript file with the node command will echo &ldquo;hello javascript!&rdquo; and &ldquo;hello node.js!&rdquo; to the console.

```
// nested conditional example:

#if js
	// haXe code for javascript target
	js.Lib.alert(&ldquo;hello javascript!&rdquo;);
#if nodejs
	// haXe code specific to nodejs
	Node.console.log(&ldquo;hello node.js!&rdquo;);
#else
	// compile flag -D nodejs was not set
#end
#elseif php
	// haXe code specific to php target
	php.Lib.println(&ldquo;hello php!&rdquo;);
#else
	// do something else
#end
```

```
// multiplatform code example:

#if flash8
	// haXe code specific for flash player 8

#elseif flash
	// haXe code specific for flash platform (any version)

#elseif js
	// haXe code specific for javascript plaform

#elseif neko
	// haXe code specific for neko plaform

#else 
	// do something else

#error  
	// default: &ldquo;Not implemented on this platform&rdquo;

// or set your own error message
#error 
	&ldquo;Custom error message&rdquo;
#end
```