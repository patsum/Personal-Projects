angular.module('test.factories', [])

    .factory('Item', ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/item/:id", {id: "@id"}, 
        {
            "update": {method: "GET"}
        });
    }]);