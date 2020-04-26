module.exports = (sequelize, DataTypes) => {
    return sequelize.define('service', {
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
    });
};
