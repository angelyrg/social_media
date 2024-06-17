const { DataTypes, Model } = require('sequelize')

class Post extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'posts',
            modelName: 'Post',
            timestamps: true,
        }
    }
}

const PostSchema = {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
    },
}

module.exports = { Post, PostSchema }
