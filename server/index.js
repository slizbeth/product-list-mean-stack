const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/product'));

app.listen(4000, () => {
    console.log("The server is running");
})