const router = require("express").Router();

const AuthService = require('../services/auth.service');


const authService = new AuthService();

//REGISTER
router.post('/register', async (req, res) => {

  

    return;

    try {
         const salt = await bcrypt.genSalt(10);
         const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });


        const user = await newUser.save();
        res.status(200).json(user);
    }

    catch (err) {
        res.status(500).json(err);
    }

});




//LOGIN
router.post("/login", async (req, res) => {

    try{
        //ajv validation for the body
        const result = await authService.login(req.body.username,req.body.password);
        res.status(200).send(result);
    }
    catch(e){
        console.log(e);
        res.status(400).send(e.message);
    }

});

module.exports = router;