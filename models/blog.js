const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const blogSchema = new Scheme({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// model is how you interract with a collection using models
// pluralizes 'Blog' to find the collection in our DB.
// storing blogSchema in the Blogs collection.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;