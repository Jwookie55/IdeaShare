angular
	.module('Ideashare.IdeaFactory', [])
	.factory('IdeaFactory', ideaFactory)

function ideaFactory($http) {
  const ideas = [];
  ideas.fetch = function () {
    return $http.get('http://www.localhost:3000/home');
  };
  ideas.post = function (data) {
    return $http.post('http://www.localhost:3000/submit' + data);
  };
  return ideas;
}


