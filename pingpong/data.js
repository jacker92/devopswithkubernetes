const { Pool } = require("pg");

const pool =  new Pool({
    user: "postgres",
    host: "postgres-svc",
    database: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    port: "3002"
});

const createAndPopulate = async () => {
    console.log("Creating and populating")

    pool.query(`CREATE TABLE counter (
        id INT PRIMARY KEY,
        count INT NOT NULL
     );

     INSERT INTO counter
    (id, count)
VALUES (1, 0);`)
.then(res => {console.log("Created DB")})
.catch(err => {})
}

const increment = async () => {
    console.log("Ingrementing")
    await pool.query(`UPDATE counter SET count = count + 1`)
}

const getCount = async () => {
    console.log("Getting count.")
    const res = await pool.query(`SELECT count FROM counter WHERE id = 1`)
    console.log("Got response count from db", res)
    console.log("Returning ", res.rows[0], res.rows[0].count)
    return res.rows[0].count
}
module.exports = { createAndPopulate, increment, getCount }