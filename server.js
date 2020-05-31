//imports
const express = require('express');
const cors = require('cors');
const logger = require('./lib/logger')
//initialize the app
const app = express();
//initial settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//port
const port = process.env.PORT || 3000;

// DataBase
require('./database/connection');
require('./database/relationships')();

// routes
const AdminRoutes = require('./modules/admin/routes');
const UserRoutes = require('./modules/user/routes');
const CityRoutes = require('./modules/city/routes');
const ConnectionRoutes = require('./modules/connection/routes');

app.all("*",(req,res,next) =>{
    logger.info("Incoming request: ", {method: req.method});
 /*   logger.info("Incoming request verbose",{
        headers:req.headers,
        query:req.query,
        body:req.body
    }); */
    return next();
})

app.use('/api/auth',UserRoutes);
app.use('/api/city',CityRoutes);
app.use('/api/connection',ConnectionRoutes);
app.use('/api/admin',AdminRoutes);

// initilize the app
app.listen(port,() =>{
    console.log(`listen on port ${port}`)
})


