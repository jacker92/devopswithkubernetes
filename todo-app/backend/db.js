const { Pool } = require("pg");

console.log("The password is", process.env.POSTGRES_PASSWORD)
 
const pool =  new Pool({
    user: "postgres",
    host: "postgres-svc",
    database: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    port: "5432"
});

const initDB = async () => {
    console.log("Creating database...")

    pool.query(`CREATE TABLE todo (
        id SERIAL PRIMARY KEY,
        content varchar(2000) NOT NULL,
        done BOOLEAN NOT NULL DEFAULT FALSE
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
    const res = await pool.query(`INSERT INTO todo (content, done) VALUES ($1, FALSE)`, [todo])
    console.log("Got response count from db", res)
}

const updateTodo = async (id, value) => {
    const res = await pool.query(`UPDATE todo SET done = ($1) WHERE id = ($2)`, [value, id])
    console.log("Got response count from db", res)
    return res
}

initDB()

module.exports = {addTodo, getTodos, updateTodo }