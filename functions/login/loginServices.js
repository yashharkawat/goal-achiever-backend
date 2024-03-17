import userDbServices from "../user/userDbServices.js";
import userAuthDbServices from "../user_auth/userAuthDbServices.js";

export default class loginServices {

  static async login( body) {
    const response = {
      status: 500,
      success: false,
    };

    try {
      const {phone = '', otp = '', password = '' } = body;
    
      const user = await userDbServices.getByPhone(phone);
      const userAuth = await userAuthDbServices.getByUserId(user.id);

      if (userAuth.otp === otp || userAuth.password === password) {
        user.auth_token = userAuth.token;
        response.data = user;
        response.success = true;
        response.status = 200;
      }

      return response;
    } 
    catch (e) {
      response.error = e;
      console.log({ e });
      return response;
    }
  }
}
