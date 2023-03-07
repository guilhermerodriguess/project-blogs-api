const userService = require('../services/userService');

module.exports = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await userService.getPostById(id);
  
      if (!post) return res.status(404).json({ message: 'Post does not exist' });
  
      return res.status(200).json(post);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  };