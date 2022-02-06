const router = require("express").Router();
const CategoryService = require('../services/cat.service');
const categoryService = new CategoryService();
const validateDto = require("../middleware/validate-dto");
const postCatSchema = require("../schema/postCat");
const getCatSchema = require("../schema/getCat");



router.post('/', validateDto(postCatSchema), async (req, res) => {

    try {
        const result = await categoryService.create(req.body);
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json(e.message);
    }
});

router.get('/', validateDto(getCatSchema), async (req, res) => {

    try {
        const result = await categoryService.get();
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json(e.message);
    }
});


module.exports = router;