import { body } from 'express-validator'

class AuthValidator {
  checkLogin() {
    return [
      body('email')
        .notEmpty()
        .withMessage('Email không được để trống!')
        .trim()
        .isEmail()
        .withMessage('Email không hợp lệ'),

      body('password')
        .notEmpty()
        .withMessage('Mật khẩu không được để trống!')
        .trim()
        .isLength({ min: 6 })
        .withMessage('Mật khẩu phải có ít nhất 6 ký tự')
    ]
  }

  checkRegister() {
    return [
      body('first_name')
        .notEmpty()
        .withMessage('Tên không được để trống')
        .trim()
        .isLength({ min: 2 })
        .withMessage('Tên phải có ít nhất 2 kí tự!')
        .isLength({ max: 50 })
        .withMessage('Tên không vượt quá 50 kí tự!'),

      body('last_name')
        .notEmpty()
        .withMessage('Họ không được để trống')
        .trim()
        .isLength({ min: 2 })
        .withMessage('Họ phải có ít nhất 2 kí tự!')
        .isLength({ max: 50 })
        .withMessage('Họ không vượt quá 50 kí tự!'),

      body('email').notEmpty().withMessage('Email không được để trống').isEmail().withMessage('Email không hợp lệ'),

      body('password')
        .notEmpty()
        .withMessage('Mật khẩu không được để trống')
        .trim()
        .isLength({ min: 6 })
        .withMessage('Mật khẩu phải có ít nhất 6 ký tự')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/)
        .withMessage(
          'Mật khẩu phải bao gồm ít nhất một chữ cái in hoa, một chữ cái thường, một số và một ký tự đặc biệt'
        )
        .trim(),

      body('phone_number')
        .notEmpty()
        .withMessage('Số điện thoại không được để trống')
        .trim()
        .isMobilePhone('vi-VN')
        .withMessage('Số điện thoại không hợp lệ')
    ]
  }
}

export default new AuthValidator()
