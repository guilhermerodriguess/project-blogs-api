const createUser = require('./controllers/createUser');
const login = require('./controllers/login');
const getUsers = require('./controllers/getUser');
const getByUserId = require('./controllers/getByUserId');
const createCategory = require('./controllers/createCategory');
const getCategories = require('./controllers/getCategories');
const post = require('./controllers/post');
const getPost = require('./controllers/getPost');
const getPostById = require('./controllers/getPostById');
const putPostById = require('./controllers/putPostById');
const deletePost = require('./controllers/deletePost');
const deleteMe = require('./controllers/deleteMe');
const getPostByTerm = require('./controllers/getPostByTerm');

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
    putPostById,
    deletePost,
    deleteMe,
    getPostByTerm,
};