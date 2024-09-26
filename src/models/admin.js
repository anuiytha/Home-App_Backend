const knex = require('../config/database.js')
module.exports = Admin = {
    // this function is used to compare if the user entered chef id is present in the database or not.
    getAdminLogin: async (data) => {
        try {


            const admin = await knex('admin').where({ admin_Id: parseInt(data.admin_Id) }).first(); //first()
            if (!admin) {
                return { error: 'Invalid admin ID' };
            }

            if (admin.password !== data.password) {
                return { error: 'Invalid password' };
            }

            // Successful Login
            const { password, ...adminDataWithoutPassword } = admin;
            return { success: true, data: adminDataWithoutPassword };

        } catch (error) {
            console.error('Error fetching getAdminLogin:', error);
            throw error;
        }

    },
    getAdminDetails: async () => {
        try {
            return await knex('admin').select(
                'admin.admin_Id',
                'admin.admin_Firstname',
                'admin.admin_Lastname'
                // 'chef_Info.Chef_Email as Chef_Email',
                // 'chef_Info.createdAt',
                // 'chef_Info.password as password',
                // 'chef_Info.Item_Id as Item_Id'
            )
            //.where('chef_Info.Chef_Id', id.id)
        } catch (error) {
            console.error('Error fetching getAdminDetails:', error);
            throw error;
        }
    },

    getAdminName: async (id) => {
        try {
            return await knex('admin').select(
                'admin.admin_Id',
                'admin.admin_FirstName',
                'admin.admin_LastName'
                // 'chef_Info.Chef_Email as Chef_Email',
                // 'chef_Info.createdAt',
                // 'chef_Info.password as password',
                // 'chef_Info.Item_Id as Item_Id'
            )
                .where('admin.admin_Id', id.id)

        } catch (error) {
            console.error('Error fetching Admin_Details', error);
            throw error;
        }
    }
}