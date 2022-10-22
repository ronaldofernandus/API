"use strict";
const { encryptPass } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Checklist);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },

    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPass(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
