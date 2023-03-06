module.exports = (sequelize, _DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {},
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      },
    );

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId', 
          otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_posts',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
      };
  
    return PostCategory;
  };