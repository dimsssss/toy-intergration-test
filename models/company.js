module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define('company', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        domainName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numberOfEmployees: {
            type: DataTypes.INTEGER,
            allowNull: false
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

    return company;
}
