'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      noddle: {
        type: Sequelize.STRING
      },
      soup: {
        type: Sequelize.STRING
      },
      rich: {
        type: Sequelize.STRING
      },
      beanSprouts: {
        type: Sequelize.STRING
      },
      onion: {
        type: Sequelize.STRING
      },
      egg: {
        type: Sequelize.STRING
      },
      kimchi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};