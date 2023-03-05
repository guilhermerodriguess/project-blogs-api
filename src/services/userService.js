const { User } = require('../models');

const createUser = ({ email, password, displayName, image }) => 
    User.create({ email, password, displayName, image });

const getByEmail = (email) => User.findOne({ where: { email } });

const getUsers = () => User.findAll({
    attributes: { exclude: ['password'] },
});

const getByUserId = async (id) => {
    const user = await User.findByPk(id);

    return user;
};

module.exports = {
    createUser,
    getByEmail,
    getUsers,
    getByUserId,
};