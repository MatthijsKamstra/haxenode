package ;

import js.Node;
import js.node.Http;
import js.node.Path;

import js.npm.Express;
import js.npm.express.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{

	function new()
	{
		trace("Express website: open browser at http://localhost:3000");
		trace("stop node : CTRL + c");

		// source: http://expressjs.com/starter/basic-routing.html

		var app : Express   = new Express();
		var server : Dynamic = Http.createServer(app);

		// all environments
		app.set('port', 3000);
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		app.use(new Morgan('dev'));
		app.use(BodyParser.urlencoded());
		// app.use(new MethodOverride());
		app.use(new Static(Path.join(Node.__dirname, 'public')));

		//Routes
		app.get('/', function (req, res) {
			res.sendfile(Node.__dirname + '/public/index.html');
		});

		app.get('/remote', function (req, res) {
			res.sendfile(Node.__dirname + '/public/remote.html');
		});

		app.use(function(req, res, next) {
			res.status(404).send('404');
		});

		server.listen(app.get('port'), function(){
			trace('Express server listening on port ' + app.get('port'));
		});

		
	}

	static public function main()
	{
		var main = new Main();
	}
}