/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        timestamps: false,
        underscored: true,
    });
    return Users
}