angular.module('homeRock.services', [])

.factory('Devices', function(lodash, $http, $q, $httpParamSerializerJQLike) {

  return {

    getDevices: function() {

      var devices = [];
      var defer = $q.defer();

      $http.get('../../data_devices.php')
        .then(function(response) {

          devices = _.map(_.countBy(response.data, "type"), function(value, key) {
            return {
              "key": key,
              "value": value
            };
          });

          defer.resolve(devices);
        }, function(error) {
          defer.reject(error);
        });

      return defer.promise;

    },

    getDeviceTypes: function() {

      var deviceTypes = [];
      var defer = $q.defer();

      $http.get('../../data_devices.php')
        .then(function(response) {

          var t = _.uniq(response.data, 'type'),
            dataMap = {
              type: 'name',
              type_human_readable: 'name_human_readable'
            };

          var deviceTypes = t.map(function(topic) {
            var t = {};
            for (var key in dataMap) {
              t[dataMap[key]] = topic[key];
            };
            return t;
          });

          defer.resolve(deviceTypes);
        }, function(error) {
          defer.reject(error);
        });

      return defer.promise;

    },

    getDevicesByType: function(deviceTypeName) {

      var devices = [];
      var defer = $q.defer();

      $http.get('../../data_devices.php')
        .then(function(response) {

          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].type === deviceTypeName) {
              devices.push(response.data[i]);
            }
          }

          defer.resolve(devices);
        }, function(error) {
          defer.reject(error);
        });

      return defer.promise;

    },

    updateDeviceStatus: function(deviceName, deviceStatus, deviceTypeName) {

      var devices = [];
      var defer = $q.defer();

      $http({
          url: '../../action-post.php',
          method: 'POST',
          data: $httpParamSerializerJQLike({
            node: deviceName,
            action: deviceStatus,
            type: deviceTypeName
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function(response) {

          console.log("Posted");

          defer.resolve(devices);
        }, function(error) {
          defer.reject(error);
        });

      return defer.promise;

    }


  };
});
