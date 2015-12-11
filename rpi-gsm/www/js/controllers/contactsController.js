'use strict';

app

  .controller('ContactsCtrl', ['$scope', 'ContactsSrv', function ($scope, ContactsSrv) {

    // Init var
    $scope.data = {};

    ContactsSrv.list(function (contacts) {
      $scope.data.contacts = contacts;
    })

  }]);
