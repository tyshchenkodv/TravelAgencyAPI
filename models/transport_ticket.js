module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transport_ticket', {
        price: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    1,
                    11,
                ],
            },
        },
        departure_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
        arrival_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
        icao_departure: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    3,
                    4,
                ],
            },
        },
        icao_arrival: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    3,
                    4,
                ],
            },
        },
    });
};