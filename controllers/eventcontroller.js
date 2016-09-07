const Idea = require('./schemas/ideaScema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ideashare');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB');
});


function home(req, res) {
  Idea.Idea.find(req.query, (err, result) => {
    res.set('Content-Type', 'application/json');
    res.send(result).end();
  });
}

function comment(req, res) {
  console.log('req', req.query)
  const idea = req.query.idea;
  const commentToSave = new Idea.Comment({
    comment: req.query.comment,
    userName: req.query.userName,
  });
  Idea.Idea.findByIdAndUpdate(idea, { $push: { comments: commentToSave } },
    (err) => {
      if (err) { throw err; }
      console.log('comment saved');
    });
}

function submit(req, res) {
  const ideaToSave = new Idea.Idea(req.query);
  ideaToSave.save()
    .then(() => console.log('idea saved'))
    .catch((err) => { throw err; });
}

module.exports = { home, comment, submit };
