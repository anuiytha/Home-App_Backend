const Chef_Info_Model = require("../models/Chef_Info.js");
const jwt = require('jsonwebtoken');
module.exports = Chef_Info_Controller = {
    login: async (req, res) => {
        try {
            const data = req.query;
            const login = await Chef_Info_Model.getChefLogin(data);
            if (login.success) {
                // Generating a JWT token which is used to create a temporary login session for the user.
                const token = jwt.sign({ Chef_Id: login.data.Chef_Id }, 'token_key', { expiresIn: '1hr' });

                // Sending the token and the user data back as a response.
                res.json({ success: true, token: token, data: login.data });
            } else {
                res.status(401).json({ success: false, error: login.error });

            }
        } catch (error) {
            res.status(401).json({ success: false, errors: [error.message] });
        }
    },
    Chef_Info: async (req, res) => {
        try {
            Chef_Info = await Chef_Info_Model.getChefDetails();
            if (Chef_Info) {
                res.json({ success: true, data: Chef_Info });
            } else {
                res.status(404).json({ success: false, errors: ['internal server error'] });
            }

        } catch (error) {
            res.json({ success: false, errors: [error.message] });
        }
    },

    chefName: async (req, res) => {
        id = req.params
        try {
            chef_Info = await Chef_Info_Model.getChefName(id);
            if (chef_Info) {
                res.json({ success: true, data: chef_Info });
            } else {
                res.status(404).json({ success: false, errors: ['internal server error'] });

            }
        } catch (error) {
            res.json({ success: false, error: [error.message] });
        }
    }

}
