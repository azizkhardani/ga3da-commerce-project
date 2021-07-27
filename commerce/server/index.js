const express = require('express');
const db = require('../database')
const app = express();
const port = 3001;
const Item = require('../database/item.js')
const User = require('../database/user.js')


app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });