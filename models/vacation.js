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
    const Service = sequelize.define('user',{});
    const Service_vacation = sequelize.define('service_vacation',{});


    Vacation.belongsTo(User);
    Vacation.belongsToMany(Service, {
        through: {
            model: Service_vacation,
            unique: false
        },
        foreignKey: 'vacation_id',
        constraints: false
    });
    return Vacation;
};
