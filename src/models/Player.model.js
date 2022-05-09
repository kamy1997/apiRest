const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  nom: String,
  prénom: String,
  age: String,
  img: String,
  sexe:String,
  taille:String,
  club:String,
 
  
});

module.exports = mongoose.model('Player', playerSchema);