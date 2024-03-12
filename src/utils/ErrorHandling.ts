import { CustomErrorData } from '../types/response.type'

export class CustomErrorHandler extends Error {
  status: number
  errorData: string | CustomErrorData

  constructor(status: number, errorData: string | CustomErrorData) {
    super()
    this.status = status
    this.errorData = errorData
  }
}
