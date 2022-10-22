"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChecklistItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChecklistItem.belongsTo(models.Checklist);
    }
  }
  ChecklistItem.init(
    {
      itemName: DataTypes.STRING,
      ChecklistId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ChecklistItem",
    }
  );
  return ChecklistItem;
};
