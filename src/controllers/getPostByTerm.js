const userService = require('../services/userService');

module.exports = async (req, res) => {
    try {
        const result = await userService.getPostByTerm(req.query.q);
        return res.status(200).json(result);
    } catch (error) {
        res
            .status(500)
            .json({ message: 'Erro ao buscar termo', error: error.message });
    }
};