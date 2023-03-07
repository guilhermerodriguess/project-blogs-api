const userService = require('../services/userService');

const checkUserAuthorization = (idAuthorized, userId, res) => {
    if (idAuthorized !== userId) {
        res
            .status(401)
            .json({ message: 'Unauthorized user' });
        return false;
    }
    return true;
};

module.exports = async (req, res) => {
    try {
      const { id } = req.params;
      const idAuthorized = req.data.id;
      const { userId } = await userService.getPostById(id);
      
      if (!checkUserAuthorization(idAuthorized, userId, res)) return;

      await userService.deletePost(id);
      return res.status(204).json();
    } catch (e) {
      res.status(404).json({ message: 'Post does not exist' });
    }
  };