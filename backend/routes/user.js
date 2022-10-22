const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/auth");
const upload = require("../middleware/multer");
userRoute.get("/info_user", authentication, UserController.getinfoUserbyId);
userRoute.post("/login", UserController.login);
userRoute.post(
  "/register",
  upload.single("user_avatar"),
  UserController.register
);

module.exports = userRoute;
