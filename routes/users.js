const router = require("express").Router();
const UserService = require("../services/user.service");
const userService = new UserService();

const validateDto = require("../middleware/validate-dto");
const updateUserSchema = require("../schema/updateUser");
const deleteUserSchema = require("../schema/deleteUser");



//UPDATE
router.put('/:id', validateDto(updateUserSchema), async (req, res) => {
    const userId = req.params.id;
    try {
        const result = await userService.update(req.body, userId);
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json(e.message);
    }

});

//DELETE
router.delete('/:id', validateDto(deleteUserSchema), async (req, res) => {
    const paramsId = req.params.id;
    try {
        const result = await userService.delete(req.body.userId, paramsId);
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json(e.message);
    }

});

//GET USER
router.get("/:id", async (req, res) => {
    const paramsId = req.params.id;

    try {
        const result = await userService.get(paramsId);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json(e.message);
    }
})



module.exports = router;