import { User } from './user.type'

export type LoginInput = Pick<User, 'email' | 'password'>

export type RegisterInput = Omit<User, 'user_id' | 'role_id' | 'updatedAt' | 'createdAt'>
