angular.module('personalSite', [])

// show 1 = landing/picture
//show 2 = alternative??
// show 3 = blog
// show 4 = resume
// show 5 = recent projects

.controller('personalSiteController', function($scope) {
  $scope.show = 1;

  $scope.showHome = function(){
    $scope.show = 1;
  }
  $scope.showBlog = function(){
    $scope.show = 3;
    $(".blog").fadeIn(500);
  }
  $scope.showResume = function(){
    $scope.show = 4;
    $(".resume").fadeIn(500);
  }
  $scope.showProjects = function(){
    $scope.show = 5;
    $(".projects").fadeIn(500);
  }
});
