const Sequelize = require('sequelize');
const User = require('./models/user');
const Hotel = require('./models/hotel');
const Service = require('./models/service');
const Ticket = require('./models/ticket');
const Vacation = require('./models/vacation');
const Service_vacation = require('./models/service_vacation');

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
    Service_vacation: Service_vacation(sequelize, Sequelize)
};

module.exports = {
    ...models,
    sequelize,
};