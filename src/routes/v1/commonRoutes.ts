import { Router } from 'express'
import Middleware from '../../middleware'
import authController from '../../controllers/authController'
import AuthValidator from '../../middleware/validators/AuthValidator'
import { tryCatch } from '../../utils/response'
const router = Router()

router.post('/login', AuthValidator.checkLogin(), Middleware.handleValidatorError, tryCatch(authController.login))

router.post(
  '/register',
  AuthValidator.checkRegister(),
  Middleware.handleValidatorError,
  tryCatch(authController.register)
)

router.post('/refresh-access-token', tryCatch(authController.refreshAccessToken))

export default router
