const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, Express!');
});





app.get('/products', (req, res) => {
    res.send('GET /products');
});

app.post('/products', (req, res) => {
    res.send('POST /products');
});

app.put('/products', (req, res) => {
    res.send('PUT /products');
});

app.delete('/products', (req, res) => {
    res.send('DELETE /products');
});






app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});