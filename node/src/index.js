const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require('../src/routes/userRoute');


const app = express();
app.use(express.json());
app.use(userRouter);


app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGURL = process.env.MONG;

mongoose.connect(MONGURL).then(() =>{
    console.log('conectado ao banco!!')
    app.listen(PORT, () =>{
        console.log(`Servidor conectado na porta ${PORT}`)
    });
}).catch((error) => console.log(error));

