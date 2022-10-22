const shopRoute = require("express").Router();
const ShopController = require("../controllers/ShoppingCartController");
const { authentication } = require("../middleware/auth");

shopRoute.get("/", ShopController.getinfoshopping);
shopRoute.get("/all", ShopController.getShopByAll);

module.exports = shopRoute;
