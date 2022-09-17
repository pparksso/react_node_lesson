const express = require("express");
const router = express.Router();
const mongoose = require("../db/mongoose");
const userDb = require("../db/user");
const auth = require("../middleware/auth");

router.post("/register", (req, res) => {
  const user = new userDb(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
router.post("/login", (req, res) => {
  userDb.findOne({ email: req.body.email }, (err, result) => {
    if (!result) return res.json({ loginSuccess: false, message: "제공된 이메일에 해당하는 유저가 없습니다." });
    result.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
      result.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token).status(200).json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});
router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: rea.user.image,
  });
});
router.get("/logout", auth, (req, res) => {
  userDb.findOneAndUpdate(
    { _id: req.user._id },
    {
      token: "",
    },
    (err, result) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

module.exports = router;
