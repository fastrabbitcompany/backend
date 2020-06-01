const ShippingModel = require('../../../models/Shipping')
const ShippingStatusModel = require('../../../models/ShippingStatusHistory')
const RoutesModel = require('../../../models/Route')
const EmployeeModel = require('../../../models/Employee')
const auth = require('../../auth');

module.exports.createShipping = async (req, res) => {
    try {
        const data = req.body;
        const {token} = req.body;
        await auth.checkToken(token);
        let userid = await auth.getIdFromToken(token)
        let shipping = await ShippingModel.create({...data, shippingOwner: userid});
        let routes = await RoutesModel.findAll({
            where: {
                "routeConnection": 1
            },
            order: [['routeOrder', 'ASC']]
        })
        console.log(routes)
        await routes.forEach((route) => {
            ShippingStatusModel.create({
                "shippingStatusHistoryShipping": shipping.shippingId,
                "shippingStatusHistoryRoute": route.routeId
            })
        })
        res.json({
            success: true,
            message: 'shipping successfully created',
            idShipping:shipping.shippingId
        });
    } catch
        (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
// module.