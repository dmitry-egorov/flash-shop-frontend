var host = "http://flash-shop-api.herokuapp.com/";

var shoppingAreaApp = angular.module('shoppingAreaApp', []);

shoppingAreaApp.controller('ProductsController', function ($scope, $http)
{
    var promise = $http.get(host + "/products");

    promise.success(function (data)
    {
        $scope.products = data.products.map(function(product)
        {
            var imgUrl = "http://cdn.akamai.steamstatic.com/steam/apps/" + product.imgId + "/capsule_616x353.jpg";
            var price = "" + product.price.amount + "$";
            var result =
            {
                img: imgUrl,
                priceText: price
            };

            return result;
        });
    });

    promise.error(function ()
    {
        alert("AJAX failed!");
    });
});