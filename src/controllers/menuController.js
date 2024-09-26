const menuModel = require("../models/menu");
const jwt = require("jsonwebtoken");

module.exports = menuController = {
    menuDetails: async (req, res) => {
        console.log("Inside Controller");
        const { id } = req.params; // We need to use {} to delimit Json format
        try {
            menu = await menuModel.getmenu(id);
            if (menu) {
                res.json({ success: true, data: menu });
            } else {
                res
                    .status(404)

                    .json({ success: false, errors: ["internal server error"] });
            }
        } catch (error) {
            res.json({ success: false, errors: [error.message] });
        }
    },
    allmenuDetails: async (req, res) => {
        console.log("Inside Controller");
        try {
            const menu = await menuModel.getallmenu(); // Call getmenu without id
            if (menu) {
                res.json({ success: true, data: menu });
            } else {
                res.status(404).json({ success: false, errors: ["No menu items found"] });
            }
        } catch (error) {
            res.status(500).json({ success: false, errors: [error.message] });
        }
    },




};