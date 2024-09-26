
const createServer = require("./server");
//const swaggerUi = require('swagger-ui-express');
//const YAML = require('yamljs');


//const swaggerDocument = YAML.load('src/swagger/swagger.yaml');

const app = createServer();


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 5000, () => {
    console.log(`HomeFoodApp Server is running on port ${process.env.PORT || 5000}`);
});