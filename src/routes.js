const createUser = require('./controllers/createUser');
const login = require('./controllers/login');
const getUsers = require('./controllers/getUser');
const getByUserId = require('./controllers/getByUserId');

module.exports = {
    createUser,
    login,
    getUsers,
    getByUserId,
};