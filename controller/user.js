const signUpNewbie = async (db, user) => {
    const model = db.user;
    const result = await db.sequelize.transaction(async (t) => {
        const existingMember = await model.findOne({where: {id: user.id}}, {transaction: t})

        if (existingMember === null) {
            const result = await model.create(user, {transaction: t});
            return result;
        }
    })
    return result;
}

module.exports = {
    signUpNewbie
}