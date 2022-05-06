const express = require("express");
const router = express.Router();
const User = require("../Models/users");

const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
  verifyUser,
} = require("../authenticate");
const passport = require("passport");

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  if (!req.body.name) {
    res.statusCode = 500;
    res.send({
      name: "No User found",
      message: "The first name is required",
    });
  } else {
    User.register(
      new User({
        username: req.body.name,
        name: req.body.name,
        phone: req.body.phone,
      }),
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          const token = getToken({ _id: user._id });
          const refreshToken = getRefreshToken({ _id: user._id });
          user.refreshToken.push({ refreshToken });
          user.save((err, user) => {
            if (err) {
              res.statusCode = 500;
              res.send(err);
            } else {
              res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
              res.send({ success: true, token });
            }
          });
        }
      }
    );
  }
});
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const token = getToken({ _id: req.user._id });

  const refreshToken = getRefreshToken({ _id: req.user._id });

  User.findById(req.user._id).then(
    (user) => {
      user.refreshToken.push({ refreshToken });
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
          res.send({ success: true, token });
        }
      });
    },
    (err) => next(err)
  );
});
router.get("/details", verifyUser, (req, res, next) => {
  res.send(req.user);
});
router.get("/secret", (req, res) => {
  console.log(req.cookies);
  res.send({
    secret: "production not set",
  });
});

module.exports = router;
