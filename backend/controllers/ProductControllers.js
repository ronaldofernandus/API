const { product, user, product_image } = require("../models");

class ProductController {
  static async getProductById(req, res) {
    try {
      const id = Number(req.params.id);

      let products = await product.findAll({
        where: {
          id: id,
        },
        include: [product_image],
      });
      console.log(products[0]);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async getProduct(req, res) {
    try {
      let getproduct = await product.findAll({
        include: [user, product_image],
      });

      res.status(200).json(getproduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createProduct(req, res) {
    try {
      const {
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_views,
      } = req.body;
      // // console.log(req.body);

      // // console.log(req.file.path);

      const userId = +req.userData.id;
      let createproduct = await product.create({
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_views,
        userId,
      });

      res.status(201).json(createproduct);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = +req.params.id;

      const userId = +req.userData.id;
      // console.log(userId);
      const {
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_views,
      } = req.body;

      let updateproduct = await product.update(
        {
          prod_name,
          prod_desc,
          prod_price,
          prod_stock,
          prod_expire,
          prod_weight,
          prod_category,
          prod_brand,
          prod_condition,
          prod_total_sold,
          prod_rating,
          prod_views,
          userId,
        },
        {
          where: { id },
        }
      );

      updateproduct[0] === 1
        ? res.status(201).json({
            message: "product updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
  static async deleteProduct(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let deleteproduct = await product.destroy({
        where: { id: id, userId: userId },
      });

      deleteproduct === 1
        ? res.status(200).json({
            message: "product deleted successfully",
          })
        : res.status(404).json({
            message: "Product not found",
          });

      // console.log(deleteproduct);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
