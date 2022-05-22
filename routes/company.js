const express = require('express');
const router = express.Router();
const companyController = require('../controller/company');

router.post('/', async function(req, res, next) {
    const db = req.app.get('db');
    const companyInfo = req.body;
    return res.status(200).send(await companyController.createCompany(db, companyInfo));
});

module.exports = router;
