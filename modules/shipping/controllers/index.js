const ShippingModel = require('../../../models/Shipping')
const ShippingStatusModel = require('../../../models/ShippingStatusHistory')
const RoutesModel = require('../../../models/Route')
const EmployeeModel = require('../../../models/Employee')
const LocationModel = require('../../../models/Location')
const UserModel = require('../../../models/User')
const ModalityModel = require('../../../models/Modality')
const CityModel = require('../../../models/City')
const Sequelize = require('sequelize');
const ConnectionModel = require('../../../models/Connection')
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
                "routeConnection": data.shippingConnection
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
module.exports.getAllShippings = async (req,res) =>{
    try{
        const {token} = req.body;
        await auth.checkToken(token);
        let shippings = await ShippingModel.findAll(
            {
                attributes:['shippingId',[Sequelize.col('Connection.ConnectionLocationB.City.cityName'),"Destination"],[Sequelize.col('Connection.ConnectionLocationA.City.cityName'),"Origen"]],
                include:[{
                    model:ShippingStatusModel,
                    attributes:['shippingStatusHistoryStatus'],
                    include:[{
                        model:RoutesModel,
                        attributes:['routeOrder'],
                        include:[{
                            model:LocationModel,
                            attributes:['locationDescription'],
                            raw: true,
                            include:{
                                model:CityModel,
                                attributes:['cityName']
                            }
                        }]
                    }]
                },{
                    model:ConnectionModel,
                    attributes:[],
                    include:[{
                        model:LocationModel,
                        as:"ConnectionLocationB",
                        include: [{
                            model:CityModel,
                        }]
                    }]
                },
                    {
                        model:ConnectionModel,
                        attributes:[],
                        include:[{
                            model:LocationModel,
                            as:"ConnectionLocationA",
                            include: [{
                                model:CityModel,
                            }]
                        }]
                    }]
             }
        )
        res.json({
            success: true,
            shippings
        });
    }catch
        (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports.getAllShippingsForUser = async (req,res) =>{
    try{
        const {token} = req.body;
        await auth.checkToken(token);
        const id = await  auth.getIdFromToken(token);
        let shippings = await ShippingModel.findAll(
            {
                attributes:['shippingId',[Sequelize.col('Connection.ConnectionLocationB.City.cityName'),"Destination"],["createdAt","date"]],
                include:[{
                    model:ShippingStatusModel,
                    attributes:['shippingStatusHistoryStatus'],
                    include:[{
                        model:RoutesModel,
                        attributes:['routeOrder'],
                        include:[{
                            model:LocationModel,
                            attributes:['locationDescription'],
                            raw: true,
                            include:{
                                model:CityModel,
                                attributes:['cityName']
                            }
                        }]
                    }]
                },{
                    model:ConnectionModel,
                    // attributes:[],
                    include:[{
                        model:LocationModel,
                        as:"ConnectionLocationB",
                        include: [{
                            model:CityModel,
                        }]
                    },
                    {
                        model:ModalityModel
                    }]
                },{
                    model:UserModel,
                    where:{
                        id
                    }
                }]
            }
        )
        res.json({
            success: true,
            shippings
        });
    }catch
        (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports.chageState = async (req,res) =>{
    try{
        let {token,shippingStatusHistoryShipping,shippingStatusHistoryRoute} = req.body;
        await auth.checkToken(token)
        await ShippingStatusModel.update({
            shippingStatusHistoryRoute:1
        },{
            where:{
                shippingStatusHistoryShipping,
                shippingStatusHistoryRoute
            }
        })
        res.json({
            success: true,
            message:"Shipping updated"
        });
    }catch
        (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}