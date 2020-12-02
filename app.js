const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB 연결 성공'))
  .catch((err) => console.log(err));

const app = express();
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => res.send('Start Boiler-Plate'));

app.listen(app.get('port'), () => {
  console.log('http://localhost:8000');
  console.log(app.get('port'), '번에서 대기중입니다.');
});
