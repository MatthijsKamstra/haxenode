package;

import js.Node;
import js.node.Path;
import Express;
import Morgan;
import ServeFavicon;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main03 {
	function new() {
		var app = Express.call();
		var port = 3000;

		trace('Express website (03):  open browser at http://localhost:${port}');
		trace("Stop node.js : CTRL + c");

		var router = express.Router.call_();

		// middleware that is specific to this router
		router.use(function timeLog(req, res, next) {
			js.Browser.console.log('Time: ', Date.now());
			return null;
		});

		router.get('/', (req, res, next) -> {
			res.send('Hello World router style!');
		});
		// define the home page route
		router.get('/birds', function(req, res, next) {
			res.send('Birds home page');
			return null;
		});
		// define the about route
		router.get('/about', function(req, res, next) {
			res.send('About birds');
			return null;
		});

		// app.get('/', (req, res, next) -> res.send('Hello World!'));
		app.listen(port, () -> trace('Example app listening at http://localhost:${port}'));
	}

	static public function main() {
		var main = new Main03();
	}
}
