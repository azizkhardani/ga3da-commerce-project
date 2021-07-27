const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/commerce';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected !!')
} );
const db = mongoose.Connection;

module.exports = db;