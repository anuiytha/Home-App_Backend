const knex = require('knex')(require('../../knexfile.js')[process.env.NODE_ENV]);

module.exports = knex