const { removeAccents } = require("../../utils/removeAccents");

const db = require("../models");

const { bufferToDataURI } = require("../../utils/file");
const { uploadToCloudinary } = require("../../service/upload.service");

class ProductController {
  // [GET] /product/:slug
  getOne(req, res, next) {
    const slug = req.params.slug;
    db.Product.findOne({ where: { slug }, raw: true })
      .then((product) => res.status(200).send(product))
      .catch(next);
  }
  // [GET] /product/:id/get
  getId(req, res, next) {
    const id = req.params.id;
    db.Product.findOne({ where: { id }, raw: true })
      .then((product) => res.status(200).send(product))
      .catch(next);
  }

  // [POST] /product/create
  createProduct(req, res, next) {
    const { file } = req;
    const product = req.body;
    product.slug = removeAccents(product.name);

    if (!file) {
      req.body.image = req.body.image;
      db.Product.findAll({
        where: {
          name: product.name,
        },
        raw: true,
        nest: true,
      }).then((row) => {
        if (row && row.length) {
          db.Product.increment("amount", {
            by: product.amount,
            where: { name: product.name },
          })
            .then(res.send(product).status(200))
            .catch(next);
        } else {
          db.Product.create(product)
            .then(res.status(200).send(product))
            .catch((err) => console.log(err));
        }
      });
    } else {
      const fileFormat = file.mimetype.split("/")[1];
      const { base64 } = bufferToDataURI(fileFormat, file.buffer);
      uploadToCloudinary(base64, fileFormat).then((imageDetails) => {
        req.body.image = imageDetails.url;
        db.Product.findAll({
          where: {
            name: product.name,
          },
          raw: true,
          nest: true,
        }).then((row) => {
          if (row && row.length) {
            db.Product.increment("amount", {
              by: product.amount,
              where: { name: product.name },
            })
              .then(res.send(row).status(200))
              .catch(next);
          } else {
            db.Product.create(product)
              .then((row) => res.status(200).send(row))
              .catch((err) => console.log(err));
          }
        });
      });
    }
  }

  // [PUT] /product/:id/update
  updateProduct(req, res, next) {
    const { file } = req;
    const id = req.params.id;
    const data = req.body;
    if (!file) {
      db.Product.update(data, {
        where: { id },
      })
        .then((result) => res.send(result))
        .catch(err => console.log(err));
    } else {
      const fileFormat = file.mimetype.split("/")[1];
      const { base64 } = bufferToDataURI(fileFormat, file.buffer);
      uploadToCloudinary(base64, fileFormat).then((imageDetails) => {
        req.body.image = imageDetails.url;
        db.Product.update(data, {
          where: { id },
        })
          .then((result) => res.status(200).send(result))
          .catch(next);
      });
    }
  }

  // [DELETE] /product/:id/delete
  deleteProduct(req, res, next) {
    const id = req.params.id;
    db.Product.destroy({ where: { id } })
      .then(res.status(200).send("product deleted"))
      .catch(next);
  }
}

module.exports = new ProductController();
