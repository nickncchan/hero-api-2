"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "powers",
      [
        {
          name: "Regenerative Healing Factor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Retractable Claws",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Superhuman Sense and Reflexes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Superhuman Strength and Stamina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spider Physiology",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spider Sense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asgardian Physiology",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "God of Thunder",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Telepathy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Telekinesis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maximum Human Conditioning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Weapons Master",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("powers", null, {});
  },
};
