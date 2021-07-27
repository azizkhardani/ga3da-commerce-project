const express = require('express');
// const db = require('./database');
const app = express();
const port = 3001;
const Item = require('../database/item.js')
const User = require('../database/user.js')


app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));



// app.get("/Items", (req, res)=>{
//   Item.find({}, (err, data)=>{
//     if (err){
//       res.send(500)
//     }else {
//       res.send(data)
//     }
//   })
// })


// app.post("/Items", (req, res)=>{
//   Item.create((req.body), (err, data)=>{
//     if (err){
//       res.send(500)
//     }else{
//       res.send(data)
//     }
//   })
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });