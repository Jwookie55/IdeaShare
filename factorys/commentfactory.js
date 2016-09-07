angular
	.module('Ideashare.CommentFactory', [])
  .factory('CommentFactory', commentFactory)

function commentFactory($http) {
  const comments = [];
  comments.post = function (data) {
    return $http.post('http://www.localhost:3000/comment' + data);
  };
  return comments;
}
