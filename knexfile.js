// knexfile.js
require('dotenv-flow').config({ silent: true })

console.log("Inside knexfile");

module.exports = {
  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
  }
}