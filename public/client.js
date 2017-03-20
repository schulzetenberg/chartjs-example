var app = angular.module('mainApp', [
  'chart.js'
]);

app.controller('mainCtrl', function($scope) {
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.bubbleData = [
    [{ x: 40, y: 10, r: 20 }],
    [{ x: 1, y: 40, r: 10 }],
    [{ x: 70, y: 90, r: 8 }],
    [{ x: 10, y: 40, r: 3 }],
    [{ x: 20, y: 70, r: 10 }]
  ];
  $scope.type = 'polarArea'; // Dynamic chart type

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});
