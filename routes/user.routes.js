const { Router } = require('express');
const { usersGet, usersPost, usersPut,  usersDelete} = require('../controllers/user.controller');
const router = Router();



router.get('/users', usersGet);
router.post('/users', usersPost);
router.put('/users', usersPut);
router.delete('/users', usersDelete);


module.exports = router;