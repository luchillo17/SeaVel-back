const express = require('express');
const { resolve } = require('path');
const { SeaVel } = require('./SeaVel.js');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const { lon, lat, city, date, freq } = req.params;

  return res.json(
    SeaVel({
      lon,
      lat,
      city,
      date,
      freq
    })
  );
});

app.use(express.static(resolve(__dirname, 'img')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
