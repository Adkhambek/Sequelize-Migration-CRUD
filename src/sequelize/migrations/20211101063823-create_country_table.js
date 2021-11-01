'use strict';

const tableModel = { schema: 'app', tableName: 'users' };

module.exports = {
  up: async (queryInterface, Sequelize, DataTypes) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // 1. Create table
      await queryInterface.createTable(tableModel, {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            }    
      });

      // 2. Commit the transaction
      await transaction.commit();

    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
      queryInterface.dropTable(tableModel);
  }
};
