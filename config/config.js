require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_CLIENT,
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_CLIENT,
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_CLIENT,
  },
};
