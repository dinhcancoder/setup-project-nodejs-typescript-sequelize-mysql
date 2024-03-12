import { Dialect, Sequelize } from 'sequelize'
import 'dotenv/config'

const dbHost = process.env.DB_HOST
const dbUsername = process.env.DB_USERNAME as string
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME as string
const dbPort = Number(process.env.DB_PORT)
const dbDialect = process.env.DIALECT as Dialect

const db = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect
})

export default db
