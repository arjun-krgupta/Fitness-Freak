const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/data_store')
.then(()=>{
    console.log("Connected to database")
})
.catch(()=>console.log("Not connected to database"))