const express = require('express');
// const db = require('./database');
const app = express();
const port = 3001;
const Item = require('../database/item.js')
const User = require('../database/user.js')


app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));

// app.get('/users', (req, res)=>{
//   User.selectAll( (req.body), function (err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data); 
//     }
//   });
// })

app.post('/api/user', async (req, res) =>{
  try{
    
   var user = await Item.create([{
     itemName: req.body.itemName},
    {itemDescription: req.body.itemDescription},
    {imageUrl: req.body.imageUrl},{price: req.body.price},
    {quantity: req.body.quantity}
  ])
   console.log(req.body.itemName)

   res.send(user)
  }
  catch(err){
    console.log(err)
  }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });