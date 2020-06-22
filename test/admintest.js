let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let app = require("../server")
chai.use(chaiHttp);
chai.should()
// const url= 'http://localhost:3000';

let token = ''
let username = "asdasdaddsd"
let employee = "asasdaaadda"
describe("Test Services user ", function () {
    it("Create User response OK", function (done) {
        chai.request(app)
            .post("/api/auth/sign-up")
            .send({
                username,
                "email": username+"@unal.edu.co",
                "password": "12345678",
                "phoneNumber": "3118775720",
                "firstName": "Luis",
                "lastName": "Otalora",
                "address": "Calle 23D 111-24"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
    it("Create Login response OK", function (done) {
        chai.request(app)
            .post("/api/auth/login")
            .send({
                "email": "lotalorafoxa2@unal.edu.co",
                "password": "12345678"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                token = res.body.token;
                done()
            })
    })



});

describe("GETS ", () => {
    it("Get locations OK", function (done) {
        chai.request(app)
            .post("/api/city/getall")
            .send({
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
    it("Get shipings user OK", function (done) {
        chai.request(app)
            .post("/api/shipping/getshippingsuser")
            .send({
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
    it("Get all shipings OK", function (done) {
        chai.request(app)
            .post("/api/shipping/getshippings")
            .send({
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
    it("Get all employees OK", function (done) {
        chai.request(app)
            .post("/api/admin/getallemployee")
            .send({
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
    it("Check token", function (done) {
        chai.request(app)
            .post("/api/auth/check")
            .send({
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })

    it("Get Quote destiny OK", function (done) {
        chai.request(app)
            .post("/api/connection/quote")
            .send({
                "type": "1",
                "envio": "1",
                "origen": "1",
                "destino": "2",
                "volumen": "54",
                token,
                "peso": "12"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
})

describe("Update",()=>{
    it("Update employee", function (done) {
        chai.request(app)
            .post("/api/admin/updateemployee")
            .send({
                "username": "lotalorafox1",
                "employeeIsActive": "1",
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
    it("Update status shipping", function (done) {
        chai.request(app)
            .post("/api/shipping/changestate")
            .send({
                shippingStatusHistoryShipping:"11",
                shippingStatusHistoryRoute:"969",
                token
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
})
describe("Create", ()=>{
    it("CreateEmployee response OK", function(done) {
      chai.request(app)
        .post('/api/admin/createemployee')
        .send({"username":employee,
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
        .end( function(err,res){
          expect(res).to.have.status(200);
          done();
        });
    });
    it("Create Shipping response OK", function(done) {
        chai.request(app)
            .post('/api/shipping/createshipping')
            .send({
                "shippingDescription":"un envio",
                "shippingWidth":"14",
                "shippingHeight":"21",
                "shippingWeight":"54",
                "shippingPrice":"65465.46",
                "shippingConnection":"1",
                token
            })
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
    });
})