var lanaiApp = angular.module('lanaiApp', []);
lanaiApp.controller('homeController', ['$http', '$scope', '$rootScope',
    function ($http, $scope, $rootScope) {
        $scope.common = {};
        $scope.common.activeView = 'list';
        $scope.viewButtons = ['list','map'];
    }]);

