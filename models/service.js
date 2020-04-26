module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('service', {
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
        }
    });


    const Vacation = sequelize.define('user',{});
    const Service_vacation = sequelize.define('service_vacation',{});

    Service.belongsToMany(Vacation, {
        through: {
            model: Service_vacation,
            unique: false
        },
        foreignKey: 'service_id',
        constraints: false
    });

    return Service;
};