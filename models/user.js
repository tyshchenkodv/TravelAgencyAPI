module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    1,
                    30,
                ],
            },
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    1,
                    30,
                ],
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    10,
                    25,
                ],
            },
        },
        identification_code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    10,
                ],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    8,
                    50,
                ],
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    3,
                    20,
                ],
            },
        },
    }, {
        defaultScope: {
            attributes: {
                exclude: [
                    'password',
                    'identification_code',
                ],
            },
        },
    });
};
