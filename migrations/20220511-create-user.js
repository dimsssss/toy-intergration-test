module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            email: Sequelize.DataTypes.STRING,
            type: {
                type: Sequelize.DataTypes.ENUM,
                defaultValue: 'EMPLOYEE',
                values: ['EMPLOYEE', 'CLIENT'],
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
        return queryInterface.dropTable('user');
    }
};
