const router = require("express").Router();
const AuthService = require('../services/auth.service');
const authService = new AuthService();
const validateDto = require("../middleware/validate-dto");
const registerSchema = require("../schema/register");
const loginSchema = require("../schema/login");

//REGISTER

router.post('/register', validateDto(registerSchema), async (req, res) => {



    try {
        //ajv validation for the body
        const result = await authService.register(req.body.username, req.body.email, req.body.password);
        res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }

});

//LOGIN
router.post("/login", validateDto(loginSchema), async (req, res) => {

    try {
        //ajv validation for the body
        const result = await authService.login(req.body.username, req.body.password);
        res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
});

module.exports = router;