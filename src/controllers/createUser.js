const { userService } = require('../services');

module.exports = async (req, res) => {
    try {
        const { email, password, displayName, image } = req.body;
        const user = await userService.createUser({ email, password, displayName, image });

        if (!user) throw Error;

        res.status(201).json({ message: 'Novo usuário criado com sucesso', user: email });
    } catch (err) {
        res
            .status(500)
            .json({ message: 'Erro ao salvar usuário no banco', error: err.message });
    }
};