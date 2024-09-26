
const submissionsModel = require("../models/submissions");

module.exports = submissionsController = {
    createMenu: async (req, res) => {
        console.log("inside submission controller", req);
        // console.log("photo id = ", photoid);
        const {
            Chef_Id,
            Item_Id,
            Item_Name,
            Item_Category,
            Item_Desc,
            Item_Price,
            Item_Cuisine,
            // Item_Image
        } = req.body;

        const data = {
            Chef_Id,
            Item_Id,
            Item_Name,
            Item_Category,
            Item_Desc,
            Item_Price,
            Item_Cuisine,

            // Item_Image: "menu_images/" + Item_Image + "/" + photoid,
        }; // Convert array to JSON string
        console.log(data, "sending data");
        try {

            const menuData = await submissionsModel.createdish(data); // Calling method from model
            res.json({ success: true, data: menuData });
        } catch (error) {
            res.status(500).json({ success: false, errors: [error.message] });
        }
    },
};