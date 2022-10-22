const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: `homepage`,
  });
});

const ProductRoutes = require("./product");
const OrderRoutes = require("./order");
const UserRoutes = require("./user");

const imageRoute = require("./imageRoute");
const line_itemRoute = require("./line_itemRoute");
const ShopRoutes = require('./shopping_cart');

route.use("/products", ProductRoutes);
route.use("/orders", OrderRoutes);
route.use("/user", UserRoutes);
route.use("/shoppingcarts", ShopRoutes);
route.use("/images", imageRoute);
route.use("/line", line_itemRoute);
module.exports = route;
