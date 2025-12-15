// require('dotenv').config();
const mongoose = require('mongoose');
const mongo_url = process.env.MONGOODB_URL;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Cannot to MongoDB', error);
    })