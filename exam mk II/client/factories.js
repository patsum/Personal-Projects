angular.module('Final.factories', [])

    .factory('Book', ['$resource', function($resource) {
        console.log('book factory working');
        return $resource("http://localhost:3000/api/books/:id", {id: "@id"});
    }]);
    //  .factory('Books', ['$resource', function($resource) {
    //      console.log('resource books');
    //     return $resource("http://localhost:3000/api/books/", 
    //     {
    //         "update": {method: "GET"}
    //     });
    // }]);