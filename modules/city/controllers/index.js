const CityModel = require('../../../models/City')
const ContryModel = require('../../../models/Contry')
const auth = require('../../auth')
module.exports.getall = async (req, res) => {
    try {
        const token = req.body.token;
        await  auth.checkToken(token);
        let cities = await CityModel.findAll();
        res.json({
            success: true,
            cities
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};