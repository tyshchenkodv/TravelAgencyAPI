module.exports = (sequelize, DataTypes) => {
    const Vacation = sequelize.define('vacation', {
        date_start: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
        date_end: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    10,
                    300,
                ],
            },
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isInt: true,
                min: 0,
                max: 11
            },
        }
    });

    const User = sequelize.define('user',{});

    Vacation.belongsTo(User);

    return Vacation;
};
