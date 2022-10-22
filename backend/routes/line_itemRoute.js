const itemRoute = require("express").Router();
const itemController = require("../controllers/itemController");

const authentication = require("../middleware/auth");
// const upload = require("../middleware/multer");
itemRoute.get("/", itemController.getItem);

itemRoute.get("/:id", itemController.getItemById);

module.exports = itemRoute;
