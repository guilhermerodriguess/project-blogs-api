const { userService } = require('../services');

module.exports = async (req, res) => {
    try {
        const { id } = req.data;
        userService.deleteMe(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
};