import { Request, Response } from 'express'
import roleService from '../services/roleService'
import { RoleInput } from '../types/role.type'
import { sendResponseSuccess } from '../utils/response'

class roleController {
  async getAllRoles(req: Request, res: Response) {
    const data = await roleService.getAllRoles()
    sendResponseSuccess(res, data)
  }

  async addNewRole(req: Request, res: Response) {
    const roleData: RoleInput = req.body
    const data = await roleService.addNewRole(roleData)
    sendResponseSuccess(res, data)
  }
}

export default new roleController()
