module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('company', {
            id: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            domainName: {
                type: Sequelize.DataTypes.STRING,

            },
            numberOfEmployees: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            createdAt: {
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            updatedAt: {
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal(
                    "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
                ),
                allowNull: false,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('company');
    }
};
