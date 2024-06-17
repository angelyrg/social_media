const { DataTypes, Model } = require('sequelize')

class Comment extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'comments',
            modelName: 'Comment',
            timestamps: true,
        }
    }
}

const CommentSchema = {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'posts',
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
}

module.exports = { Comment, CommentSchema }
