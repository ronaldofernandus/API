const { user } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class UserController {
  static async getinfoUserbyId(req, res) {
    try {
      const id = Number(req.userData.id);

      let users = [await user.findByPk(id)];
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  static async login(req, res) {
    try {
      const { user_email, user_password } = req.body;
      let emailFound = await user.findOne({
        where: { user_email },
      });

      if (emailFound) {
        if (decryptPass(user_password, emailFound.user_password)) {
          let access_token = tokenGenerator(emailFound);
          let verToken = tokenVerifier(access_token);
          res.status(201).json({ access_token });
          console.log(verToken);
        } else {
          res.status(403).json({
            message: `Invalid Password`,
          });
        }
      } else {
        res.status(404).json({
          message: `404: Not Found!`,
        });
      }
    } catch (err) {
      res.status(404).json({
        message: err.message,
      });
    }
  }
  static async register(req, res) {
    try {
      const user_avatar = req.file.filename;
      const {
        user_name,
        user_email,
        user_password,

        user_birthdate,
        user_gender,

        user_type,
      } = req.body;

      let result = await user.create({
        user_name,
        user_email,
        user_password,
        user_birthdate,
        user_gender,
        user_avatar,
        user_type,
      });
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      // res.status(404).json({
      //   message: `Register has Failed!`,
      // });
    }
  }
}

module.exports = UserController;
