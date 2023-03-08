const { Op } = require('sequelize');
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

const getPost = async () => BlogPost.findAll({
    include: [{ 
        model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' }],
});

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

const getPostById = async (id) => {
    const postById = await BlogPost.findOne({
        where: { id },
        include: [{ 
            model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' }],
    });
    return postById;
  };

const putPostById = async (id, title, content) => {
    const [updatedPost] = await BlogPost.update(
        { title, content },
        { where: { id } },
    );
    return updatedPost;
};

const deletePost = async (id) => {
    const postDelete = await BlogPost.destroy({ where: { id } });
    return postDelete;
};

const deleteMe = async (id) => {
    const userDelete = await User.destroy({ where: { id } });
    return userDelete;
};

const getPostByTerm = async (searchTerm) => {
    const search = await BlogPost.findAll({
        where: {
            [Op.or]: [{ title: {
                        [Op.like]: `%${searchTerm}%`,
                    },
                },
                {
                    content: {
                        [Op.like]: `%${searchTerm}%`,
                    },
                },
            ],
        },
        include: [{ 
            model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' }],
    });
    return search;
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
    getPost,
    getPostsByTitle,
    getCategoriesById,
    postPostCategory,
    getPostById,
    putPostById,
    deletePost,
    deleteMe,
    getPostByTerm,
};