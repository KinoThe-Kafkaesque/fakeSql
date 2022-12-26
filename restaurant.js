const mysql = require('mysql2');
const dotenv = require('dotenv');
const faker = require('@faker-js/faker').faker;
// Load the environment variables from the .env file
dotenv.config();
// Connect to the database
const cnx = mysql.createConnection({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
for (let i = 0; i < 500; i++) {
    const nom = faker.company.name();
    const heureOuverture = faker.date.between('08:00', '10:00');
    const heureFemeture = faker.date.between('19:00', '22:00');
    const x = faker.address.longitude();
    const y = faker.address.latitude();
    const category_id = Math.floor(Math.random() * 16) + 1;
    const quartier_id = Math.floor(Math.random() * (1704 - 11 + 1)) + 11;;

    console.log(nom, heureOuverture, heureFemeture, x, y, category_id, quartier_id);
    cnx.query(
      `INSERT INTO Restaurant (nom, heureOuverture, heureFemeture, x, y, category_id, quartier_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nom, heureOuverture, heureFemeture, x, y, category_id, quartier_id],
      function(err, results, fields) {
        console.log(results);
      }
    );
  }
  




// Close the connection
cnx.end();
