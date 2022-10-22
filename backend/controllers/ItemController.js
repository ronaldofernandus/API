const { Checklist, User, ChecklistItem } = require("../models");

class ItemController {
  static async getAllItem(req, res) {
    try {
      const CheckListId = +req.params.id;

      const ChecklistItem = await ChecklistItem.findOne({
        include: [User],
        where: { CheckListId },
      });
      res.status(200).json(ChecklistItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createItem(req, res) {
    try {
      const { itemName } = req.body;
      const checklistId = +req.params.id;
      console.log(checklistId);

      const UserId = +req.userData.id;
      console.log(UserId);

      let GetChecklistId = await Checklist.findOne({
        where: {
          checklistId: checklistId,
        },
      });
      console.log(id);
      const createdItem = await ChecklistItem.create({
        itemName,
        GetChecklistId,
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
