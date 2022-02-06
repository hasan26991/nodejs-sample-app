const User = require("../models/User");
const Post = require("../models/Post");

class PostService {
    constructor() {

    }
    async create(post) {
        const newPost = new Post(post);
        try {
            const savedPost = await newPost.save();
            return savedPost;
        } catch (e) {
            throw e;
        }
    }
    async update(body, postId) {
        try {
            const post = await Post.findById(postId);

            if (post.username === body.username) {
                try {
                    const updatedPost = await Post.findByIdAndUpdate(postId, {
                        $set: body
                    }, { new: true });
                    return updatedPost;
                } catch (e) {
                    throw e;
                }
            } else {
                return "you can only update your post";
            }
        } catch (e) {
            throw e;
        }
    }
    async delete(username, postId) {
        try {
            const post = await Post.findById(postId);

            if (post.username === username) {
                try {
                    await post.delete();
                    return "post has been deleted";
                } catch (e) {
                    throw e;
                }
            } else {
                throw new Error("you can only delete your post");

            }
        } catch (e) {
            throw e;
        }
    }
    async get(postId) {
        try {
            const post = await Post.findById(postId);
            return post;
        } catch (e) {
            throw e;
        }
    }
    async getAll(username, catName) {
        try {
            let posts;
            if (username) {
                posts = await Post.find({ username });
            } else if (catName) {
                posts = await Post.find({
                    categories: {
                        $in: [catName]
                    }
                })
            } else {
                posts = await Post.find();
            }
            return posts;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = PostService;