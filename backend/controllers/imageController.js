const { product_image, product } = require("../models");

class imageController {
  static async getImage(req, res) {
    try {
      let getImage = await product.findAll({
        include: [product_image],
      });

      res.status(200).json(getImage);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }
  static async getImage(req, res) {
    try {
      let getImage = await product.findAll({
        include: [product_image],
      });

      res.status(200).json(getImage);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async postImage(req, res) {
    try {
      const { productId } = req.body;
      console.log(productId);

      req.files.forEach((image) => {
        console.log(req.files);
        const { fieldname, originalname, mimetype, filename, size } = image;

        product_image.create({
          prim_filename: filename,
          prim_filesize: size,
          prim_filetype: mimetype,
          prim_primary: true,
          productId,
        });
      });

      res.status(201).json({
        message: "Success",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateImage(req, res) {
    try {
      const id = +req.params.id;

      const userId = +req.userData.id;
      req.files.forEach((image) => {
        const { fieldname, originalname, mimetype, filename, size } = image;
      });
      product_image.update(
        {
          prim_filename,
          prim_filesize,
          prim_filetype,
          prim_primary,
        },
        {
          where: { id, productId },
        }
      );

      updateImage[0] === 1
        ? res.status(201).json({
            message: "image updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async deleteImage(req, res) {
    try {
      const id = req.params.id;
      const userId = +req.userData.id;
      let deleteImage = await product.destroy({
        where: {
          id,
          userId,
        },
      });

      deleteImage === 1
        ? res.status(200).json({
            message: "product deleted successfully",
          })
        : res.status(403).json({
            message: "delete fail",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async getImageById(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let getImageById = await product_image.findAll({
        where: { id },
      });
      res.status(200).json(getImageById);
    } catch (error) {
      // console.log(error);
      res.status(500).json({
        message: "not found",
      });
    }
  }
}

module.exports = imageController;
