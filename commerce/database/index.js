const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/commerce';


const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false} );

  
module.exports = db;
