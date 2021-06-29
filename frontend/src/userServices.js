import jwtDecode from "jwt-decode";

class UserService {
    constructor() {}
    getLoggedInUser = () => {
        try {
          const jwt = localStorage.getItem("user");
          return jwtDecode(jwt);
        } catch (ex) {
          return null;
        }
      };
}

let userService = new UserService();
export default userService;
