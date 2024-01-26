const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PORT;
const cors = require ('cors');
const productRoutes = require ('./routes/product.routes');



app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('¡Hola, Express!');
});





(async () => {
    app.use (productRoutes);
})();



app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});