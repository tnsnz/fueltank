require("dotenv").config();

const env = process.env;

  const development = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_DB,
    username: env.DB_USER,
    password: env.DB_PASSWD,
    dialect: 'postgresql',
  }

  const test = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_DB,
    username: env.DB_USER,
    password: env.DB_PASSWD,
    dialect: 'postgresql',
  }

  const production = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_DATABASE,
    username: env.DB_USER,
    password: env.DB_PASSWD,
    dialect: 'postgresql',
  }

module.exports = { development, production, test };

// {
//   "development": {
//     "username": "postgres",
//     "password": "hdh1220",
//     "database": "fuel",
//     "host": "127.0.0.1",
//     "dialect": "postgresql"
//   },
//   "test": {
//     "username": "postgres",
//     "password": "hdh1220",
//     "database": "fuel",
//     "host": "127.0.0.1",
//     "dialect": "postgresql"
//   },
//   "production": {
//     "username": "postgres",
//     "password": "hdh1220",
//     "database": "fuel",
//     "host": "127.0.0.1",
//     "dialect": "postgresql"
//   }
// }
