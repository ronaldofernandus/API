const ListRoute = require("express").Router();
const ListController = require("../controllers/ListController");
const { authentication, authorization } = require("../middleware/auth");

ListRoute.get("/", ListController.getAllList);
ListRoute.post("/", authentication, ListController.createList);

ListRoute.delete(
  "/:id",
  authentication,
  authorization,
  ListController.deleteList
);

module.exports = ListRoute;
