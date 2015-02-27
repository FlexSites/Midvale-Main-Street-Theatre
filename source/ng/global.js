angular.module('app')
    .controller('HomeCtrl', ['$scope', '$interval', function($scope, $interval) {

        var i = 0;
        $scope.testimonial = testimonials[i];
        $interval(function() {
            $scope.testimonial = testimonials[++i];
            if (i === testimonials.length - 1) {
                i = -1;
            }
        }, 7500);
    }]);
