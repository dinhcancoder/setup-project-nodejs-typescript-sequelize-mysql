'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          user_id: 'lp322c73-f703-4b16-847d-f61bae053p9i',
          first_name: 'Dev',
          last_name: 'Member',
          email: 'member@gmail.com',
          phone_number: '0358195311',
          password: hashSync('123456', genSaltSync(10)),
          role_id: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fjpe'
        },
        {
          user_id: 'afa22c73-f703-4b16-847d-f61bae0534b2',
          first_name: 'Dev',
          last_name: 'Admin',
          email: 'admin@gmail.com',
          phone_number: '0362589022',
          password: hashSync('123456', genSaltSync(10)),
          role_id: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fp0a'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
}
