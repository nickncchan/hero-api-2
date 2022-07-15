"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("heropowers", {
      heroId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "heros",
          key: "id",
        },
        onDelete: "cascade",
      },
      powerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "powers",
          key: "id",
        },
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("heropowers");
  },
};
