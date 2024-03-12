import { body } from 'express-validator'

class RoleValidator {
  checkAddRole() {
    return [
      body('role_name')
        .notEmpty()
        .withMessage('Tên vai trò không được trống!')
        .trim()
        .isLength({ min: 2 })
        .withMessage('Tên vai trò phải có ít nhất 2 kí tự!'),

      body('description')
        .notEmpty()
        .withMessage('Mô tả không được để trống')
        .trim()
        .isLength({ min: 2 })
        .withMessage('Mô tả phải có ít nhất 10 kí tự!')
    ]
  }
}

export default new RoleValidator()
