import { Response } from 'express'

export const setCookie = (res: Response, key: string, value: string | object) => {
  res.cookie(key, value, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    path: ''
  })
}
