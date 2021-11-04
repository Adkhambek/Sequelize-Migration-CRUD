'use strict';

const {users} = require("../bulkData");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
