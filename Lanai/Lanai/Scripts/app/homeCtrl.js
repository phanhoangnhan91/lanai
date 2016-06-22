var lanaiApp = angular.module('lanaiApp', []);
$.getNumberArray = function (num) {
    return (num >= 0) ? new Array(num) : [];
}
lanaiApp.controller('homeController', ['$http', '$scope', '$rootScope',
    function ($http, $scope, $rootScope) {
        $scope.getNumber = $.getNumberArray;
        $scope.common = {};
        $scope.common.activeView = 'list';
        $scope.viewButtons = ['list','map'];
    }]);

