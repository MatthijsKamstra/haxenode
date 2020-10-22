package;

import global.express.Request;
import global.express.Response;
import global.express.Response;
import js.Node;
import js.node.Http;
import js.node.Path;
import Express;
import express.*;

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

		app.get('/', (req, res, next) -> res.send('Hello World!'));
		app.listen(port, () -> trace('Example app listening at http://localhost:${port}'));

		// app.listen(app.get('port'), function() {
		// 	trace('Express server listening on port ' + app.get('port'));
		// });

		var router = express.Router.call_();

		// all environments
		// app.set('port', port);
		// app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		// // there is no Logger class in js-kit, so I added it in this source folder (js/npm/express/Logger.hx)
		// app.use(new Logger('dev'));
		// app.use(BodyParser.urlencoded({extended: true}));
		// // app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		router.use(Express.static_.call('public')); // no idea...

		// var temp = Express.static_.call('public');

		// Routes
		// http://localhost:3000
		// app.get('/d', (req:Request, res:express.Response<{}>, next) -> {
		// app.get('/d', (req, res, next) -> {
		// 	// res.send('/d');
		// 	var file:String = Path.join(Node.__dirname + '/public/index_intermediate.html');
		// 	res.sendfile(file);
		// });

		// app.get('/test', (req, res, next) -> {
		// 	res.send('/test');
		// });

		// // http://localhost:3000/remote
		// app.get('/remote', (req, res, next) -> {
		// 	res.sendfile(Node.__dirname + '/public/remote_intermediate.html');
		// });

		// // http://localhost:3000/nope
		// app.use(function(req, res, next) {
		// 	res.status(404).send('404');
		// });

		// middleware that is specific to this router
		// router.use(function timeLog(req, res, next) {
		// 	js.Browser.console.log('Time: ', Date.now());
		// 	trace('Time: ', Date.now());
		// 	return null;
		// });

		router.get('/test', function(req, res, next) {
			res.send('test page');
			return null;
		});

		// define the home page route
		router.get('/', function(req, res, next) {
			res.send('Birds home page');
			return null;
		});

		// define the about route
		router.get('/about', function(req, res, next) {
			res.send('About birds');
			return null;
		});

		// // router.get('/', (req, res, next) -> res.send('Hello World!'));
		// app.listen(port, () -> trace('Example app listening at http://localhost:${port}'));
	}

	static public function main() {
		var main = new Main01();
	}
}
