//imports
const express = require('express');
const cors = require('express');


//initialize the app
const app = express();
//initial settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//port
const port = 3000;

// DataBase
require('./database/connection');
require('./database/relationships')();

// routes
const UserRoutes = require('./modules/user/routes')


app.use('/api/auth',UserRoutes);

// initilize the app
app.listen(port,() =>{
    console.log(`listen on port ${port}`)
})


