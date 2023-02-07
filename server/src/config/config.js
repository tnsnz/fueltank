require("dotenv").config();

const env = process.env;

  const development = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_DATABASE,
    username: env.DB_USER,
    password: env.DB_PASSWD,
    dialect: 'postgres',
  }

  const test = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_DATABASE,
    username: env.DB_USER,
    password: env.DB_PASSWD,
    dialect: 'postgres',
  }

  const production = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_DATABASE,
    username: env.DB_USER,
    password: env.DB_PASSWD,
    dialect: 'postgres',
  }

module.exports = { development, production, test };
