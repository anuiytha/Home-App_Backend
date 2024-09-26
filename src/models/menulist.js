const knex = require('../config/database.js')
module.exports = menulist = {
    createmenulist: async (data) => {
        console.log(" Inside ...Models-menulist..");
        try {
            console.log(" Inside Try ...Models-menulist..");
            const insertmenulist = knex("menulist").insert(data); // This will insert data into specified table
            // console.log(" Inside Try ...Models-menulist..");
            return insertmenulist;
        } catch (error) {
            console.error("Error creating menulist:", error);
            throw error;
        }
    },
};