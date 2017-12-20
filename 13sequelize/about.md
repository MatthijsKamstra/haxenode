# About Sequelize


> Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

__source: <http://docs.sequelizejs.com/en/v3/>__

## Soooo what is ORM?

> Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

__source: <https://en.wikipedia.org/wiki/Object-relational_mapping>__



In short: it will let you talk to different backends (PostgreSQL, MySQL, MariaDB, SQLite and MSSQL) in the same way.
So if are testing, you could decide to work with SQLite.
Later change the backend to PostgreSQL for production and your don't have to rewrite any calls made to the backend!

