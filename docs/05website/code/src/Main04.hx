package;

import CookieParser;
import js.Node;
import js.node.Path;
import Express;
import Morgan;
import ServeFavicon;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main04 {
	function new() {
		// https://expressjs.com/en/starter/generator.html

		var app = Express.call();
		var port = 3000;

		trace('Express website (04):  open browser at http://localhost:${port}');
		trace("Stop node.js : CTRL + c");

		// var createError = require('http-errors');
		// var express = require('express');
		// var path = require('path');
		// var cookieParser = require('cookie-parser');
		// var logger = require('morgan');

		// var indexRouter = require('./routes/index');
		// var usersRouter = require('./routes/users');

		// var app = express();

		// view engine setup
		app.set('views', Path.join(Node.__dirname, 'public', 'views'));
		app.set('view engine', 'pug');

		// app.use(logger('dev'));
		app.use(cast Morgan.call('dev'));

		app.use(cast Express.json());
		app.use(cast Express.urlencoded({extended: false}));
		app.use(cast CookieParser.call());
		app.use(cast Express.static_.call(Path.join(Node.__dirname, 'public')));

		// smoke signal
		// app.get('/', (req, res, next) -> res.send('Hello World!'));

		// test if it works
		// app.get('/', function(req, res, next) {
		// 	res.render('index', {title: 'Express'});
		// 	return null;
		// });

		var router = express.Router.call_();
		routes.Index.init(router);

		// app.use('/', indexRouter);
		// app.use('/users', usersRouter);

		// catch 404 and forward to error handler
		// app.use(function(req, res, next) {
		// 	next(createError(404));
		// });

		// error handler
		// app.use(function(err, req, res, next) {
		// 	// set locals, only providing error in development
		// 	res.locals.message = err.message;
		// 	res.locals.error = req.app.get('env') == 'development' ? err : {};

		// 	// render the error page
		// 	res.status(err.status || 500);
		// 	res.render('error');
		// });

		var server = app.listen(port, () -> trace('Example app listening at http://localhost:${port}'));
		// server.on
	}

	static public function main() {
		var main = new Main04();
	}
}
