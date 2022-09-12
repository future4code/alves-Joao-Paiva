import Knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export const connection = Knex ({
    client:"mysql",
    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        database:process.env.DB_DATABASE,
        password:process.env.DB_PASSWORD,
        port:3306
    }
})