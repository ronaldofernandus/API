const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: `homepage`,
  });
});

const UserRoutes = require("./user");
const ListRoutes = require("./list");

const ChecklistItem = require("./item")


route.use("/user", UserRoutes);
route.use("/checklist", ListRoutes);
route.use("/checklist", ChecklistItem);
module.exports = route;
