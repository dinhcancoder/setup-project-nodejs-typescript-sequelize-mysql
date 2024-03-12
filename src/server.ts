import 'dotenv/config'
import express, { Express, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import initialRoutes from './routes/v1'
import Middleware from './middleware'
import db from './connection'
import { setupModelRelationships } from './db/models'
const app: Express = express()
const PORT = process.env.PORT || 5000
const BASE_URL = process.env.BASE_URL || 'http://localhost'

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(
  cors({
    origin: `http://localhost:5173`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)

app.use(initialRoutes)

app.use(Middleware.errorHandling)

db.authenticate()
  .then(() => {
    setupModelRelationships()
    console.log('[INFO] Kết nối thành công đến cơ sở dữ liệu.')
    app.listen(PORT, () => {
      console.log(`[INFO] Server đã bắt đầu lắng nghe yêu cầu từ máy khách tại ${BASE_URL}:${PORT}`)
    })
  })
  .catch((error: any) => {
    console.error('[ERROR] Không thể kết nối đến cơ sở dữ liệu:', error)
  })
