const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt=require('bcrypt');
const User=require('./models/User.js');
require('dotenv').config();
const app=express();
const bcryptSalt=bcrypt.genSaltSync(10);
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:'http://192.168.1.105:5173'
}));
// console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

app.get('/test',(req,res)=>{
    res.json('test ok');
}); 
//luJXpvXo0dFhtROm

app.post('/register', async (req,res)=>{
    const{name,email,password}=req.body;
    const userDoc=  await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    })

    res.json(userDoc);

})

app.listen(4000);