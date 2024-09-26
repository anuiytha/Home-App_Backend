const Admin_Info_Model = require("../models/admin");
const jwt = require('jsonwebtoken');
module.exports = Admin_Controller = {
    login: async (req, res) => {
        try {
            const data = req.query;
            const login = await Admin_Info_Model.getAdminDetails(data);
            if (login.success) {
                // Generating a JWT token which is used to create a temporary login session for the user.
                const token = jwt.sign({ admin_Id: login.data.admin_Id }, 'token_key', { expiresIn: '1hr' });

                // Sending the token and the user data back as a response.
                res.json({ success: true, token: token, data: login.data });
            } else {
                res.status(401).json({ success: false, error: login.error });

            }
        } catch (error) {
            res.status(401).json({ success: false, errors: [error.message] });
        }
    },
    Admin_Info: async (req, res) => {
        try {
            Admin_Info = await Admin_Info_Model.getAdminDetails()
            if (Admin_Info) {
                res.json({ success: true, data: Admin_Info });
            } else {
                res.status(404).json({ success: false, errors: ['internal server error'] });
            }

        } catch (error) {
            res.json({ success: false, errors: [error.message] });
        }
    },

    AdminName: async (req, res) => {
        id = req.params
        try {
            Admin_Info = await Admin_Info_Model.getAdminName(id);
            if (Admin_Info) {
                res.json({ success: true, data: Admin_Info });
            } else {
                res.status(404).json({ success: false, errors: ['internal server error'] });

            }
        } catch (error) {
            res.json({ success: false, error: [error.message] });
        }
    }

}
