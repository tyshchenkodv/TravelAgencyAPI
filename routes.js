const express = require('express');
const AuthController = require('./controllers/AuthController');
const HotelController = require('./controllers/HotelController');
const ServiceController = require('./controllers/ServiceController');
const TransportTicketController = require('./controllers/TransportTicketController');
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

router.get('/transportticket', auth, TransportTicketController.list);
router.post('/transportticket', auth, TransportTicketController.create);
router.get('/transportticket/:id', auth, TransportTicketController.item);
router.put('/transportticket/:id', auth, TransportTicketController.update);
router.delete('/transportticket/:id', auth,TransportTicketController.delete);

module.exports = router;