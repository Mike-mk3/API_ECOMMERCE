const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersDelete, loginPost } = require('../controllers/user.controller');
const chkToken = require('../middleware/auth.middleware');
const router = Router();



router.get('/users', chkToken, usersGet);
router.post('/users', usersPost);
router.post('/login',  loginPost);
router.put('/users', usersPut);
router.delete('/users', usersDelete);


module.exports = router;