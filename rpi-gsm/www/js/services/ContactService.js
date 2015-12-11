'use strict';

app

  .factory('ContactsSrv',
    ['$http', 'AppConfig',
      function ($http, AppConfig) {

        function list(callback) {
          $http.get(AppConfig.api + '/contacts')
            .success(function (response) {
              callback(response);
            });
        }

        function info(nickname, callback) {
          $http.get(AppConfig.api + '/contact/' + nickname)
            .success(function (response) {
              callback(response);
            });
        }

        return {
          list: list,
          info: info
        }

      }
    ]
  );
