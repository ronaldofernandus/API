const { Checklist, User } = require("../models");

class ListController {
  static async getAllList(req, res) {
    try {
      const List = await Checklist.findAll({
        order: [["updatedAt", "desc"]],
        include: [User],
      });
      res.status(200).json(List);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createList(req, res) {
    try {
      const { list } = req.body;

      const UserId = +req.userData.id;
      console.log(UserId);

      const createdList = await Checklist.create({
        list,
        UserId,
      });
      res.status(200).json(createdList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteList(req, res) {
    try {
      const id = +req.params.id;

      const deletedList = await Post.destroy({
        where: { id },
      });

      deletedList === 1
        ? res.status(200).json({ message: `List has been deleted` })
        : res.status(404).json({ message: `id is not found` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ListController;
