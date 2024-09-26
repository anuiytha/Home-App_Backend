
const knex = require("../config/database.js");

module.exports = Dish = {
    insertDish: async (data) => {
        try {
            console.log('Inside Add_Dish model');
            const insert_dish = await knex('menu').insert(data); // This will insert data into specified table
            return insert_dish;
        } catch (error) {
            console.error("Error inserting dish:", error);
            throw error;
        }
    },

    getAllDishes: async (data) => {
        try {
            let AllDishes = (await knex('menu').orderBy('Item_Id', 'asc')).
                select(
                    'menu.chef_Id',
                    'menu.Item_Id',
                    'menu.Item_Name',
                    'menu.Item_Category',
                    'menu.Item_Desc',
                    'menu.Item_Price',
                    'menu.Item_Cuisine',

                )

            return AllDishes
        }
        catch (error) {
            console.error('Error fetching dishes:', error);
        }
    }

};
