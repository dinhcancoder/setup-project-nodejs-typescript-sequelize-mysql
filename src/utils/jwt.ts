import jwt from 'jsonwebtoken'

export const generateToken = (payload: string | object | Buffer, secret_key: string, time_expires: number | string) => {
  return jwt.sign(payload, secret_key, { expiresIn: time_expires })
}
