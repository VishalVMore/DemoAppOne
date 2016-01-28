    mainApp.factory('SharedService', function($http,REST_URI) {
        alert("I am in service");
         $http.get(REST_URI)
  .then(function (response) {$scope.data = response.data[0];}); 
    });