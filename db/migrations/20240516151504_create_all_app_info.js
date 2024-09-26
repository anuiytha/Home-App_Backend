//app_info

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('menu', function (table) {
        table.integer('Item_Id').notNullable().primary();
        table.string('Name').notNullable();
        table.text('Description').notNullable();
        table.decimal('Price').notNullable();
        table.string('Cuisine').notNullable();
        table.binary("Image").notNullable();

    }).then(() => {
        return knex.schema.createTable('chef_Info', function (table) {
            table.increments('id').unsigned().primary();
            table.integer('Chef_Id').notNullable();
            table.string('Chef_Name').notNullable();
            table.string('Chef_Email').notNullable();
            table.timestamp('createdAt').notNullable();
            table.string('password').notNullable();
            table.integer('Item_Id').unsigned().notNullable();//.references("Item_Id").inTable('menu').onDelete('CASCADE');
            //table.timestamp('updatedAt').notNullable();
            table.timestamps(true, true);

        });
    }).then(() => {
        return knex.schema.createTable('user', function (table) {
            table.integer('User_Id').notNullable().primary();
            table.string("Username").notNullable();
            table.string("User_Password").notNullable();
            table.string("User_Email").notNullable();
            table.integer("User_PhoneNo").notNullable();
            table.string("User_Address").notNullable();
            table.string("Payment Method").notNullable();
            table.timestamps(true, true);

        });
    }).then(() => {
        return knex.schema.createTable("order", function (table) {
            table.increments("Order_Id").notNullable().primary();
            table.integer("User_Id").unsigned().notNullable().references("User_Id").inTable('user').onDelete('CASCADE');
            table.json("Items").notNullable();
            table.decimal("TotalPrice").notNullable();
            table.string('Delivery_Address').notNullable();
            table.string("Delivery_Instructions");
            table.string("Payment_Status").notNullable();
            table.timestamp("Timestamp").notNullable();
            table.timestamp(true, true);
        });


    }).then(() => {
        return knex.schema.createTable("payment", function (table) {
            table.integer("Payment_Id").notNullable().primary();
            table.integer("Order_Id").unsigned().notNullable().references("Order_Id").inTable('order').onDelete('CASCADE');
            table.decimal("Amount").notNullable();
            table.string("Payment_Method");
            table.string("Payment_Status").notNullable();
            table.timestamp("Timestamp");

            table.timestamp(true, true);



        });

    }).then(() => {
        return knex.schema.createTable("delivery", function (table) {
            table.integer('Delivery_Id').notNullable().primary();
            table.integer("User_Id").unsigned().notNullable().references("User_Id").inTable("user").onDelete('CASCADE');
            table.string("Delivery_Person").notNullable();
            table.string("Delivery_Status").notNullable();
            table.string("Location").notNullable();
            table.timestamp("TimeStamp");
            table.timestamp(true, true);
        })
    })





};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('delivery').then(() => {
        return knex.schema.dropTable('payment');
    }).then(() => {
        return knex.schema.dropTable('order')
    }).then(() => {
        return knex.schema.dropTable('user')
    }).then(() => {
        return knex.schema.dropTable('chef_Info')
    })
        .then(() => {
            return knex.schema.dropTable('menu')
        })



};
