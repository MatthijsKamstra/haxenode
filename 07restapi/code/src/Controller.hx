package;

import js.Node;
import js.npm.Express;
import js.npm.express.*;

class Controller {
	public static function index(req:Request, res:Response) {
		res.sendFile(Node.__dirname + '/public/index.html');
	}

	public static function findAll(req, res) {
		res.send([
			{
				"id": 1,
				"name": "Max",
				"band": "Maximum Pain",
				"instrument": "guitar"
			}
		]);
	};

	public static function findByName(req, res) {
		res.send('{"id": 1,"name":"${req.params.name}","band":"BBQ Brawlers"}');
	};

	public static function findById(req, res) {
		res.send('findbyid: ${req.params.id}');
	};

	public static function add(req:Request, res:Response) {
		var inputName = untyped req.body.inputName; // embrace the dynamic nature of javascript/node.js
		var inputGroupName = untyped req.body.inputGroupName;
		res.send('{"id": 1,"name":"${inputName}","band":"${inputGroupName}"}');
	};

	public static function update(req, res) {
		res.send('update');
	};

	public static function delete(req, res) {
		res.send('delete');
	};
}
