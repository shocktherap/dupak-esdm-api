import UserService from '../services/UserService';
import Util from '../utils/Utilities';

const util = new Util();

class UserController {
  static async register(req, res) {
    if (!req.body.name || !req.body.email || !req.body.ern || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const registeredUser = await UserService.register(newUser);
      util.setSuccess(201, 'User Registered!', registeredUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async login(req, res) {
    if(!req.body.email || !req.body.password){
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newAuthenticate = req.body;
    try {
      const authenticatedUser = await UserService.authenticate(newAuthenticate);
      if (authenticatedUser) {
        util.setSuccess(200, 'User retrieved', {
          id: authenticatedUser.id,
          name: authenticatedUser.name,
          email: authenticatedUser.email,
          ern: authenticatedUser.ern,
          token: 'fake-jwt-token'
        });
      } else {
        util.setSuccess(200, 'No Users found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default UserController;