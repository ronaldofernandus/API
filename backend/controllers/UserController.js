const { User, Post } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");

class UserController {
  static async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const createdUser = await User.create({
        username,
        email,
        password,
      });
      res.status(200).json(createdUser);
    } catch (error) {
      console.log(error);
      // res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    const { name, email, password } = req.body;

    try {
      const emailFound = await User.findOne({
        where: { email },
      });

      if (emailFound) {
        if (decryptPass(password, emailFound.password)) {
          let token = tokenGenerator(emailFound);
          // let verifyToken = tokenVerifier(token);
          res.status(200).json({ token });
        } else {
          res.status(403).json({ message: `invalid password!` });
        }
      } else {
        res.status(404).json({ message: `user not found!` });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = UserController;
