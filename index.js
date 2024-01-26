const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PORT;
const cors = require ('cors');
const productRoutes = require ('./routes/product.routes');
const { dbConnection } = require('./database/config');



app.use(cors());
app.use(express.json());



(async () => {
    await dbConnection();
    app.use (productRoutes);
})();



app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});