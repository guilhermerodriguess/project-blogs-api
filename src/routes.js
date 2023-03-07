const createUser = require('./controllers/createUser');
const login = require('./controllers/login');
const getUsers = require('./controllers/getUser');
const getByUserId = require('./controllers/getByUserId');
const createCategory = require('./controllers/createCategory');
const getCategories = require('./controllers/getCategories');
const post = require('./controllers/post');
const getPost = require('./controllers/getPost');
const getPostById = require('./controllers/getPostById');

module.exports = {
    createUser,
    login,
    getUsers,
    getByUserId,
    createCategory,
    getCategories,
    post,
    getPost,
    getPostById,
};