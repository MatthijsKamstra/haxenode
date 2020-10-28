package;

import js.Node;
import js.node.Path;
import Express;
import Morgan;
import ServeFavicon;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main01 {
	function new() {
		// source: https://www.codementor.io/nodejs/tutorial/build-google-tv-raspberrypi-nodejs-socket-io

		var app = Express.call();
		var port = 3000;

		trace('Express website (01):  open browser at http://localhost:${port}');
		trace("Stop node.js : CTRL + c");

		// all environments
		app.set('port', 3000);

		// app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		app.use(cast ServeFavicon.call(Node.__dirname + '/public/favicon.ico'));

		// var morgan = Morgan.call('dev');
		app.use(cast Morgan.call('dev'));

		// app.use(BodyParser.urlencoded());

		// var _static = Express.static_.call(Path.join(Node.__dirname, 'public'));
		app.use(cast Express.static_.call(Path.join(Node.__dirname, 'public')));

		// Routes

		// http://localhost:3000
		app.get('/', (req, res, next) -> {
			res.send('Hello World! :: Express website (01)');
		});

		app.get('/test', function(req, res, next) {
			res.sendFile(Node.__dirname + '/public/index_intermediate.html');
			return null;
		});

		// http://localhost:3000/remote
		app.get('/remote', (req, res, next) -> {
			res.sendFile(Node.__dirname + '/public/remote_intermediate.html');
			return null;
		});

		// http://localhost:3000/nope
		app.use((req, res, next) -> {
			res.status(404).send('404');
		});

		var server = app.listen(app.get('port'), function() {
			trace('Express server listening on port ' + app.get('port'));
		});
	}

	static public function main() {
		var main = new Main01();
	}
}
