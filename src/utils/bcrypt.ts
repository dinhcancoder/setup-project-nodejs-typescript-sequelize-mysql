import { hashSync, genSaltSync, compareSync } from 'bcryptjs'

export const hashValue = (value: string) => {
  return hashSync(value, genSaltSync(10))
}

export const compareValue = (value: string, hash: string) => {
  return compareSync(value, hash)
}
