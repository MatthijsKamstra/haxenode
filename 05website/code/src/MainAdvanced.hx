package;

import js.Node;
import js.node.Http;
import js.node.Path;
import Express;
import Morgan;
import express.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class MainAdvanced {
	function new() {
		trace("Express website (Advanced): open browser at http://localhost:3000");
		trace("Stop node.js : CTRL + c");

		// https://www.codementor.io/nodejs/tutorial/build-google-tv-raspberrypi-nodejs-socket-io
		// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
		// http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus

		var app = Express.call();

		// all environments
		app.set('port', 3000);
		app.set('views', Node.__dirname + '/public/views');
		app.set('view engine', 'jade');
		// app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		// if you read the code from Intermediate example you noticed Logger class here.
		// for some reason Morgan is used in js-kit, which you will see when you open the Logger.hx class I added :P
		// app.use(Morgan.call('dev'));

		Morgan.call('dev');

		// app.use(BodyParser.json());
		// app.use(BodyParser.urlencoded({extended: true}));
		// // app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		// app.use(new Static(Path.join(Node.__dirname, 'public')));

		// // Routes
		// app.get('/', function(req:Request, res:Response) {
		// 	res.sendfile(Node.__dirname + '/public/index_advanced.html');
		// });

		var test = '${Node.__dirname}/public/index_advanced.html';
		trace(test);
		app.get('/', function(req, res, next) {
			res.send('Hello World!');
			// res.sendfile('${Node.__dirname}/public/index_advanced.html');
		});

		// app.get('/remote', function(req:Request, res:Response) {
		// 	res.sendfile(Node.__dirname + '/public/remote_intermediate.html');
		// });

		// app.get('/jade', function(req:Request, res:Response) {
		// 	res.render('index', {title: 'Home', h1: 'Title'});
		// });

		// http://localhost:3000/api/users?username=foobar
		// routes will go here
		// app.get('/api/users', function(req, res, next) {
		// 	var username = req.param('username');
		// 	res.send('username: ' + username);
		// });

		// POST http://localhost:8080/api/users
		// app.post('/api/users', function (req, res) {
		// 	var _req : Dynamic = req;
		// 	var _username = _req.body.username;
		// 	res.send('_username: ' + _username);
		// });

		// var sample = "My name is <strong>::name::</strong>, <em>::age::</em> years old";
		// var user = {name:"Mark", age:30};
		// var template = new haxe.Template(sample);
		// var output = template.execute(user);
		// trace(output);

		// app.use(function(req, res, next) {
		// 	res.status(404).send('404');
		// 	// res.status(404).send(output);
		// });

		app.listen(app.get('port'), function() {
			trace('Express server listening on port ' + app.get('port'));
		});
	}

	static public function main() {
		var main = new MainAdvanced();
	}
}
