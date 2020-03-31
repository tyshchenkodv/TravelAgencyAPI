module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ticket', {
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isInt: true,
                min: 0,
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
            type: DataTypes.STRING(4),
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
            type: DataTypes.STRING(4),
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