import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the register endpoints:', () => {
  it('It should create a register', (done) => {
    const user = {
      name: 'User 1',
      email: 'user@example.com',
      password: 'password',
      ern: '111111111111111'
    };
    chai.request(app)
      .post('/api/v1/users/register')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 1,
          name: user.name,
          email: user.email,
          password: user.password,
          ern: user.ern
        });
        done();
      });
  });

  it('It should not create a user with incomplete parameters', (done) => {
    const user = {
      name: 'User 1',
      email: 'user@example.com',
    };
    chai.request(app)
      .post('/api/v1/users/register')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should verify email format', (done) => {
    const user = {
      name: 'User 1',
      email: 'user',
      password: 'password',
      ern: '111111111111111'
    };
    chai.request(app)
      .post('/api/v1/users/register')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Validation error: Validation isEmail on email failed');
        done();
      });
  });

  it('It should only unique email registered', (done) => {
    const user = {
      name: 'User 1',
      email: 'user@example.com',
      password: 'password',
      ern: '111111111111111'
    };
    chai.request(app)
      .post('/api/v1/users/register')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('This email is already taken.');
        done();
      });
  });

  it('It should only unique ern registered', (done) => {
    const user = {
      name: 'User 1',
      email: 'user2@example.com',
      password: 'password',
      ern: '111111111111111'
    };
    chai.request(app)
      .post('/api/v1/users/register')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('This ern is already taken.');
        done();
      });
  });
});