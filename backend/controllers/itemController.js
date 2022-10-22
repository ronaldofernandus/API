const { line_item, product, shopping_cart, order } = require("../models");

class itemController {
  static async getItem(req, res) {
    try {
      let getItem = await line_item.findAll({
        include: [product, shopping_cart, order],
      });
      res.status(200).json(getItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
  static async getItemById(req, res) {
    try {
      const id = +req.params.id;

      let getItemById = await line_item.findAll({
        where: {
          id,
        },
      });
      res.status(200).json(getItemById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = itemController;
