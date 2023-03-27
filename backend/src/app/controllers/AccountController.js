const db = require("../models");

const { bufferToDataURI } = require("../../utils/file");
const { uploadToCloudinary } = require("../../service/upload.service");

class AccountController {
  // [PUT] /account/:username/update
  update(req, res, next) {
    const { file } = req;
    const username = req.params.username;
    const data = req.body;
    if (!file) {
      req.body.image = req.body.image;
      db.User.update(data, {
        where: { username },
      })
        .then(res.send("updated").status(200))
        .catch(next);
    } else {
      const fileFormat = file.mimetype.split("/")[1];
      const { base64 } = bufferToDataURI(fileFormat, file.buffer);
      uploadToCloudinary(base64, fileFormat).then((imageDetails) => {
        req.body.image = imageDetails.url;
        db.User.update(data, {
          where: { username },
        })
          .then(res.send("updated").status(200))
          .catch(next);
      });
    }
  }

  // [DELETE] /account/:id/delete
  delete(req, res, next) {
    const id = req.params.id;
    db.User.destroy({ where: { id } })
      .then(res.status(200).send("Account deleted"))
      .catch(next);
  }
}

module.exports = new AccountController();
