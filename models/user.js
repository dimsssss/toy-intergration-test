module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: 'ENUM',
            allowNull: false,
            defaultValue: 'EMPLOYEE'
        },
        createdAt: {
            type: "TIMESTAMP",
            allowNull: true,
        },
        updatedAt: {
            type: "TIMESTAMP",
            allowNull: true
        },
    }, {
        freezeTableName: true
    });

    return user;
}
