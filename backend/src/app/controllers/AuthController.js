const db = require("../models");
const cache = require("../../utils/cache");
const jwtConfig = require("../../config/jwt");
const jwt = require("../../utils/jwt");
const bcrypt = require("bcrypt");

class AuthController {
  resgister(req, res) {
    const userData = req.body;
    db.User.findOne({
      where: {
        email: userData.email,
      },
    }).then((exist) => {
      if (exist) {
        res.json({ message: "Email đã tồn tại." });
      } else {
        db.User.findOne({
          where: {
            username: userData.username,
          },
        }).then((exist) => {
          if (exist) {
            res.json({ message: "Username đã tồn tại." });
          } else {
            bcrypt.hash(userData.password, 10).then((hashedPassword) => {
              userData.password = hashedPassword;
              db.User.create(userData).then(res.json(userData));
            });
          }
        });
      }
    });
  }

  login(req, res, next) {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (user) {
          bcrypt.compare(req.body.password, user.password).then((isMatched) => {
            if (isMatched) {
              const token = jwt.createToken({ id: user.id, isAdmin: user.isAdmin });
              res.json({
                access_token: token,
                user,
              });
            } else {
              res.json({ message: "Mật khẩu không chính xác." });
            }
          });
        } else {
          res.json({ message: "Tài khoản không tồn tại." });
        }
      })
      .catch((err) => console.log(err));
  }

  logout(req, res, next) {
    const token = req.token;
    const now = new Date();
    const expire = new Date(req.user.exp);
    console.log(expire);
    const milliseconds = now.getTime() - expire.getTime();

    cache
      .set(token, token, milliseconds)
      .then(res.json({ message: "Đăng xuất thành công" }))
      .catch((err) => console.log(err));
  }
}
module.exports = new AuthController();
