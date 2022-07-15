"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "heros",
      [
        {
          name: "James 'Logan' Howlett",
          alias: "Wolverine",
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peter Parker",
          alias: "Spider-Man",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thor Odinson",
          alias: "Thor",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charles Xavier",
          alias: "Professor X",
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frank Castle",
          alias: "Punisher",
          teamId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("heros", null, {});
  },
};
