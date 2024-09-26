const pg = require('knex')({
    client: 'pg',
    connection: 'postgresql://postgres:password@localhost: 5432 / foodApp_dev',
    searchPath: ['knex', 'public']

})