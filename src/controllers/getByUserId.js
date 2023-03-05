const userService = require('../services/userService');

module.exports = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getByUserId(id);
  
      if (!user) return res.status(404).json({ message: 'User does not exist' });
  
      return res.status(200).json(user);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  };