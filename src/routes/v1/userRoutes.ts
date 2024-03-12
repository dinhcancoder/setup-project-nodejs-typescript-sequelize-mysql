import { Router } from 'express'
import userController from '../../controllers/userController'
import Middleware from '../../middleware'
import { tryCatch } from '../../utils/response'

const router = Router()

router.get('/profile', Middleware.verifyToken, tryCatch(userController.getProfile))

export default router
