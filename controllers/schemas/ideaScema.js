const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userName: { type: String, required: true },
  comment: { type: String, required: true },
});

const ideaSchema = new Schema({
  projName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  idea: { type: String, required: true },
  comments: [commentSchema],
});

const Idea = mongoose.model('Idea', ideaSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Idea, Comment };
