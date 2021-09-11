package;

import js.Node;

// import js.npm.Express;
// import js.npm.express.*;
class Controller {
	public static function index(req, res, next) {
		res.sendfile(Node.__dirname + '/public/index.html');
		return null;
	}

	public static function findAll(req, res, next) {
		res.send([
			{
				"id": 1,
				"name": "Max",
				"band": "Maximum Pain",
				"instrument": "guitar"
			}
		]);
		return null;
	};

	public static function findByName(req, res, next) {
		res.send('{"id": 1,"name":"${req.params.name}","band":"BBQ Brawlers"}');
		return null;
	};

	public static function findById(req, res, next) {
		res.send('findbyid: ${req.params.id}');
		return null;
	};

	public static function add(req, res, next) {
		var inputName = untyped req.body.inputName; // embrace the dynamic nature of javascript/node.js
		var inputGroupName = untyped req.body.inputGroupName;
		res.send('{"id": 1,"name":"${inputName}","band":"${inputGroupName}"}');
		return null;
	};

	public static function update(req, res, next) {
		res.send('update');
		return null;
	};

	public static function delete(req, res, next) {
		res.send('delete');
		return null;
	};
}
