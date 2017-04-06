# angular-gauge
A simple directive for Angular to make use of gauge.js

# Usage
### Simply include `gauge.js` and `angular-gauge.js` in your Angular project

```html
<script src="scripts/gauge.js"></script>
<script src="scripts/angular-gauge.js"></script>
```

### Create a canvas and give it a `gaugejs` attribute

```html
<canvas id="myGauge" options="gaugeOptions" ng-model="gaugeValue" style="width:100%;" gaugejs></canvas>
```
### Specify some options

```javascript
$scope.gaugeOptions = {
        angle: 0,
        lineWidth: 0.4,
        radiusScale: 1,
        pointer: {
            length: 0.6,
            strokeWidth: 0.05,
            color: '#000000'
        },
        minValue: 0,
        maxValue: 100,
        limitMax: true,
        limitMin: true,
        staticZones: [
            { strokeStyle: "#F03E3E", min: 0,  max: 30  }, // Red
            { strokeStyle: "#FFDD00", min: 30, max: 80  }, // Yellow
            { strokeStyle: "#30B32D", min: 80, max: 100 }  // Green
        ],
        strokeColor: '#E0E0E0',
        generateGradient: false,
        highDpiSupport: true,
        animationSpeed: 20
};
```

### Specify a default value (optional)

```javascript
$scope.gaugeValue = 21;
```

# That's it!

### Enjoy
