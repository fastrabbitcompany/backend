//imports
const express = require('express');
const cors = require('express');
// routes
const UserRoutes = require('./modules/user/routes')

//initialize the app
const app = express();
//initial settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//port
const port = 3000;

// DataBase
const db = require('./models')
//app.use('/api/auth', UserRoutes);
app.use('/api/auth',UserRoutes);

// initilize the app
db.sequelize.sync().then(()=>{
    app.listen(port,() =>{
        console.log(`listen on port ${port}`)
    })
})


