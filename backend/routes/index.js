const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: `homepage`,
  });
});

const UserRoutes = require("./user");
const ListRoutes = require("./list");

route.use("/user", UserRoutes);
route.use("/checklist", ListRoutes);
module.exports = route;
