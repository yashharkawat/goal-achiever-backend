import userDbServices from "./userDbServices.js";

export default class userServices {
  static async getUsers() {
    const response = {
      status: 500,
      success: false,
    };

    try {
      const users = await userDbServices.getUsers();

      response.data = users;
      response.success = true;
      response.status = 200;

      return response;
    } 
    catch (e) {
      response.error = e;
      console.log({ e });
      return response;
    }
  }

  static async postUser(params, body) {
    const response = {
      status: 500,
      success: false,
    };

    try {
      const { email = "", name = "", phone = "", password = "" } = body;
      
      const userFields = { email, name, phone, password };
      const user = await userDbServices.createUser(userFields);

      response.data = user;
      response.success = true;
      response.status = 200;

      return response;
    } 
    catch (e) {
      response.error = e;
      console.log({ e });
      return response;
    }
  }
}
