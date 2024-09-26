const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const knex = require('knex');

const chef_InfoRoutes = require('./routes/Chef_Info.js');
const Add_DishRoutes = require("./routes/Add_Dish.js");
const dbConfig = require("../knexfile.js");
const menuRoutes = require("./routes/menu.js");
const menulistRoutes = require("./routes/menulist.js");
const adminRoutes = require("./routes/admin.js");
const authenticateToken = require("./middleware/authMiddleware.js");


const createApp = () => {
    const app = express();
    app.use(express.json());
    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
    };

    // const storage = multer.memoryStorage();
    // const upload = multer({ storage: storage });
    app.use(cors(corsOptions));
    app.use(bodyParser.json());

    app.get("/adduser", (req, res) => {
        console.log(req.body);
        res.send("Response Recieved: " + req.body)
    })

    // const knexInstance = knex(dbConfig.development)


    // app.post('/addmenu', upload.single('image'), async (req, res) => {
    //     try {
    //         const file = req.file;
    //         const filename = req.originalname;
    //         const mimetype = file.mimetype;
    //         const Item_Image = file.buffer;

    //         const result = await knexInstance('menu').insert({
    //             filename: filename,
    //             mimetype: mimetype,
    //             Item_Image: Item_Image
    //         }).returning('id');

    //         res.json({ id: result[0] });
    //     } catch (error) {
    //         console.error('Error during upload:', error);
    //         res.status(500).json({ error: 'Error uploading file.' });
    //     }
    // })

    // app.get('/image/:id', async (req, res) => {
    //     const id = req.params.id;

    //     try {
    //         const result = (await knexInstance('menu')).
    //             select('filename', 'mimetype', 'image').where('id', id).first();

    //         if (!result) {
    //             return res.status(404).json({ error: "Image not found" })
    //         }

    //         res.set({
    //             'Content-Type': result.mimetype,
    //             'Content-Disposition': `inline; filename ="${result.filename}"`,
    //         })
    //         res.send(result.image)

    //     } catch (error) {
    //         console.error('Error fetching image:', error);
    //         res.status(500).json({ error: 'Error fetching image' });
    //     }
    // })

    console.log('Inside server.js');
    app.use('/api/v1/chef_Info', chef_InfoRoutes);

    app.use('/addmenu', Add_DishRoutes);
    // app.use("/api/v1/submissions", submissionRoutes);
    app.use("/getmenu", menuRoutes);
    app.use("/menulist", menulistRoutes)
    app.use("/admin", adminRoutes)


    return app;
};

module.exports = createApp;