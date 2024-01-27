const { Router } = require('express');
const { productsGet, productsPost, productsPut, productsDelete } = require('../controllers/product.controller');
const router = Router();


const guardToken = require('../middleware/auth.middleware');



router.get('/products', productsGet);
router.post('/products', guardToken, productsPost);
router.put('/products', productsPut);
router.delete('/products', productsDelete);


module.exports = router;