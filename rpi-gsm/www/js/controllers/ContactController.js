'use strict';

app

  .controller('ContactCtrl', ['$scope', '$stateParams', 'ContactsSrv', function ($scope, $stateParams, ContactsSrv) {

    // Init var
    $scope.data = {};

    ContactsSrv.info($stateParams.nickname, function (contact) {
      $scope.data.contact = contact;
    });

  }]);
