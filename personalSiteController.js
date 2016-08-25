angular.module('personalSite', [])

// show 1 = landing/picture
//show 2 = alternative??
// show 3 = blog
// show 4 = resume
// show 5 = recent projects

.controller('personalSiteController', function($scope) {
  console.log("controller working");
  $scope.show = 1;

  $scope.showHome = function(){
    console.log("showHome function called")
    $scope.show = 1;
    $(".home").fadeIn(500);
  }
  $scope.showBlog = function(){
    console.log("showBlog function called")
    $scope.show = 3;
  }
  $scope.showResume = function(){
    console.log("showResume function called")
    $scope.show = 4;
  }
  $scope.showProjects = function(){
    console.log("showProjects function called")
    $scope.show = 5;
  }
});
