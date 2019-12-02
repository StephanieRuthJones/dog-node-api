# Full CRUD Node Lesson #

* take dog_app
* touch server.js
* npm init -y 
* code .
* npm install -g nodemon
* Navigate to package.json file and navigate to “start” and enter “start”: “nodemon server.js”
nodemon keeps your server running and updates w changes you make (like lite-server)
* npm install express
* touch .gitignore
* echo node_modules >> .gitignore 
* Open server.js and code:
    * const express = require(‘express’)
    * const app = express()
    * let port = process.env.PORT || 9000

    * app.get(‘/’, (req, res, next) => {
    res.json(“Hello World”)
    }
    * app.listen(‘/’, () => console.log(`listening on port ${port}`)
* npm install body-parser
* npm install cors
* npm start

SERVER SHOULD SAY “HELLO WORLD”

## KNEX STEPS ##

* npm install knex pg --save
* knex init
* In knexfile.js:
    * Delete staging section
* touch knex.js
* In knex.js file, code:

* In server.js
* const knex = require(‘./knex’)
* npm start
* Server should STILL say “Hello World”

## DATABASE and MIGRATIONS ##

* createdb dog_db
* psql dog_db
* \d to see what’s in there
* Did not find any relations bc nothing is in there yet
* Relation: 
* exit
* knex migrate:make dog
* Creates a migration file
* Look in migration file:
    * exports.up creates a table
    * exports.down removes table

* knex migrate:latest
* psql dog_db
* \d to see all tables created
* \c to connect to a particular database 
* !!! to exit 
* select * from dog;
    * Nothing in table, don’t forget the semicolon

SEEDS
knex seed:make dogs
Will be in seeds directory as dogs.js
Go to dogs.js file in seeds directory
Replace table-name with dog
Change column name to ‘name’
Add other key value pairs based on table columns previously created

knex seed:run
psql dog_db
select * from dog
Should see seeded data
exit
npm start
should still see ‘hello world’


ROUTES

Create a get route

Create post route

Create delete route

Create update route