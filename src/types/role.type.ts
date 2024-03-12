import { RoleAttributes } from '../db/models/Role'

export interface Role extends RoleAttributes {}

export type RoleInput = Omit<Role, 'role_id' | 'createdAt' | 'updatedAt'>
