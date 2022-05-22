const createCompany = async (db, info) => {
    const model = db.company;
    const company = await model.create(info);
    console.log(company);
    return company.dataValues;
}


module.exports = {
    createCompany
}