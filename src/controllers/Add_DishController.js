const AdddishModel = require("../models/Add_Dish");

module.exports = {
    insertDish: async (req, res) => {
        //const data = req.body;
        console.log("inside Add_Dish controller", req);
        // const data = req.body;
        // const file = req.file.map(file => file.path)
        const {
            Chef_Id,
            Item_Id,
            Item_Name,
            Item_Category,
            Item_Desc,
            Item_Price,
            Item_Cuisine,

            //image_path,
        } = req.body;

        const data = {
            Chef_Id,
            Item_Id,
            Item_Name,
            Item_Category,
            Item_Desc,
            Item_Price,
            Item_Cuisine,


        }; // Convert array to JSON string
        console.log(data, "sending data");


        try {
            console.log("Inside addDish controller");
            const result = await AdddishModel.insertDish(data);
            if (result) {
                res.status(201).json({ success: true, data: result.data });

            } else {
                res.status(400).json({ success: false, error: 'Failed to insert dish data' });
            }


        } catch (error) {
            res.status(500).json({ sucess: false, errors: [error.message] });

        }
    },

    getAllDishes: async (req, res) => {
        params = req.query
        try {
            const dishes = await AdddishModel.getAllDishes(params);
            res.json({ success: true, data: dishes });

        } catch (error) {
            res.status(500).json({ success: false, errors: [error.message] });
        }
    }
};
