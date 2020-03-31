"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing the functional_position endpoints:', function () {
  it('It should create a functional_position', function (done) {
    var functional_position = {
      name: 'First Awesome functional_position',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/functional_positions').set('Accept', 'application/json').send(functional_position).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        name: functional_position.name,
        first_semester_lock: functional_position.first_semester_lock,
        second_semester_lock: functional_position.second_semester_lock
      });
      done();
    });
  });
  it('It should not create a functional_position with incomplete parameters', function (done) {
    var functional_position = {
      first_semester_lock: '$9.99',
      second_semester_lock: 'This is the awesome functional_position'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/functional_positions').set('Accept', 'application/json').send(functional_position).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all functional_positions', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/functional_positions').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('name');
      res.body.data[0].should.have.property('first_semester_lock');
      res.body.data[0].should.have.property('second_semester_lock');
      done();
    });
  });
  it('It should get a particular functional_position', function (done) {
    var functional_positionId = 1;

    _chai["default"].request(_index["default"]).get("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('name');
      res.body.data.should.have.property('first_semester_lock');
      res.body.data.should.have.property('second_semester_lock');
      done();
    });
  });
  it('It should not get a particular functional_position with invalid id', function (done) {
    var functional_positionId = 8888;

    _chai["default"].request(_index["default"]).get("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find FunctionalPosition with the id ".concat(functional_positionId));
      done();
    });
  });
  it('It should not get a particular functional_position with non-numeric id', function (done) {
    var functional_positionId = 'aaa';

    _chai["default"].request(_index["default"]).get("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should update a functional_position', function (done) {
    var functional_positionId = 1;
    var updatedfunctional_position = {
      id: functional_positionId,
      name: 'Updated Awesome functional_position',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };

    _chai["default"].request(_index["default"]).put("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').send(updatedfunctional_position).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updatedfunctional_position.id);
      expect(res.body.data.name).equal(updatedfunctional_position.name);
      expect(res.body.data.first_semester_lock).equal(updatedfunctional_position.first_semester_lock);
      expect(res.body.data.second_semester_lock).equal(updatedfunctional_position.second_semester_lock);
      done();
    });
  });
  it('It should not update a functional_position with invalid id', function (done) {
    var functional_positionId = '9999';
    var updatedfunctional_position = {
      id: functional_positionId,
      name: 'Updated Awesome functional_position again',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };

    _chai["default"].request(_index["default"]).put("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').send(updatedfunctional_position).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find FunctionalPosition with the id: ".concat(functional_positionId));
      done();
    });
  });
  it('It should not update a functional_position with non-numeric id value', function (done) {
    var functional_positionId = 'ggg';
    var updatedfunctional_position = {
      id: functional_positionId,
      name: 'Updated Awesome functional_position again',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };

    _chai["default"].request(_index["default"]).put("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').send(updatedfunctional_position).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should delete a functional_position', function (done) {
    var functional_positionId = 1;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a functional_position with invalid id', function (done) {
    var functional_positionId = 777;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("FunctionalPosition with the id ".concat(functional_positionId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a functional_position with non-numeric id', function (done) {
    var functional_positionId = 'bbb';

    _chai["default"].request(_index["default"])["delete"]("/api/v1/functional_positions/".concat(functional_positionId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a numeric value');
      done();
    });
  });
});
//# sourceMappingURL=FunctionalPositionTest.js.map