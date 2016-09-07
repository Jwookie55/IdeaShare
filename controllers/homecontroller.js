angular
  .module('HomeController', ['ngRoute', 'Ideashare.IdeaFactory', 'Ideashare.CommentFactory'])
  .controller('HomeController', HomeController);

function HomeController($scope, IdeaFactory, CommentFactory) {
  $scope.ideas = [];
  function getIdeas() {
    IdeaFactory.fetch().then((res) => $scope.ideas = res.data);
  }
  $scope.postcomment = function () {
    CommentFactory.post('?idea=' + this.idea._id + '&&userName=' + this.user + '&&comment=' + this.comment)
    getIdeas();
  };
  getIdeas();
}
