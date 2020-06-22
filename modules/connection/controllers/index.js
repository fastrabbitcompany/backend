const ConnectionModel = require('../../../models/Connection');
const auth = require('../../auth');
// Factories
let DeliveryFactory = require("../../../desing/delivery/DeliveryFactory");

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
        let fac = new DeliveryFactory();
        let delivery = await fac.createDelivery(type,volumen,peso,connection.priceVolume,connection.priceWeight,connection.priceDistance)
        let price = delivery.calculatePrice();
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