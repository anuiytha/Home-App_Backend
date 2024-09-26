
const knex = require("../config/database.js");

module.exports = Employee = {
    getmenu: async (id) => {
        console.log("Inside models->req=", id);

        try {
            return await knex("menu")
                .select(
                    "menu.Chef_Id",
                    "menu.Item_Id",
                    "menu.Item_Name",
                    "menu.Item_Category",
                    "menu.Item_Desc",
                    "menu.Item_Price",
                    "menu.Item_Cuisine",
                    "menu.Item_Image",
                    "menu.filename",
                    "menu.mimetype"

                )

                .where({ Item_Id: id });
        } catch (error) {
            console.error("Error fetching menu:", error);
            throw error;
        }
    },


    getallmenu: async () => {
        console.log("Inside models-> getallmenu");

        try {
            return await knex("menu").select(
                "menu.Chef_Id",
                "menu.Item_Id",
                "menu.Item_Name",
                "menu.Item_Category",
                "menu.Item_Desc",
                "menu.Item_Price",
                "menu.Item_Cuisine",
                "menu.Item_Image",
                "menu.filename",
                "menu.mimetype"

            )
        } catch (error) {
            console.error("Error fetching menu:", error);
            throw error;
        }

    }



};
