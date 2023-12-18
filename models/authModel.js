const mongoose = require('mongoose');
const AuthScheema = mongoose.Schema({
    email: {
        type: String,
        require: (true , "Email must be required")
    },
    password: {
        type: String,
        require: (true  , "Password must be required")
    },
    contactNo: {
        type: Number,
        require: (true , "Contact must be required")
    },
    userType:{
        type : String,
        enum: ["admin", "user"],
    },
    firstName:{
        type:String,
        require: (true , "FirstName must be required")

    },
    lastName:{
        type:String,
        require: (true , "LastName must be required")

    },




})

const AuthModel = mongoose.model('/users', AuthScheema)

module.exports = AuthModel