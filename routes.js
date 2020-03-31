const express = require('express');
const AuthController = require('./controllers/AuthController');
const HotelController = require('./controllers/HotelController');
const ServiceController = require('./controllers/ServiceController');
const TicketController = require('./controllers/TicketController');
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

router.get('/service', auth, ServiceController.list);
router.post('/service', auth, ServiceController.create);
router.get('/service/:id', auth, ServiceController.item);
router.put('/service/:id', auth, ServiceController.update);
router.delete('/service/:id', auth, ServiceController.delete);

router.get('/ticket', auth, TicketController.list);
router.post('/ticket', auth, TicketController.create);
router.get('/ticket/:id', auth, TicketController.item);
router.put('/ticket/:id', auth, TicketController.update);
router.delete('/ticket/:id', auth,TicketController.delete);

module.exports = router;