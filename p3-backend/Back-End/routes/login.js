const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { json } = require("body-parser");
const secret = "GenerateToken"

router.post("/register", body("email"), body("password"), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        bcrypt.hash(password, 10, async function (err, hash) {
            console.log(name, email, password,hash);
            try {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        status: "failed",
                        message: "Invalid data"
                    })
                } else {
                    req.body.password = hash
                    const user = await User.create(req.body);
                    return res.status(200).json({
                        status: "success",
                        data: user
                    })
                }
            } catch (e) {
                res.status(400).json({
                    status: "failed",
                    message: e.message
                })
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

});

router.post("/login", async (req, res) => {
        try{
        const user = await User.findOne({ email : req.body.email });
        console.log(user);
        // console.log(password);
        bcrypt.compare(req.body.password, user.password, async function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    status: "failed",
                    message: "Invalid credentials"
                })
            } else {
                if(result){
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user._id
                    }, secret);
                    return res.status(200).json({status: "success", token: token});
                }else{
                    console.log(result);
                    return res.status(400).json({
                        status: "failed",
                        message: "Invalid credentials"
                    })
                }
            }
        });
    } 
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
        
    }
});


module.exports = router;