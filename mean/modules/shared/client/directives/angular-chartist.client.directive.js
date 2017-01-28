(function () {
  'use strict';

    angular.module('shared.chartist', [])
        .directive('chartist', function ($window) {
        var linkFn = function (scope, elm, attrs) {
            var data, options, responsiveOptions, selector, updateChart, deepWatchData, deepWatchOptions, deepwatch, type;
            data = scope.data;
            options = scope.options;
            responsiveOptions = scope.responsiveOptions;
            deepwatch = scope.deepWatch;
            selector = "#" + scope.ngId;
            type = scope.type || 'line';
            elm.attr('id', scope.ngId);

            updateChart = function () {

                if (type === 'line'){
                    Chartist.Line(selector, data, options, responsiveOptions);
                }else if (type === 'bar'){
                    Chartist.Bar(selector, data, options, responsiveOptions);
                }else if (type === 'pie'){
                    Chartist.Pie(selector, data, options, responsiveOptions);
                }
            };

            scope.$watch('data', function (newValue, oldValue) {
                data = newValue;
                updateChart();
            }, deepWatchData);

            scope.$watch('options', function (newValue, oldValue) {
                options = newValue;
                updateChart();
            }, deepWatchOptions);

            updateChart();

            angular.element($window).on('resize', updateChart);

            scope.$on("$destroy", function() {
                $(window).off('resize', updateChart);
            });

        };

        return {
            restrict: 'EA',
            template: '<div class="ct-chart chartist"></div>',
            replace: true,
            scope: {
                data: '=',
                options: '=',
                ngId: '@',
                type: '@',
                responsiveOptions: '=',
                deepWatchData: '=',
                deepWatchOptions: '='
            },
            link: linkFn
        };
    });
})();