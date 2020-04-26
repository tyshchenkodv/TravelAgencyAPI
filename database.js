const Sequelize = require('sequelize');

const User = require('./models/user');
const Hotel = require('./models/hotel');
const Service = require('./models/service');
const Ticket = require('./models/ticket');
const Vacation = require('./models/vacation');
const ServiceVacation = require('./models/serviceVacation');

const sequelize = new Sequelize(
    'travelagency',
    'root',
    'EvY26j7r',
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
    ServiceVacation: ServiceVacation(sequelize, Sequelize)
};

models.Vacation.belongsTo(models.User, {
    as: 'user',
    foreignKey: 'userId',
});
models.User.hasMany(models.Vacation);

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

module.exports = {
    ...models,
    sequelize,
};
