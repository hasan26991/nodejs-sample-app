const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
    constructor() {

    }
    async login(inputUsername, password) {

        try {
            const user = await User.findOne({ username: inputUsername });
            if (!user) {
                throw new Error('Wrong User');
            }
            const validated = await bcrypt.compare(password, user.password);
            if (!validated) {
                throw new Error('Wrong Password');
            }
            const accessToken = jwt.sign({ username: user.username }, "mySecretKey");
            delete user._doc.password
            user._doc.accessToken = accessToken;
            return user._doc

        } catch (e) {
            throw e;
        }


    }


    async register(inputUsername, inputEmail, inputPassword) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(inputPassword, salt);
            const newUser = new User({
                username: inputUsername,
                email: inputEmail,
                password: hashedPass,
            });


            const user = await newUser.save();
            return user._doc;
        }

        catch (e) {
            throw e;
        }
    }

    logout() {

    }
}

module.exports = AuthService;