const ConnectionModel = require('../../../models/Connection');
const auth = require('../../auth');
module.exports.getQuote = async (req, res) => {
    try {
        const {token,origen,destino,type,volumen,peso} = req.body;
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
        let price = parseInt(volumen)*parseInt(connection.priceVolume) + parseInt(peso)*parseInt(connection.priceWeight) + parseInt(connection.priceDistance);
        res.json({
            success: true,
            time:connection.time,
            distance:connection.distance,
            price,
            connectionTravel:connection.connectionId
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};