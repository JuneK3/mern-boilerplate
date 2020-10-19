const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => res.send('Start Boiler-Plate'));

app.listen(app.get('port'), () => {
  console.log('http://localhost:8000');
  console.log(app.get('port'), '번에서 대기중입니다.');
});
