
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("Test Services", function() {

  it("CreateEmployee response OK", function(done) {
    chai.request(url)
      .post('/admin/createemployee')
      .send({"username":"lotalorafox112",
        "email":"lotalorafox112@unal.edu.co",
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
});