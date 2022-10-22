const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: `homepage`,
  });
});

const UserRoutes = require("./user");

route.use("/user", UserRoutes);

module.exports = route;
