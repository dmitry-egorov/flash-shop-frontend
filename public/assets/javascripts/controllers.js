var shoppingAreaApp = angular.module('shoppingAreaApp', []);

shoppingAreaApp.controller('ProductsController', function ($scope)
{
  $scope.products =
  [
    {'img': 'starbound.jpg',      'priceText': '10$'},
    {'img': 'civilization.jpg',   'priceText': '5$' },
    {'img': 'road_not_taken.jpg', 'priceText': '10$'},
    {'img': 'call_of_duty.jpg',   'priceText': '50$'}
  ];
});