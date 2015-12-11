'use strict';

app

  .factory('SMSSrv',
    ['$http', 'AppConfig',
      function ($http, AppConfig) {

        function send(phone, message, callback) {

          if(message.length <= 140) {

            $http.post(AppConfig.api + '/sms/send')
              .success(function (response) {
                callback(response);
              });

          } else {

            callback({errorMessage: "Message trop long, 140 caractères maximum."});

          }
        }

        return {
          send: send
        }

      }
    ]
  );
