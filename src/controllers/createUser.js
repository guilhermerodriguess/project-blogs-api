require('dotenv/config');
const { createToken } = require('../auth/createTokenJWT');
const { userService } = require('../services');

const validateDisplayName = (displayName, res) => {
    if (!displayName || displayName.length < 8) {
        res
            .status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
        return false;
    }

    return true;
};

const validateEmailExist = (email, emailExist, res) => {
    const validateEmail = (emailtest) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(emailtest);
      };

    if (!validateEmail(email)) {
        res
        .status(400)
        .json({ message: '"email" must be a valid email' });
    return false;
    }
    if (emailExist) {
        res
            .status(409)
            .json({ message: 'User already registered' });
        return false;
    }

    return true;
};

const validatePassword = (password, res) => {
    if (!password || password.length < 6) {
        res
            .status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
        return false;
    }

    return true;
};

module.exports = async (req, res) => {
    try {
        const { email, password, displayName, image } = req.body;
        const emailExist = await userService.getByEmail(email);

        if (!validateDisplayName(displayName, res)) return;

        if (!validateEmailExist(email, emailExist, res)) return;

        if (!validatePassword(password, res)) return;

        await userService.createUser({ email, password, displayName, image });

        const { password: _, ...userWithoutPassword } = emailExist.dataValues;

        const token = createToken(userWithoutPassword);

        res.status(201).json({ token });
    } catch (err) {
        return res
            .status(500)
            .json({ message: 'Erro ao salvar usuário no banco', error: err.message });
    }
};