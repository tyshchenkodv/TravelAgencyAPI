const Sequelize = require('sequelize');

const User = require('./models/user');
const Hotel = require('./models/hotel');
const Service = require('./models/service');
const Ticket = require('./models/ticket');
const Vacation = require('./models/vacation');
const ServiceVacation = require('./models/serviceVacation');
const HotelVacation = require('./models/hotelVacation');
const TicketVacation = require('./models/ticketVacation');

const sequelize = new Sequelize(
    'travelagency',
    'admin',
    'password1234',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: false
        }
    },
);

const models = {
    User: User(sequelize, Sequelize),
    Hotel: Hotel(sequelize, Sequelize),
    Service: Service(sequelize, Sequelize),
    Ticket: Ticket(sequelize, Sequelize),
    Vacation: Vacation(sequelize, Sequelize),
    ServiceVacation: ServiceVacation(sequelize, Sequelize),
    HotelVacation: HotelVacation(sequelize, Sequelize),
    TicketVacation: TicketVacation(sequelize, Sequelize)
};

//Vacation - User
models.Vacation.belongsTo(models.User, {
    as: 'user',
    foreignKey: 'userId',
});
models.User.hasMany(models.Vacation);

//Vacation - Service
models.Vacation.belongsToMany(models.Service, {
    as: 'services',
    through: {
        model: models.ServiceVacation,
        unique: false,
    },
    foreignKey: {
        primaryKey: true,
        fieldName: 'vacationId'
    },
});

models.Service.belongsToMany(models.Vacation, {
    as: 'vacations',
    through: {
        model: models.ServiceVacation,
        unique: false,
    },
    foreignKey: {
        primaryKey: true,
        fieldName: 'serviceId',
    },
});

//Vacation - Hotel
models.Vacation.belongsToMany(models.Hotel, {
    as: 'hotels',
    through: {
        model: models.HotelVacation,
        unique: false,
    },
    foreignKey: {
        primaryKey: true,
        fieldName: 'vacationId',
    },
});

models.Hotel.belongsToMany(models.Hotel, {
    as: 'vacations',
    through: {
        model: models.HotelVacation,
        unique: false,
    },
    foreignKey: {
        primaryKey: true,
        fieldName: 'hotelId',
    },
});

//Vacation - Ticket
models.Vacation.belongsToMany(models.Ticket, {
    as: 'tickets',
    through: {
        model: models.TicketVacation,
        unique: false,
    },
    foreignKey: {
        primaryKey: true,
        fieldName: 'vacationId',
    }
});

models.Ticket.belongsToMany(models.Vacation, {
    as: 'vacations',
    through: {
        model: models.TicketVacation,
        unique: false,
    },
    foreignKey: {
        primaryKey: true,
        fieldName: 'transportTicketId'
    },
});

module.exports = {
    ...models,
    sequelize,
};
