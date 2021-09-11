package;

import js.Node;
import js.Node.*;
import js.npm.sequelize.*;
import js.npm.sequelize.Sequelize;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main {
	// http://sequelize.readthedocs.io/en/latest/docs/getting-started/
	function new() {
		// Setting up a connection
		// http://sequelize.readthedocs.io/en/latest/docs/getting-started/#setting-up-a-connection
		var options:SequelizeOptions = {
			host: 'localhost',
			dialect: 'sqlite',

			pool: {
				max: 5,
				min: 0,
				idle: 10000
			},

			// SQLite only
			storage: Node.__dirname + '/db/database.sqlite'
		}

		var sequelize = new Sequelize('database', 'username', 'password', options);

		// Test the connection
		// http://sequelize.readthedocs.io/en/latest/docs/getting-started/#test-the-connection
		sequelize.authenticate().then(function(err) {
			console.log('Connection has been established successfully.');
		}).Catch(function(err) {
			console.log('Unable to connect to the database:', err);
		});

		// Your first model
		// http://sequelize.readthedocs.io/en/latest/docs/getting-started/#your-first-model
		var fields:Dynamic<ModelDefinition> = {
			firstName: {
				type: Sequelize.STRING()
			},
			lastName: {
				type: Sequelize.STRING()
			}
		};
		var user = sequelize.define('user', fields);

		// force: true will drop the table if it already exists
		user.sync({force: false}).then(function() {
			// Table created
			return user.create({
				firstName: 'John',
				lastName: 'Hancock'
			});
		});

		// Your first query
		// http://sequelize.readthedocs.io/en/latest/docs/getting-started/#your-first-query
		user.findAll().then(function(users) {
			console.log(users);
		});

		// Promises
		// http://sequelize.readthedocs.io/en/latest/docs/getting-started/#promises
		user.findOne().then(function(user) {
			console.log(user.get('firstName'));
		});
	}

	static public function main() {
		var main = new Main();
	}
}
