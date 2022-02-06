const Category = require("../models/Category");

class CategoryService {
    constructor() {

    }
    async create(body) {
        const newCat = new Category(body);
        try {
            const savedCat = await newCat.save();
            return savedCat;
        } catch (e) {
            throw e;
        }
    }
    async get() {
        try {
            const cats = await Category.find();
            return cats;
        } catch (e) {
            throw e;
        }
    }
}


module.exports = CategoryService;