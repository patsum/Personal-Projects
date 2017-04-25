angular.module('item.factories', [])

    .factory('Item', ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/users/:data", {item: "@item"}, 
        {
            "update": {method: "PUT"}
        });
    }]);