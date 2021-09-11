package;

// import express_serve_static_core.Router;
// import js.npm.Express;
// import js.npm.express.*;
class Routes {
	public static function init(app:express_serve_static_core.Router):Void {
		app.get('/', Controller.index);
		app.get('/musician/:name', Controller.findByName);
		app.get('/musicians', Controller.findAll);
		app.get('/musicians/:id', Controller.findById);
		app.post('/musicians', Controller.add);
		// app.put('/musicians/:id', Controller.update);
		// app.delete('/musicians/:id', Controller.delete);
	}
}
