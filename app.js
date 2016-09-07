const App = angular
  .module('ideaApp', ['ngRoute', 'HomeController', 'SubmitController']);

App.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController',
    })
    .when('/submit', {
      templateUrl: './partials/submit.html',
      controller: 'SubmitController',
    });
}
