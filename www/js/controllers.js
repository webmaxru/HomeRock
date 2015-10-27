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

  $scope.deviceTypesChartData = function() {

    var deviceTypesChartData = _.map(_.countBy(Devices.devices(), "type_human_readable"), function(value, key) {

      return {
        "key": key,
        "value": value
      };

    });

    return deviceTypesChartData;

  };

})

.controller('DeviceTypesCtrl', function($scope, Devices) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.deviceTypes = Devices.deviceTypes();

})

.controller('DevicesCtrl', function($scope, $stateParams, Devices) {

  $scope.devicesByType = Devices.devicesByType($stateParams.deviceTypeId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
