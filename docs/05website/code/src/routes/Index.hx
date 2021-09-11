package routes;

class Index {
	public static function init(app:express_serve_static_core.Router):Void {
		/* GET home page. */
		app.get('/', function(req, res, next) {
			res.render('index', {title: 'Express'});
			return null;
		});
	}
}
