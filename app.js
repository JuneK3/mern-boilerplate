const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connect = require('./models');
const { User } = require('./models/user');

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev'
  ),
});
connect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => res.send('Start Boiler-Plate'));
app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.json({ success: false });
    return res.status(200).json({ success: true });
  });
});

app.listen(app.get('port'), () => {
  console.log('http://localhost:8000');
  console.log(app.get('port'), '번에서 대기중입니다.');
});
