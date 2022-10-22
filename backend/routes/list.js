const ListRoute = require("express").Router();
const ListController = require("../controllers/ListController");
const { authentication, authorization } = require("../middleware/auth");

ListRoute.get("/", authentication,ListController.getAllList);
ListRoute.post("/", authentication, ListController.createList);

ListRoute.delete(
  "/:checklistId",
  authentication,

  ListController.deleteList
);

module.exports = ListRoute;
