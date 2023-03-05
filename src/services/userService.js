const { User, Category } = require('../models');

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

module.exports = {
    createUser,
    getByEmail,
    getUsers,
    getByUserId,
    createCategory,
    getIdByCategoryName,
    getCategories,
};