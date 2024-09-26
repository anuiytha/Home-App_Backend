const knex = require('../config/database.js')
module.exports = Chef = {
    // this function is used to compare if the user entered chef id is present in the database or not.
    getChefLogin: async (data) => {
        try {


            const chef = await knex('chef_Info').where({ Chef_Id: parseInt(data.Chef_Id) }).first(); //first()
            if (!chef) {
                return { error: 'Invalid chef ID' };
            }

            if (chef.password !== data.password) {
                return { error: 'Invalid password' };
            }

            // Successful Login
            const { password, ...chefDataWithoutPassword } = chef;
            return { success: true, data: chefDataWithoutPassword };

        } catch (error) {
            console.error('Error fetching getChefLogin:', error);
            throw error;
        }

    },
    getChefDetails: async () => {
        try {
            return await knex('chef_Info').select(
                'chef_Info.Chef_Id',
                'chef_Info.Chef_Name',
                // 'chef_Info.Chef_Email as Chef_Email',
                // 'chef_Info.createdAt',
                // 'chef_Info.password as password',
                // 'chef_Info.Item_Id as Item_Id'
            )
            //.where('chef_Info.Chef_Id', id.id)
        } catch (error) {
            console.error('Error fetching getChefDetails:', error);
            throw error;
        }
    },

    getChefName: async (id) => {
        try {
            return await knex('chef_Info').select(
                'chef_Info.Chef_Id',
                'chef_Info.Chef_Name',
                // 'chef_Info.Chef_Email as Chef_Email',
                // 'chef_Info.createdAt',
                // 'chef_Info.password as password',
                // 'chef_Info.Item_Id as Item_Id'
            )
                .where('chef_Info.Chef_Id', id.id)

        } catch (error) {
            console.error('Error fetching Chef_Details', error);
            throw error;
        }
    }
}