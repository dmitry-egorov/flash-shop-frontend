var shoppingAreaApp = angular.module('shoppingAreaApp', []);

shoppingAreaApp.controller('ProductsController', function ($scope)
{
  $scope.products =
  [
    {'img': 'http://cdn.akamai.steamstatic.com/steam/apps/211820/capsule_616x353.jpg', 'priceText': '10$'},
    {'img': 'http://cdn.akamai.steamstatic.com/steam/apps/8930/capsule_616x353.jpg',   'priceText': '5$' },
    {'img': 'http://cdn.akamai.steamstatic.com/steam/apps/293740/capsule_616x353.jpg', 'priceText': '10$'},
    {'img': 'http://cdn.akamai.steamstatic.com/steam/apps/115300/capsule_616x353.jpg', 'priceText': '50$'}
  ];
});