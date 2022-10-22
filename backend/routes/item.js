const ItemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");
const { authentication, authorization } = require("../middleware/auth");

ItemRoute.get("/:checklistId", authentication, ItemController.getAllItem);
ItemRoute.post("/:checklistId/item", authentication, ItemController.createItem);

// ItemRoute.delete(
//   "/:id",
//   authentication,
//   authorization,
//   ItemController.deleteList
// );

module.exports = ItemRoute;
