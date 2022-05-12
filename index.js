const express = require('express');
const mongoose =require('mongoose');
const playerRoutes = require('./src/routes/api');
const app=express();
const cors= require("cors");


require("dotenv").config();
mongoose.connect(process.env.DB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(cors());
app.use('/api/player',playerRoutes);
 app.get('/api',(req,res)=> res.send('api working'));
 

 app.listen(process.env.PORT , function(){
     console.log('serveur is listenning');
 })