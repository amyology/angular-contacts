(function(){
  "use strict";

  var app = angular.module('app', []);

  app.controller('contactsCtrl', ['$scope', '$http', function($scope, $http){

    $scope.contactSelected = false;

    $http.get('../contacts.json').then(function(response){
      $scope.contacts = response.data;

      angular.forEach($scope.contacts, function(contact) {
        contact.visible = true;
      });

      $scope.setSelected = function(index){
        $scope.contactSelected = true;
        $scope.selectedContact = $scope.contacts[index];
      };

      $scope.showFavorites = function(){
        angular.forEach($scope.contacts, function(contact) {
          if (contact.favorite) {
            contact.visible = true;
          }
          else {
            contact.visible = false;
          }
        });
      };

      $scope.showAll = function(){
        angular.forEach($scope.contacts, function(contact) {
          contact.visible = true;
        });
      };

    });

  }]);
})();