package ;

import js.Node;
import js.npm.Express;


import js.npm.SocketIo;

import js.Node;
import js.node.Http;
import js.node.Path;

import js.npm.Express;
import js.npm.express.*;
import js.npm.Jade;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{

	private var PORT = 3700;

	function new()
	{
		trace("Express website (Basic): open browser at http://localhost:" + PORT);
		trace("Stop node.js : CTRL + c");

		var app    = new js.npm.Express();
		var server = js.node.Http.createServer( cast app );
		var io     = new js.npm.socketio.Server(server);

		app.set('views', Node.__dirname + '/public/views');
		app.set('view engine', "jade");

		app.use(new Static(Node.__dirname + '/public'));
		app.use(new Morgan('dev'));
		app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));

		app.get("/", function(req : Request, res : Response ){
			var liveReload = "";
			#if debug
			// liveReload = '<script src="http://0.0.0.0:35729/livereload.js" type="text/javascript"></script>';
			liveReload = 'http://0.0.0.0:35729/livereload.js';
			#end
			res.render("page", {livereload : liveReload});
		});

		// app.use(BodyParser.json());
		// app.use(BodyParser.urlencoded({ extended: true }));
		// app.use(new MethodOverride()); // can't find it in js-kit AND don't know what it does...
		// app.use(new Static(Path.join(Node.__dirname, 'public')));

		io.on('connection', function (socket) {
			socket.emit('message', { message: 'welcome to the chat' });
			socket.on('send', function (data) {
				io.sockets.emit('message', data);
			});
		});

		trace ("Listening on port " + PORT);

		server.listen(PORT);

	}

	static public function main()
	{
		var main = new Main();
	}
}