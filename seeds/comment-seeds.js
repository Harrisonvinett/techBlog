const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Intresting"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I totally believe it!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "It all makes sendes!!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;