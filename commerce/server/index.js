const express = require('express');

const Item = require('../database/item.js')
const User = require('../database/user.js')

const app = express();
const port = 3001;

app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));


app.get('/users', (req, res)=>{
  User.find({}, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.post('/signup', function(req, res){
  User.create(
  {name: req.body.username,
   password: req.body.password,
   email: req.body.email
  }, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.post('/api/item', async (req, res) =>{
  try{
    
   var user = await Item.create({
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    quantity: req.body.quantity
   })
   console.log(req.body.itemName)

   res.send(user)
  }
  catch(err){
    console.log(err)
  }
})



app.get("/Items", async (req, res)=>{
  try {
    const findItems = await Item.find({});
    res.send(findItems);
  } catch (err) {
    console.log(err);
  }
})


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