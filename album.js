const mysql = require('mysql2');
const dotenv = require('dotenv');
const {faker} = require('@faker-js/faker');
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
for (let i = 0; i < 1500; i++) {
  const photo = faker.image.imageUrl(640, 480, 'food', true);
  const restaurant_id = faker.datatype.number({ min: 217, max: 716 });

  cnx.query(
    `INSERT INTO Album (photo, restaurant_id) VALUES (?, ?)`,
    [photo, restaurant_id],
    function (err, results, fields) {
      console.log(results);
    }
  );
}




// Close the connection
cnx.end();
