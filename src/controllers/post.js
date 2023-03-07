const { userService } = require('../services');

const missArguments = (body, res) => {
    const { title, content, categoryIds } = body;
    if (!title || !content || !categoryIds) {
        res
            .status(400)
            .json({ message: 'Some required fields are missing' });
        return false;
    }
    return true;
};

const checkCategory = (id1, id2, res) => {
    if (!id1 || !id2) {
        res
            .status(400)
            .json({ message: 'one or more "categoryIds" not found' });
        return false;
    }
    return true;
    };

module.exports = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const userId = req.data.emailId;

        if (!missArguments(req.body, res)) return;
        
        const id1 = await userService.getCategoriesById(categoryIds[0]);
        const id2 = await userService.getCategoriesById(categoryIds[1]);
        if (!checkCategory(id1, id2, res)) return;

        await userService.post({ title, content, categoryIds, userId });
        const resultPost = await userService.getPostsByTitle(title);
        const postId = await resultPost[0].dataValues.id;
        await userService.postPostCategory(categoryIds, postId);

        res.status(201).json(resultPost[0]);
    } catch (err) {
        return res
            .status(500)
            .json({ message: 'Erro ao salvar usuário no banco', error: err.message });
    }
};