const userService = require('../services/userService');

const verifyFields = (title, content, res) => {
    if (!title || !content) {
        res
            .status(400)
            .json({ message: 'Some required fields are missing' });
        return false;
    }
    return true;
};

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
      const { title, content } = req.body;
      const idAuthorized = req.data.id;
      const { userId } = await userService.getPostById(id);

      if (!verifyFields(title, content, res)) return;
      if (!checkUserAuthorization(idAuthorized, userId, res)) return;
    
      await userService.putPostById(id, title, content);
      const changedPost = await userService.getPostById(id);
      return res.status(200).json(changedPost);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  };