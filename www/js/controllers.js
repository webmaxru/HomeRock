angular.module('homeRock.controllers', [])

.controller('DashCtrl', function($scope, Devices, lodash) {

  $scope.deviceTypesChartOptions = {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function(d) {
        return d.key;
      },
      y: function(d) {
        return d.value;
      },
      showLabels: true,
      transitionDuration: 500,
      labelThreshold: 0.01,
      legend: {
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        }
      }
    }
  };

  Devices.getDevices().then(function(response) {
    $scope.deviceTypesChartData = response;
  }, function(response) {
    console.log(response);
  });

})

.controller('DeviceTypesCtrl', function($scope, Devices) {

  Devices.getDeviceTypes().then(function(response) {
    $scope.deviceTypes = response;
  }, function(response) {
    console.log(response);
  });

})

.controller('DevicesCtrl', function($scope, $stateParams, Devices) {

  Devices.getDevicesByType($stateParams.deviceTypeName).then(function(response) {
    $scope.devicesByType = response;
  }, function(response) {
    console.log(response);
  });

  $scope.toggleDeviceStatus = function toggleDeviceStatus(deviceName, deviceStatus, deviceTypeName) {

      console.log( "deviceName: " + deviceName + ", deviceStatus: " + deviceStatus)

      Devices.updateDeviceStatus( deviceName, deviceStatus, deviceTypeName ).then(function(response) {

        console.log("Resolved");

      }, function(response) {
        console.log(response);
      });

    };


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
