angular.module('gaugejs', [])
.directive('gaugejs', function () {
    return {
        restrict: 'A',
        scope: {
            options: '=',
            value: '=ngModel'
        },
        compile: function (ele, attrs) {
            var gauge;
            return function (scope, element, attrs) {

                function setGauge(options, value) {
                    value = (value ? value : 0);
                    
                    if (!gauge) {
                        gauge = new Gauge(element[0]).setOptions(options);
                    }
                    gauge.setOptions(options);
                    gauge.maxValue = options.maxValue;
                    gauge.setMinValue = options.minValue;
                    gauge.set(value);
                    gauge.animationSpeed = options.animationSpeed;
                }
               
                scope.$watch('options', function (newVal, oldVal) {
                    setGauge(newVal);
                }, true);
                
                scope.$watch('value', function (newVal, oldVal) {
                    value = (newVal ? newVal : 0);
                    if (value > scope.options.maxValue) {
                        setGauge(scope.options, scope.options.maxValue);
                    } else {
                        setGauge(scope.options, newVal);
                    }
                }, true);
            };
        }
    };
});