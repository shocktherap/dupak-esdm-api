import database from '../src/models';

class UserService {
  static async authenticate(newAuthenticate) {  
    try {
      const theUser = await database.User.findOne({
        where: { email: newAuthenticate.email }
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async register(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

}

export default UserService;