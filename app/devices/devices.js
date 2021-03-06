'use strict';
/**
 * @ngdoc function
 * @name atreides.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the atreides
 */
angular.module('atreides')
  .controller('DeviceCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'DeviceFinderFactory', function($scope, $position, $filter, $stateParams, DeviceFinderFactory) {
    if ($stateParams.deviceID) {
      $scope.paramsDeviceID = $stateParams.deviceID;
    }
    $scope.getDevices = function() {
      var promise = DeviceFinderFactory.getDevices();
      promise.then(function(devices){
        $scope.devices = devices.data;
      })
    }
    $scope.getDevice = function(deviceID) {
      var promise = DeviceFinderFactory.getDevice(deviceID)
      promise.then(function(device){
        $scope.device = device.data;
      })
    }
}]);
