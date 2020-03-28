module.exports = (sequelize, DataTypes) => {
    return sequelize.define('service', {
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
        }
    });
};