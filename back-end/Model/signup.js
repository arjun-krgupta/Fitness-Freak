const mongoose = require('mongoose');
const { Schema } = mongoose;

//// creating a Schema ////
const signupSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  mobile: Number,
  address: String,
  password:String,
  cnfpassword:String,
  date: { type: Date, default: Date.now }
});
///// creating a model /////
const Signup = mongoose.model('signup', signupSchema);
module.exports=Signup;