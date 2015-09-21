package ;

import js.Node;
import js.node.Http;
import js.node.Path;

import js.npm.Express;
import js.npm.express.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class MainAdvanced
{

	function new()
	{
		trace("Express website: open browser at http://localhost:3000");
		trace("stop node : CTRL + c");


		var app : Express   = new Express();
		var server : Dynamic = Http.createServer(app);

		// all environments
		app.set('port', 3000);
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		app.use(new Morgan('dev'));
		app.use(BodyParser.json());
		app.use(BodyParser.urlencoded());
		// app.use(new MethodOverride());
		app.use(new Static(Path.join(Node.__dirname, 'public')));

		//Routes
		app.get('/', function (req:Request,res:Response) {
			res.sendfile(Node.__dirname + '/public/index_advanced.html');
		});

		app.get('/remote', function (req:Request,res:Response) {
			res.sendfile(Node.__dirname + '/public/remote_advanced.html');
		});

		// http://localhost:3000/api/users?username=foobar
		// routes will go here
		app.get('/api/users', function(req, res) {
			var username = req.param('username');  
			res.send('username: ' + username );
		});

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


		app.use(function(req, res, next) {
			res.status(404).send('404');
			// res.status(404).send(output);
		});

		server.listen(app.get('port'), function(){
			trace('Express server listening on port ' + app.get('port'));
		});

		
	}

	static public function main()
	{
		var main = new MainAdvanced();
	}
}