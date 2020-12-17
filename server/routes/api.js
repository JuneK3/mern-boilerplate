const express = require('express');
const { User } = require('../models/user');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.post('/users/register', (req, res) => {
  const user = new User(req.body);
  const existUser = User.findOne({ email: user.email });
  console.log(existUser);
  if (existUser) {
    return res.json({
      registerSuccess: false,
      message: '이메일을 사용중인 유저가 이미 존재합니다.',
    });
  }
  user.save((err, userInfo) => {
    if (err) {
      console.log(err);
      return res.json({
        registerSuccess: false,
        message: '회원가입 중 에러 발생',
      });
    }
    return res.status(200).json({ registerSuccess: true });
  });
});

router.post('/users/login', (req, res) => {
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

router.get('/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err)
      return res.json({
        logoutSuccess: false,
        message: '로그아웃 중 에러 발생',
        err,
      });
    return res.status(200).json({ logoutSuccess: true });
  });
});

router.get('/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

module.exports = router;
