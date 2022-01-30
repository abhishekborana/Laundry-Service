const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const logregRoutes = require("./routes/login");
const cors = require('cors')
// database connection\
app.use(bodyParser.json({limit:"30mb" , extended : 'true'}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:'true'}));
app.use(cors())
app.use(logregRoutes);
const mongoose = require('mongoose')
const CONNECTION_URL = 'mongodb+srv://laundryservice:laundryservice17@cluster0.jg4ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// , {useNewUrlParser : true, useUnifiedTopology : true}
mongoose.connect(CONNECTION_URL)
         .then(() => {
             app.listen(5000,()=>{console.log("listening")})
         })
         .catch((err) => { console.log(err.message,"hvhhhhhhhhhhhhhhhhhhhh")})


// mongoose.connect('mongodb://localhost:27017/laundryservice',()=>{
//     console.log("database connected");
// });


// // cors for allowing front end and back to interact - middleware

// app.listen(5000, () => console.log("Server is started"));