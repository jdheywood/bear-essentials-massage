var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Document schema in MongoDB
var PostSchema = new Schema({
  title: String,
  order: Number,
  author: String,
  created: Date,
  body: String
});

// We can now call mongoose.model('Post') in our code
var Post = mongoose.model('Post', PostSchema);

// This will allow us to do this if we want:
// var Post = require("./models/post")
module.exports = Post;
