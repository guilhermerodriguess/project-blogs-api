const { createToken } = require('../auth/createTokenJWT');
const { userService } = require('../services');

const validateBody = (body, res) => {
    const { email, password } = body;

    if (!email || !password) {
        res
            .status(400)
            .json({ message: 'Some required fields are missing' });
        return false;
    }

    return true;
};

const validateEmailOrPassword = (email, password, res) => {
    if (!email || email.password !== password) {
        res
            .status(400)
            .json({ message: 'Invalid fields' });
        return false;
    }

    return true;
};

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validateBody(req.body, res)) return;

        const emailLogin = await userService.getByEmail(email);

        if (!validateEmailOrPassword(emailLogin, password, res)) return;

        const { password: _, ...userWithoutPassword } = emailLogin.dataValues;

        const token = createToken(userWithoutPassword);

        res.status(200).json({ token });
    } catch (err) {
        return res
            .status(500)
            .json({ message: 'Erro interno', error: err.message });
    }
};