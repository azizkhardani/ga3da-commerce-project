const express = require('express');
const db = require('../database/index.js')
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

app.get('/items', (req, res)=>{
  Item.find({}, function(err, result){
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

app.get('/items/:type', (req, res)=>{
  Item.find({itemType: req.params.type}, (err, result)=>{
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
    itemType: req.body.itemType,
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


app.post('/api/user', async (req, res) =>{
  try{
    
   var user = await User.create({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image
    
   })

   res.send(user)
  }
  catch(err){
    console.log(err)
  }
})

// app.get("/Items/:type", async (req, res)=>{
// const type= req.params.type
//   try {
//     const findType = await Item.findOne({itemType: type});
//     res.send(findType);
//   } catch (err) {
//     console.log(err);
//   }
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });