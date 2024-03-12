import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { validationResult } from 'express-validator'
import { CustomErrorData } from '../types/response.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'
import { sendResponseError } from '../utils/response'
import { UserOutput } from '../types/user.type'
import jwt from 'jsonwebtoken'

declare module 'express' {
  interface Request {
    user?: UserOutput
  }
}

class Middleware {
  // Xử lý lỗi express-validate
  handleValidatorError(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json(errors)
    }
    next()
  }

  // Xác thực token
  verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization

    if (token) {
      const accessToken = token.split(' ')[1]

      const secretKey = process.env.JWT_SECRET_KEY as string
      jwt.verify(accessToken, secretKey, (error, user) => {
        if (error)
          return sendResponseError(
            res,
            new CustomErrorHandler(StatusCodes.UNAUTHORIZED, {
              message: 'Token này đã hết hạn!',
              errorName: 'EXPIRED_TOKEN'
            })
          )
        req.user = user as UserOutput
        next()
      })
    } else {
      return sendResponseError(
        res,
        new CustomErrorHandler(StatusCodes.UNAUTHORIZED, {
          message: 'Chưa đăng nhập!!',
          errorName: 'MISSING_ACCESS_TOKEN'
        })
      )
    }
  }

  // Xử lý lỗi toàn cục
  errorHandling(error: string | CustomErrorData, req: Request, res: Response, next: NextFunction) {
    sendResponseError(res, error)
  }
}

export default new Middleware()
