"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Checklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Checklist.belongsTo(models.User);
    }
  }
  Checklist.init(
    {
      list: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Checklist",
    }
  );
  return Checklist;
};
