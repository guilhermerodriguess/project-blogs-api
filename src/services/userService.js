const { User, Category, BlogPost, PostCategory } = require('../models');

const createUser = ({ email, password, displayName, image }) => 
    User.create({ email, password, displayName, image });

const getByEmail = (email) => User.findOne({ where: { email } });

const getUsers = () => User.findAll({
    attributes: { exclude: ['password'] },
});

const getByUserId = async (id) => {
    const user = await User.findByPk(
        id,
        { attributes: { exclude: ['password'] } },
    );

    return user;
};

const createCategory = ({ name }) => Category.create({ name });

const getIdByCategoryName = (name) => Category.findOne({ where: { name } });

const getCategories = () => Category.findAll();

const post = ({ title, content, categoryIds, userId }) => 
    BlogPost.create({ title, content, categoryIds, userId });

const getPosts = () => BlogPost.findAll();

const getPostsByTitle = (title) => BlogPost.findAll({ where: { title } });

const getCategoriesById = async (id) => {
    const category = await Category.findByPk(id);
    return category;
    };

const postPostCategory = (categoryIds, postId) => {
    categoryIds.forEach((categoryId) => {
        PostCategory.create({ categoryId, postId });
    });
};

module.exports = {
    createUser,
    getByEmail,
    getUsers,
    getByUserId,
    createCategory,
    getIdByCategoryName,
    getCategories,
    post,
    getPosts,
    getPostsByTitle,
    getCategoriesById,
    postPostCategory,
};