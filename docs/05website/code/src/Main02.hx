package;

import js.Node;
import js.node.Path;
import Express;
import Morgan;
import ServeFavicon;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main02 {
	function new() {
		var app = Express.call();
		var port = 3000;

		trace('Express website (02):  open browser at http://localhost:${port}');
		trace("Stop node.js : CTRL + c");

		// https://www.codementor.io/nodejs/tutorial/build-google-tv-raspberrypi-nodejs-socket-io
		// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
		// http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus

		// all environments
		app.set('port', 3000);

		// app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		app.use(cast ServeFavicon.call(Node.__dirname + '/public/favicon.ico'));

		app.set('views', Node.__dirname + '/public/views');
		app.set('view engine', 'pug');

		// var morgan = Morgan.call('dev');
		app.use(cast Morgan.call('dev'));

		// app.use(BodyParser.json());
		// app.use(BodyParser.urlencoded({extended: true}));
		// // app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...

		// var _static = Express.static_.call(Path.join(Node.__dirname, 'public'));
		app.use(cast Express.static_.call(Path.join(Node.__dirname, 'public')));

		// Routes

		// http://localhost:3000
		app.get('/', (req, res, next) -> {
			res.send('Hello World! :: Express website (02)');
		});

		// http://localhost:3000/remote
		app.get('/remote', (req, res, next) -> {
			res.sendFile(Node.__dirname + '/public/remote_intermediate.html');
			return null;
		});

		// http://localhost:3000/pug
		app.get('/pug', (req, res, next) -> {
			res.render('index', {title: 'Home', h1: 'Title'});
			return null;
		});

		// http://localhost:3000/api/users?username=foobar
		// routes will go here
		app.get('/api/users', (req, res, next) -> {
			var username = req.param('username');
			res.send('username: ' + username);
			return null;
		});

		// POST http://localhost:8080/api/users
		app.post('/api/users', (req, res, next) -> {
			var _req:Dynamic = req;
			var _username = _req.body.username;
			res.send('_username: ' + _username);
			return null;
		});

		// http://localhost:3000/nope
		app.use((req, res, next) -> {
			res.status(404).send('404');
		});

		app.listen(app.get('port'), function() {
			trace('Express server listening on port ' + app.get('port'));
		});
	}

	static public function main() {
		var main = new Main02();
	}
}
