"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "heropowers",
      [
        {
          heroId: 1,
          powerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 1,
          powerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 1,
          powerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 1,
          powerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 2,
          powerId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 2,
          powerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 2,
          powerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 2,
          powerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 2,
          powerId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 3,
          powerId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 3,
          powerId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 4,
          powerId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 4,
          powerId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 5,
          powerId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          heroId: 5,
          powerId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("heropowers", null, {});
  },
};
