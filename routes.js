const express = require('express');
const AuthController = require('./controllers/AuthController');
const HotelController = require('./controllers/HotelController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({
        code: 200,
        message: 'ok',
    });
});

router.post('/users/login', AuthController.login);
router.get('/hotel', auth, HotelController.list);
router.post('/hotel', auth, HotelController.create);
router.get('/hotel/:id', auth, HotelController.item);
router.put('/hotel/:id', auth, HotelController.update);
router.delete('/hotel/:id', auth, HotelController.delete);

module.exports = router;