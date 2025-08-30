const dotenv = require('dotenv');
dotenv.config();

const express= require('express');

// we also need to setup cors. so:-
const cors = require('cors');
const app = express();

app.use(cors()); // for now we will be accepting requests from all the websites, but this is for the development only.
//When we will go in production-> jo hume domain milega, then sirf isi domain se requests accept karenge hum log, uske alava sari chizo ko hum block karenge.

app.get('/', (req,res) =>{
    res.send('Hello World!');
});



module.exports =app;

