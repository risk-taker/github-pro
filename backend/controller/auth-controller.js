const Joi = require("joi")
const bcrypt = require("bcrypt")
const User = require('../models/users');
const { request } = require("express");

class AuthController {
    async signup(req, res) {
        const { email, password, confirm_password } = req.body;

        if (!email || !password || !confirm_password) {
            res.json({ msg: "All fields are required!" })
        }

        const exist = await User.exists({ email });
        if (exist) {
            res.json({ msg: "Already exist in the database" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = User.create({
            email,
            password: hashedPassword
        })
        console.log(user);

        res.json({ msg: "successfully registered!" });

    }

    async login(req, res) {
        // CHECKLIST
        //     validate the request
        //     correct password

        const { email, password } = req.body;

        if (!email || !password) {
            res.json({ msg: "All field are required!" })
        }
        console.log(email)
        const hashedPassword = await bcrypt.hash(password, 10)
        let user
        try {
            user = await User.findOne({ email: req.body.email })
            console.log("i am in try block")
        } catch (err) {
            console.log(err)
        }
        console.log(user);
        res.json(user)
    }

}

module.exports = new AuthController