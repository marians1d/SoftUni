const Post = require('../models/Post');
const { postViewModel } = require('../util/mappers');

async function createPost(post) {
    const result = new Post(post);

    await result.save();

    return result
};

async function getAllPosts() {
    const posts = await Post.find({})

    return posts.map(postViewModel);
}

async function getPostsByAuthor(authorId) {
    const posts = await Post.find({author: authorId}).populate('author', 'firstName lastName');

    return posts.map(postViewModel);
}

async function getPostById(id) {
    const post = await Post.findById(id)
        .populate('author', 'firstName lastName')
        .populate('votes', 'email');

    return postViewModel(post);
}

async function updatePost(id, post) {
    const existing = await Post.findById(id);

    existing.title = post.title;
    existing.keyword = post.keyword;
    existing.location = post.location;
    existing.date = post.date;
    existing.image = post.image;
    existing.description = post.description;

    await existing.save();
}

async function deletePost(id) {
    return Post.findByIdAndDelete(id);
}

async function vote(postId, userId, value) {
    const post = await Post.findById(postId);

    post.votes.push(userId);

    if (value) {
        post.rating++;
    } else {
        post.rating--;
    }

    await post.save();
}



module.exports = {
    createPost,
    getAllPosts,
    getPostsByAuthor,
    getPostById,
    updatePost,
    deletePost,
    vote
}