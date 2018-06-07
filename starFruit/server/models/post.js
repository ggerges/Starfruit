var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  knowledgePoint: String,
  thinkingPoint: String,
  communicationPoint: String,
  applicationPoint: String,
  discussions: Array
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;