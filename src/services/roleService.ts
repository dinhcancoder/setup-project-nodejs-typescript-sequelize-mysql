import models from '../db/models'
import { StatusCodes } from 'http-status-codes'
import { CustomErrorHandler } from '../utils/ErrorHandling'
import { Role, RoleInput } from '../types/role.type'

class roleService {
  async getAllRoles() {
    const data: Role[] = await models.Role.findAll()

    return {
      message: 'Lấy danh sách role thành công.',
      data,
      status: StatusCodes.OK
    }
  }

  async addNewRole(data: RoleInput) {
    const { role_name, description } = data

    const [newRole, created] = await models.Role.findOrCreate({
      where: { role_name },
      defaults: {
        role_name,
        description
      }
    })

    if (!created) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Role này đã tồn tại!')
    }

    return { message: 'Thêm mới role thành công', data: newRole }
  }
}

export default new roleService()
