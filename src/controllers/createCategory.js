require('dotenv/config');
const { userService } = require('../services');

module.exports = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: '"name" is required' });
        }
        await userService.createCategory({ name });

        const response = await userService.getIdByCategoryName(name);
        res.status(201).json(response);
    } catch (err) {
        return res
            .status(500)
            .json({ message: 'Erro ao salvar categoria', error: err.message });
    }
};