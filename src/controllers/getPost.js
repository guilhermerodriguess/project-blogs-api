const { userService } = require('../services');

module.exports = async (_req, res) => {
  try {
    const post = await userService.getPost();

    if (!post) throw Error;

    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar posts no banco', error: err.message });
  }
};