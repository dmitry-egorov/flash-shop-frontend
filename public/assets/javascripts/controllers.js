var host = "http://intense-coast-7869.herokuapp.com/";

var shoppingAreaApp = angular.module('shoppingAreaApp', []);

shoppingAreaApp.controller('ProductsController', function ($scope, $http)
{
    var responsePromise = $http.get(host + "products");

    responsePromise.success(function (data) {
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

    responsePromise.error(function () {
        alert("AJAX failed!");
    });
});