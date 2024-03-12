import { NextFunction, Request, Response } from 'express'
import userService from '../services/userService'
import { sendResponseSuccess } from '../utils/response'
import { StatusCodes } from 'http-status-codes'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class userController {
  async getProfile(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
      const { user_id } = req.user
      const data = await userService.getProfile(user_id)
      sendResponseSuccess(res, data)
    } else {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tồn tại người dùng!')
    }
  }
}

export default new userController()
