const { Post } = require('../models');

const postData = [
    {
        title: "ARE IPHONES SERCERTY LISTING TO US- THE TRUTH",
        post_content: "over the course of last view weeks a VERY creditable unamed source confirm this",
        user_id: 3
    },
    {
        title: "Why Robots will soon take over",
        post_content: "it is true",
        user_id: 1
    },
    
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;