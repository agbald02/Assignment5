(function() {
  var app = angular.module('gemStore', ['store-directives']);

app.controller('StoreController', ['$scope','$http', function($scope,$http){
  var $scope = this;
  $scope.products = [];

  $http.get('/store-products.json').success(function(data){
    $scope.products = data;
  });
}]);
})();

