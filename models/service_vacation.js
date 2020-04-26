module.exports = (sequelize, DataTypes) => {
    const Service_vacation = sequelize.define('service_vacation', {
        service_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isInt: true,
                min: 0,
                max: 11
            },
        },
        vacation_id: {
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

    return Service_vacation;
}