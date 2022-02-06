const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {

    }
    async update(body, userId) {
        if (body.userId === userId) {
            if (body.password) {
                const salt = await bcrypt.genSalt(10);
                body.password = await bcrypt.hash(body.password, salt);
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(userId, {
                    $set: body,
                }, { new: true })
                return updatedUser;
            }

            catch (e) {
                throw e;
            }

        } else {
            throw new Error("you can update only your account");
        }
    }

    async delete(userId, paramsId) {
        if (userId === paramsId) {
            try {
                const user = await User.findById(paramsId);
                try {
                    await Post.deleteMany({ username: user.username });
                    await User.findByIdAndDelete(paramsId);
                    return ("user has been deleted");
                }

                catch (e) {
                    throw e;
                }
            } catch (err) {
                throw new Error("user not found")
            }
        } else {
            throw new Error("you can delete only your account")
        }
    }
    async get(paramsId) {
        try {
            const user = await User.findById(paramsId);
            const { password, ...others } = user._doc;
            return others;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = UserService;