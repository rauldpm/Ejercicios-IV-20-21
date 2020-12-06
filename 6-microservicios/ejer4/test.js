
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../ejer3/express_var');

chai.use(chaiHttp);
chai.should();

describe("Vivienda", () => {

    it ("/         debe ser objeto", (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it ("/vivienda debe ser objeto", (done) => {
        chai.request(app)
            .get('/vivienda?calle=Alhondiga&portal=3&piso=1&letra=E')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

});