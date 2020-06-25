const express = require('express');
const AuthController = require('./controllers/AuthController');
const HotelController = require('./controllers/HotelController');
const ServiceController = require('./controllers/ServiceController');
const TicketController = require('./controllers/TicketController');
const VacationController = require('./controllers/VacationController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({
        code: 200,
        message: 'ok',
    });
});

router.post('/login', AuthController.login);

router.get('/hotels', auth, HotelController.list);
router.post('/hotels', auth, HotelController.create);
router.get('/hotels/:id', auth, HotelController.item);
router.put('/hotels/:id', auth, HotelController.update);
router.delete('/hotels/:id', auth, HotelController.delete);

router.get('/services', auth, ServiceController.list);
router.post('/services', auth, ServiceController.create);
router.get('/services/:id', auth, ServiceController.item);
router.put('/services/:id', auth, ServiceController.update);
router.delete('/services/:id', auth, ServiceController.delete);

router.get('/tickets', auth, TicketController.list);
router.post('/tickets', auth, TicketController.create);
router.get('/tickets/:id', auth, TicketController.item);
router.put('/tickets/:id', auth, TicketController.update);
router.delete('/tickets/:id', auth, TicketController.delete);

router.get('/vacations', VacationController.list);
router.post('/vacations', auth, VacationController.create);
router.get('/vacations/:id', auth, VacationController.item);
router.put('/vacations/:id', auth, VacationController.update);
router.delete('/vacations/:id', auth, VacationController.delete);

module.exports = router;
