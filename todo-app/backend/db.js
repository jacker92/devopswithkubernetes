const { Pool } = require("pg");

const pool =  new Pool({
    user: "postgres",
    host: "postgres-svc",
    database: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    port: "2347"
});

const initDB = async () => {
    console.log("Creating database...")

    pool.query(`CREATE TABLE todo (
        id SERIAL PRIMARY KEY,
        content varchar(2000) NOT NULL
     );`)
.then(res => {console.log("Created DB")})
.catch(err => {console.log("Error occurred while creating db", err)})
}

const getTodos = async () => {
    const res = await pool.query(`SELECT * FROM todo`)
    console.log("Got response count from db", res)
    return res.rows
}

const addTodo = async (todo) => {
    const res = await pool.query(`INSERT INTO todo (content) VALUES ($1)`, [todo])
    console.log("Got response count from db", res)
}

initDB()

module.exports = {addTodo, getTodos }