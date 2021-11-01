'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createSchema("app");
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropSchema("app");
  }
};
