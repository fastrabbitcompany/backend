const ConnectionModel = require('../../../models/Connection');
const auth = require('../../auth');
module.exports.getQuote = async (req, res) => {
    try {
        const {token,origen,destino,type,volumen} = req.body;
        await  auth.checkToken(token);
        let connection = await ConnectionModel.findOne(
            {
                where: {
                    connectionLocationA: origen,
                    connectionLocationB:destino,
                    connectionModality:type
                }
            }
        );
        let vol = volumen*connection.price;
        res.json({
            success: true,
            time:connection.time,
            distance:connection.distance,
            price:vol
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};