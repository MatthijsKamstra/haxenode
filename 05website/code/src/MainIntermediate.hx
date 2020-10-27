package;

import js.Node;
import js.node.Http;
import js.node.Path;
import js.npm.Express;
import js.npm.express.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class MainIntermediate {
	function new() {
		trace("Express website (Intermediate): open browser at http://localhost:3000");
		trace("Stop node.js : CTRL + c");

		// source: https://www.codementor.io/nodejs/tutorial/build-google-tv-raspberrypi-nodejs-socket-io

		var app:Express = new Express();
		// var server:Dynamic = Http.createServer(app);

		// all environments
		app.set('port', 3000);
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		// there is no Logger class in js-kit, so I added it in this source folder (js/npm/express/Logger.hx)
		app.use(new Logger('dev'));
		app.use(BodyParser.urlencoded());
		// app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		app.use(new Static(Path.join(Node.__dirname, 'public')));

		// Routes
		// http://localhost:3000
		app.get('/', function(req, res) {
			res.sendfile(Node.__dirname + '/public/index_intermediate.html');
		});

		// http://localhost:3000/remote
		app.get('/remote', function(req, res) {
			res.sendfile(Node.__dirname + '/public/remote_intermediate.html');
		});

		// http://localhost:3000/nope
		app.use(function(req, res, next) {
			res.status(404).send('404');
		});

		var server = app.listen(app.get('port'), function() {
			trace('Express server listening on port ' + app.get('port'));
		});
	}

	static public function main() {
		var main = new MainIntermediate();
	}
}
