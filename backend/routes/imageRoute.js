const imageRoute = require("express").Router();
const imageController = require("../controllers/imageController");

const authentication = require("../middleware/auth");
const upload = require("../middleware/multer");

imageRoute.get("/", imageController.getImage);

imageRoute.post(
  "/add",

  upload.array("image"),

  // upload.array("image"),
  // (req, res) => {
  //   let arrayUrl = [];
  //   let finalImageUrl =
  //     req.protocol + "://" + req.get("host") + "/image" + rezq.files.filename;

  //   Array.from(finalImageUrl).forEach((finalImageUrl) => {
  //     arrayUrl.push({ image: finalImageUrl });
  //   });
  // },

  imageController.postImage
);
imageRoute.put("/:id", imageController.updateImage);
imageRoute.delete("/:id", imageController.deleteImage);
imageRoute.get("/:id", imageController.getImageById);

module.exports = imageRoute;

// console.log(req.files.filename);
// console.log(req.files);
// Array.from(finalImageUrl).forEach((finalImageUrl) => {
//   res.json({ status: "succes", image: finalImageUrl });
// });
