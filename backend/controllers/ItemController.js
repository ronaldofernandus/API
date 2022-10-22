const { Checklist, User, ChecklistItem } = require("../models");

class ItemController {
  static async getAllItem(req, res) {
    try {
      const ChecklistId = +req.params.ChecklistId;

      const CheckItem = await ChecklistItem.findAll({
        included: [Checklist],
      });
      res.status(200).json(CheckItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createItem(req, res) {
    try {
      const { itemName } = req.body;
      const ChecklistId = +req.params.ChecklistId;
      console.log(ChecklistId);

      const UserId = +req.userData.id;
      console.log(UserId);

      const createdItem = await ChecklistItem.create({
        itemName,
        ChecklistId,
        UserId,
      });
      res.status(200).json(createdItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //   static async deleteList(req, res) {
  //     try {
  //       const id = +req.params.id;

  //       const deletedList = await Post.destroy({
  //         where: { id },
  //       });

  //       deletedList === 1
  //         ? res.status(200).json({ message: `List has been deleted` })
  //         : res.status(404).json({ message: `id is not found` });
  //     } catch (error) {
  //       res.status(500).json({ message: error.message });
  //     }
  //   }
}

module.exports = ItemController;
