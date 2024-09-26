
const menulistModel = require("../models/menulist");

module.exports = menulistController = {
    createmenulist: async (req, res) => {
        console.log("inside menulistcontroller", req);
        const data = req.body;

        // console.log("inside menulistcontroller", req);

        const {
            id,
            name

        } = req.body;


        console.log(data, "sending data");

        try {

            const menulistdata = await menulistModel.createmenulist(data); // Calling method from model
            res.json({ success: true, data: menulistdata });
        } catch (error) {
            res.status(500).json({ success: false, errors: [error.message] });
        }
    },
};