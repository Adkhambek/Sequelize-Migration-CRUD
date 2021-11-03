'use strict';

const { users } = require("../../bulkData");

module.exports = {
      up: async (queryInterface, Sequelize) => {
          await queryInterface.bulkInsert('users', users, {});
      },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
