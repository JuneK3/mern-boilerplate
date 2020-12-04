const express = require('express');
const { User } = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => res.send('Start Boiler-Plate'));

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) {
      console.log(err);
      return res.json({ success: false });
    }
    return res.status(200).json({ success: true });
  });
});

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일에 해당하는 유저가 없습니다.',
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
      // 로그인 성공, 유저 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

module.exports = router;
