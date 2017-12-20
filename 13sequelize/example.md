# Example Sequelize

This is a simple example from the [Sequelize](http://docs.sequelizejs.com/en/v3/docs/getting-started/#setting-up-a-connection) website.
You could combine it with the [05website](../05website) example.

We will use a SQLite database, but others are equally easy.

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
		+ db
			- database.sqlite
	+ src
		- Main.hx
	- build.hxml
```

## Install

check out [the installation](installation.md).


## The Main.hx

Open your favorite editor, [copy/paste](code/src/Main.hx) the code and save it in the `src` folder.

I guess you know by now how to start a document, so I will only explain some parts


```
	// Setting up a connection
	var options : SequelizeOptions = {
		host: 'localhost',
		dialect: 'sqlite',

		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},

		// SQLite only
		storage: Node.__dirname + '/db/database.sqlite'
	}

	var sequelize = new Sequelize('database', 'username', 'password', options);

```

__source: <http://docs.sequelizejs.com/en/v3/docs/getting-started/#setting-up-a-connection>__

Okay the only thing that is different is the `SequelizeOptions` type, but that's about it.

Btw... I was looking for a way to create an empty `database.sqlite`, seems that you can use any empty file.


```
	sequelize
		.authenticate()
		.then(function(err) {
			console.log('Connection has been established successfully.');
		})
		.catch_(function (err) {
			console.log('Unable to connect to the database:', err);
		});

```

To get `console.log` working, we just add `import js.Node.*;`.

Really different from the original code is in the promise code: `.catch_(function (err) { ... });`
The reason for this, is that `catch` is a Haxe keyword so you can't use that in your code.

```
	var fields : Dynamic<ModelAttributes> = {
		firstName: {
			type: Sequelize.STRING()
		},
		lastName: {
			type: Sequelize.STRING()
		}
	};
	var user = sequelize.define('user', fields);

```

Bigger change here is `Sequelize.STRING`, because of JavaScripts / Node.js dynamic nature this is possible.
Haxe doesn't do that. So it's a function now: `Sequelize.STRING()` so we can also do `Sequelize.STRING(1234)`

Other change that I made was from `User` to `user` (feels better to have lowerCase variable names)


```
	user.sync({force: true}).then(function () {
		// Table created
		return user.create({
			firstName: 'John',
			lastName: 'Hancock'
		});
	});
```

Exactly the same, moving on...
__(remember that `force:true` will drop the table if it already exists)__

```
	user.findAll().then(function(users) {
	 	console.log(users);
	});

	user.findOne().then(function (user) {
		console.log(user.get('firstName'));
	});
```

I love when the JavaScript code lokes the same in Haxe. Nice Nice Nice!



## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `build.hxml`
3. type `haxe build.hxml`
4. press enter

Remember that for node the start you need to uncomment

```
# -cmd cd bin
# -cmd node example.js
```

The better solution is to use the automation


## Automation


Update the `node_modules`

```
npm install
```

This will create a new folder with modules-folders in it:

```
+ node_modules
	+ livereload
	+ nodemon
	+ onchange

```


Start NPM watch so it will rebuild `build.hxml` as soon as file changes

```
npm run watch
```

And your done!


Cool huh!

----

To stop the terminal process

```
Ctrl + c
```



-----