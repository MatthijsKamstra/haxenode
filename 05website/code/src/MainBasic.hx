package;

import node.net.AddressInfo;
import js.Node;
import Express;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class MainBasic {
	var server:node.http.Server;

	function new() {
		// source http://expressjs.com/starter/hello-world.html

		var app = Express.call();
		var port = 3000;

		trace('Express website (Basic): open browser at http://localhost:${port}');
		trace('Stop node.js : CTRL + c');

		app.get('/', (req, res, next) -> {
			res.send('Hello World!');
		});

		server = app.listen(port, function() {
			var addressInfo:AddressInfo = server.address();
			trace('Example app listening at http://${addressInfo.address}:${addressInfo.port}'); // ???? http://:::3000
		});
	}

	static public function main() {
		var main = new MainBasic();
	}
}
