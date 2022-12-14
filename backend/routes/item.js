const ItemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");
const { authentication, authorization } = require("../middleware/auth");

ItemRoute.get("/:ChecklistId/item", authentication, ItemController.getAllItem);
ItemRoute.post("/:ChecklistId/item", authentication, ItemController.createItem);
ItemRoute.delete(
  "/:ChecklistId/item/ChecklistItemId",
  authentication,
  ItemController.deleteItem
);


module.exports = ItemRoute;
