const express = require('express');
const AuthController = require('./controllers/AuthController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({
        code: 200,
        message: 'ok',
    });
});

router.post('/users/login', AuthController.login);

module.exports = router;