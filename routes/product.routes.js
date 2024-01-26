const { Router } = require('express');
const { productsGet, productsPost, productsPut, productsDelete } = require('../controllers/product.controller');
const router = Router();



router.get('/products', productsGet);
router.post('/products', productsPost);
router.post('/products', productsPut);
router.post('/products', productsDelete);


module.exports = router;