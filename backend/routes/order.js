const orderRoute = require("express").Router();
const OrderController = require("../controllers/OrdersController");
const { authentication } = require("../middleware/auth");

orderRoute.get("/order_user", authentication, OrderController.getAllOrderUser);
orderRoute.get(
  "/transaction/:id",

  OrderController.getTranscation
);
orderRoute.post(
  "/create_order/:id",
  authentication,
  OrderController.createOrder
);
orderRoute.put(
  "/update_order/:id",
  authentication,
  OrderController.updateOrder
);
orderRoute.delete(
  "/delete_order/:id",
  authentication,
  OrderController.deleteOrder
);
orderRoute.get("/info_order/:id", authentication, OrderController.getOrderById);

module.exports = orderRoute;
