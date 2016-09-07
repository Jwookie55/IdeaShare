angular
  .module('SubmitController', ['ngRoute', 'Ideashare.IdeaFactory'])
  .controller('SubmitController', Submitcontroller);

function Submitcontroller($scope, IdeaFactory) {
  $scope.user = '';
  $scope.project = '';
  $scope.email = '';
  $scope.newidea = '';
  $scope.postIdea = function () {
    IdeaFactory.post('?projName=' + $scope.project + '&&userName=' + $scope.user + '&&email=' + $scope.email + '&&idea=' + $scope.newidea);
      $scope.user = '';
      $scope.project = '';
      $scope.email = '';
      $scope.newidea = '';
  };
}
