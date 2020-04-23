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

router.get('/vacation', auth, VacationController.list);
router.post('/vacation', auth, VacationController.create);
router.get('/vacation/:id', auth, VacationController.item);
router.put('/vacation/:id', auth, VacationController.update);
router.delete('/vacation/:id', auth,VacationController.delete);

module.exports = router;