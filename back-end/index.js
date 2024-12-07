const express = require('express');
const app = express();
const port = 4000;
/// token /// 
var jwt = require('jsonwebtoken');
var jwtkey = "Mern"
/// connect frontend to backend ///
const cors = require('cors');
app.use(cors());
// encrypt the password ///
const bcrypt = require('bcrypt')
// to Receive data from body in json ////
app.use(express.json())
require('./db/connection');
// connect the models ///
const Signup = require('./Model/signup')
const Contact = require('./Model/contact');
// const { sanitizeFilter } = require('mongoose');

//// insert Api for signup////
app.post('/signup', async (req, res) => {
    const { name, email, mobile, address, password, cnfpassword } = req.body
    if (!name == "" && !email == "" && !mobile == "" && !address == "" && !password == "" && !cnfpassword == "") {
        const preUser = await Signup.findOne({ email })
        if (preUser) {
            res.send({ message: "Already Registered" })
        }
        else {
            const salt = 10;
            const passHash = await bcrypt.hash(password, salt)
            const cnfpassHash = await bcrypt.hash(cnfpassword, salt)
            const signup = await new Signup({ name, email, mobile, address, password: passHash, cnfpassword: cnfpassHash })
            let result = await signup.save();
            res.send(result);
        }
    }
    else {
        res.send({ message: "All field is required" });
    }
})

//// fetch Api for signup ////
app.get('/fetch', async (req, res) => {
    const list = await Signup.find()
    if (list != "") {
        res.send(list)
    }
    else {
        res.send({ message: "No Record Found" })
    }
})
/// delete Api for signup ///
app.delete('/delete/:id', async (req, res) => {
    let deleteData = await Signup.deleteOne({ _id: req.params.id })
    res.send(deleteData)
})

/// getDetails of user ////
app.get('/getDetail/:id', async (req, res) => {
    const getData = await Signup.findById({ _id: req.params.id })
    res.send(getData)
})

/// Update Api ///
app.put('/update/:id', async (req, res) => {
    const { name, email, mobile, address, password, cnfpassword } = req.body
    let salt = 10;
    let passHash = await bcrypt.hash(password, salt);
    let cnfpassHash = await bcrypt.hash(cnfpassword, salt);
    let result = await Signup.updateOne({ _id: req.params.id }, { $set: { name, email, mobile, address, password: passHash, cnfpassword: cnfpassHash } })
    res.send(result)
})

/// Login Api ///
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = await Signup.findOne({ email })
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password)
                if ((user.email === email) && isMatch) {
                    ////////generate token////////
                    const token = jwt.sign({ user }, jwtkey, { expiresIn: "1h" })
                    res.send({ "message": "Login Success", user, token })
                }
                else {
                    res.send({ message: "Email or Password is not valid" })
                }
            }
            else {
                res.send({ message: "You are not a Registered User" })
            }
        }
        else {
            res.send({ message: "All fields are required" })
        }
    }
    catch (e) {
        console.log(e)
        res.send({ message: "Unable to login" })
    }
})

/// insert api for contact us ///
app.post('/contact', async (req, res) => {
    const { name, email, msg } = req.body
    if (!name == "" && !email == "" && !msg == "") {
        const preUser = await Contact.findOne({ email })
        if (preUser) {
            res.send({ message: "Already Registered" })
        }
        else {
            const contact = await new Contact({ name, email, msg })
            let result = await contact.save();
            res.send(result)
        }
    }
    else {
        res.send({ message: "All field is required" })
    }
})
//// fetch Api for contact ////
app.get('/fetch', async (req, res) => {
    const list = await Contact.find()
    if (list != "") {
        res.send(list)
    }
    else {
        res.send({ message: "No Record Found" })
    }


})
app.listen(port, () => {
    console.log(`App is runnning on port ${port} `)
    console.log(`http://localhost:${port}`)
})