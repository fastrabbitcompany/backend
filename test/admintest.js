let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let app = require("../server")
chai.use(chaiHttp);
chai.should()
// const url= 'http://localhost:3000';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxvdGFsb3JhZm94MiIsImlkIjoxMjIsImlhdCI6MTU5Mjg1MzM2NSwiZXhwIjoxNTkyOTM5NzY1fQ.FXG6ofnEE4VtVeAG4Loe4KxcSt5I1dqgSgc5trsckgU'
let username = "luise99a32a"
let employee = "asdasdasd929aa"

testurl = (message,url,data) =>{
    it(message, function (done) {
        chai.request(app)
            .post(url)
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    });
}
describe("Test Services user ", function () {
    testurl("Create User response OK","/api/auth/sign-up",{
        username,
        "email": username+"@unal.edu.co",
        "password": "12345678",
        "phoneNumber": "3118775720",
        "firstName": "Luis",
        "lastName": "Otalora",
        "address": "Calle 23D 111-24"
    })
    testurl("Create Login response OK","/api/auth/login",{
        "email": "lotalorafox2@unal.edu.co",
        "password": "12345678"
    })

});

describe("GETS ", () => {
    console.log("token" + token)
    testurl("Get locations OK","/api/city/getall",{
        "token":token
    })
    testurl("Get shipings user OK","/api/shipping/getshippingsuser",{
        token
    })
    testurl("Get all shipings OK","/api/shipping/getshippings",{
        token
    })
    testurl("Get all employees OK","/api/admin/getallemployee",{
        token
    })
    testurl("Check token OK","/api/auth/check",{
        token
    })
    testurl("Get Quote destiny OK","/api/connection/quote",{
        "type": "1",
        "envio": "1",
        "origen": "1",
        "destino": "2",
        "volumen": "54",
        token,
        "peso": "12"
    })
})

describe("Update",()=>{
    testurl("Update employee","/api/admin/updateemployee",{
        "username": "lotalorafox1",
        "employeeIsActive": "1",
        token
    })
    testurl("Update status shipping","/api/shipping/changestate",{
        shippingStatusHistoryShipping:"11",
        shippingStatusHistoryRoute:"969",
        token
    })
})
describe("Create", ()=>{
    testurl("CreateEmployee response OK",'/api/admin/createemployee',{"username":employee,
        "email":employee+"@unal.edu.co",
        "password":"12345678",
        "phoneNumber":"3118775720",
        "firstName":"Luis",
        "lastName":"Otalora",
        "address":"Calle 23D 111-24",
        "employeeDni":"1234567",
        "employeePin":"1345678",
        "employeeIsActive":"1",
        "employeeRole":"1"
    })
    testurl("Create Shipping response OK",'/api/shipping/createshipping',{
        "shippingDescription":"un envio",
        "shippingWidth":"14",
        "shippingHeight":"21",
        "shippingWeight":"54",
        "shippingPrice":"65465.46",
        "shippingConnection":"1",
        token
    })

})