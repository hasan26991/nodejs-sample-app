const router = require("express").Router();
const PostService = require('../services/post.service');
const postService = new PostService();
const validateDto = require("../middleware/validate-dto");
const createPostSchema = require("../schema/createPost");
const updatePostSchema = require("../schema/updatePost");
const deletePostSchema = require("../schema/deletePost");



//CREATE POST
router.post('/', validateDto(createPostSchema), async (req, res) => {
    try {
        const result = await postService.create(req.body);
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message);
    }
});

//UPDATE POST
router.put('/:id', validateDto(updatePostSchema), async (req, res) => {
    const postId = req.params.id;
    try {
        const result = await postService.update(req.body, postId)
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }

});

//DELETE POST
router.delete('/:id', validateDto(deletePostSchema), async (req, res) => {

    const postId = req.params.id;
    try {
        const result = await postService.delete(req.body.username, postId);
        res.status(200).json(result)
    } catch (e) {
        res.status(400).json(e.message);
    }
});

//GET POST
router.get("/:id", async (req, res) => {
    const postId = req.params.id;
    try {
        const result = await postService.get(postId);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json(e.message);
    }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        const result = await postService.getAll(username, catName);
        res.status(200).json(result);

    } catch (e) {
        res.status(500).json(e.message);
    }
});



module.exports = router;