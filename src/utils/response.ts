import { NextFunction, Response, Request } from 'express'
import { ResponseSuccessData, CustomErrorData } from '../types/response.type'
import { StatusCodes } from 'http-status-codes'
import { CustomErrorHandler } from './ErrorHandling'

export const tryCatch = (aysncFunction: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    aysncFunction(req, res, next).catch(next)
  }
}

export const sendResponseSuccess = (res: Response, data: ResponseSuccessData) => {
  return res.status(StatusCodes.OK).json(data)
}

export const sendResponseError = (res: Response, error: string | CustomErrorData | any) => {
  if (error instanceof CustomErrorHandler) {
    const status: number = error.status

    if (typeof error.errorData === 'string') {
      const message: string = error.errorData
      return res.status(status).json({
        message,
        error: true,
        status
      })
    }

    const errorObject: CustomErrorData = error.errorData
    return res.status(status).json({
      message: 'Đã xảy ra lỗi !',
      error: true,
      errors: errorObject,
      status
    })
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: error.message || StatusCodes[StatusCodes.INTERNAL_SERVER_ERROR],
    error: true,
    status: StatusCodes.INTERNAL_SERVER_ERROR
  })
}
