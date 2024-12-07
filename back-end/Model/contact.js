const mongoose = require('mongoose');
const { Schema } = mongoose;
//// creating a Schema ////
const contactSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  msg:String,
  date: { type: Date, default: Date.now }
});
///// creating a model /////
const Contact = mongoose.model('contact', contactSchema);
module.exports=Contact;