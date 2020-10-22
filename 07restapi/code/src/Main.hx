package;

// import js.Node;
// import js.node.Http;
// import js.node.Path;
// import js.npm.Express;
// import js.npm.express.*;
// import js.Node.console;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main {
	function new() {
		var router = express.Router.call_();
		var app = Express.call();
		var PORT = 3001;

		trace('Node.js rest-api: open browser at http://localhost:${PORT}');
		trace('Stop node.js : CTRL + c');

		// all environments
		app.set('port', PORT);
		// app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		// app.use(new Morgan('dev'));
		// app.use(BodyParser.json()); // support json encoded bodies
		// app.use(BodyParser.urlencoded({extended: true})); // support encoded bodies
		// app.use(new Static(Path.join(Node.__dirname, 'public')));

		// Routes
		Routes.init(router);

		// app.use(function(req, res, next) {
		// 	res.status(404).send('404');
		// 	// res.status(404).send(output);
		// });

		app.listen(app.get('port'), function() {
			trace('Express server listening on port ' + app.get('port'));
		});
	}

	static public function main() {
		var main = new Main();
	}
}
