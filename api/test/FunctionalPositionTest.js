import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the functional_position endpoints:', () => {
  it('It should create a functional_position', (done) => {
    const functional_position = {
      name: 'First Awesome functional_position',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };
    chai.request(app)
      .post('/api/v1/functional_positions')
      .set('Accept', 'application/json')
      .send(functional_position)
      .end((err, res) => {
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

  it('It should not create a functional_position with incomplete parameters', (done) => {
    const functional_position = {
      first_semester_lock: '$9.99',
      second_semester_lock: 'This is the awesome functional_position'
    };
    chai.request(app)
      .post('/api/v1/functional_positions')
      .set('Accept', 'application/json')
      .send(functional_position)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all functional_positions', (done) => {
    chai.request(app)
      .get('/api/v1/functional_positions')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('first_semester_lock');
        res.body.data[0].should.have.property('second_semester_lock');
        done();
      });
  });

  it('It should get a particular functional_position', (done) => {
    const functional_positionId = 1;
    chai.request(app)
      .get(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('first_semester_lock');
        res.body.data.should.have.property('second_semester_lock');
        done();
      });
  });

  it('It should not get a particular functional_position with invalid id', (done) => {
    const functional_positionId = 8888;
    chai.request(app)
      .get(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find FunctionalPosition with the id ${functional_positionId}`);
        done();
      });
  });

  it('It should not get a particular functional_position with non-numeric id', (done) => {
    const functional_positionId = 'aaa';
    chai.request(app)
      .get(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a functional_position', (done) => {
    const functional_positionId = 1;
    const updatedfunctional_position = {
      id: functional_positionId,
      name: 'Updated Awesome functional_position',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };
    chai.request(app)
      .put(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .send(updatedfunctional_position)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedfunctional_position.id);
        expect(res.body.data.name).equal(updatedfunctional_position.name);
        expect(res.body.data.first_semester_lock).equal(updatedfunctional_position.first_semester_lock);
        expect(res.body.data.second_semester_lock).equal(updatedfunctional_position.second_semester_lock);
        done();
      });
  });

  it('It should not update a functional_position with invalid id', (done) => {
    const functional_positionId = '9999';
    const updatedfunctional_position = {
      id: functional_positionId,
      name: 'Updated Awesome functional_position again',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };
    chai.request(app)
      .put(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .send(updatedfunctional_position)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find FunctionalPosition with the id: ${functional_positionId}`);
        done();
      });
  });

  it('It should not update a functional_position with non-numeric id value', (done) => {
    const functional_positionId = 'ggg';
    const updatedfunctional_position = {
      id: functional_positionId,
      name: 'Updated Awesome functional_position again',
      first_semester_lock: '2020-01-01',
      second_semester_lock: '2020-06-01'
    };
    chai.request(app)
      .put(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .send(updatedfunctional_position)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('It should delete a functional_position', (done) => {
    const functional_positionId = 1;
    chai.request(app)
      .delete(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a functional_position with invalid id', (done) => {
    const functional_positionId = 777;
    chai.request(app)
      .delete(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`FunctionalPosition with the id ${functional_positionId} cannot be found`);
        done();
      });
  });

  it('It should not delete a functional_position with non-numeric id', (done) => {
    const functional_positionId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/functional_positions/${functional_positionId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});