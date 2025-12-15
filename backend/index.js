const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
require('./Models/ConnectDB');

const PORT = process.env.PORT || 3000;
const Route = require('./Routes/Routes')

app.get('/', (req, res) => {
    res.send('I am Live ')
});

app.use(bodyPaser.json());
app.use(cors());
app.use('/auth', Route);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});