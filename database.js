const Sequelize = require('sequelize');
const User = require('./models/user');
const Hotel = require('./models/hotel');
const Service = require('./models/service');

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
};

module.exports = {
    ...models,
    sequelize,
};