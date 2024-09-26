
const knex = require('../config/database.js')
module.exports = Submissions = {
    createdish: async (data) => {
        console.log(" Inside ...Models-Submissions..");
        try {
            const insertMenu = knex("menu").insert(data); // This will insert data into specified table
            console.log(" Inside Try ...Models-Submissions..");
            return insertMenu;
        } catch (error) {
            console.error("Error creating menu:", error);
            throw error;
        }
    },
};


