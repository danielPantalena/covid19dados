$(document).ready(function () {
  $('.sidenav').sidenav();
});

// const data = {
//     '26/fev': [1, null],
//     '27/fev': [1, null],
//     '28/fev': [1, null],
//     '29/fev': [2, null],
//     '01/mar': [2, null],
//     '02/mar': [2, null],
//     '03/mar': [2, null],
//     '04/mar': [3, null],
//     '05/mar': [8, null],
//     '06/mar': [13, null],
//     '07/mar': [25, null],
//     '08/mar': [25, null],
//     '09/mar': [25, null],
//     '10/mar': [34, null],
//     '11/mar': [52, null],
//     '12/mar': [77, null],
//     '13/mar': [98, null],
//     '14/mar': [98, null],
//     '15/mar': [98, null],
//     '16/mar': [234, null],
//     '17/mar': [291, 1],
//     '18/mar': [428, 4],
//     '19/mar': [621, 7],
//     '20/mar': [978, 11],
//     '21/mar': [1128, 18],
//     '22/mar': [1546, 25],
//     '23/mar': [1891, 34],
// }

// console.log(data['26/fev']);
window.onload = function () {
  var chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: 'Covid19 - Brasil',
    },
    axisY: [
      {
        title: '',
        lineColor: '#666666',
        tickColor: '#666666',
        labelFontColor: 'black',
        titleFontColor: 'black',
        suffix: '',
      },
    ],

    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: 'line',
        name: 'Casos',
        color: '#666666',
        showInLegend: true,
        axisYIndex: 1,
        dataPoints: [
          { x: new Date(2020, 01, 26), y: 1 },
          { x: new Date(2020, 01, 27), y: 1 },
          { x: new Date(2020, 01, 28), y: 1 },
          { x: new Date(2020, 01, 29), y: 2 },
          { x: new Date(2020, 02, 01), y: 2 },
          { x: new Date(2020, 02, 02), y: 2 },
          { x: new Date(2020, 02, 03), y: 3 },
          { x: new Date(2020, 02, 04), y: 8 },
          { x: new Date(2020, 02, 05), y: 13 },
          { x: new Date(2020, 02, 06), y: 25 },
          { x: new Date(2020, 02, 07), y: 25 },
          { x: new Date(2020, 02, 08), y: 25 },
          { x: new Date(2020, 02, 09), y: 25 },
          { x: new Date(2020, 02, 10), y: 34 },
          { x: new Date(2020, 02, 11), y: 52 },
          { x: new Date(2020, 02, 12), y: 77 },
          { x: new Date(2020, 02, 13), y: 151 },
          { x: new Date(2020, 02, 14), y: 151 },
          { x: new Date(2020, 02, 15), y: 200 },
          { x: new Date(2020, 02, 16), y: 234 },
          { x: new Date(2020, 02, 17), y: 346 },
          { x: new Date(2020, 02, 18), y: 529 },
          { x: new Date(2020, 02, 19), y: 640 },
          { x: new Date(2020, 02, 20), y: 970 },
          { x: new Date(2020, 02, 21), y: 1178 },
          { x: new Date(2020, 02, 22), y: 1546 },
          { x: new Date(2020, 02, 23), y: 1924 },
          { x: new Date(2020, 02, 24), y: 2247 },
          { x: new Date(2020, 02, 25), y: 2554 },
          { x: new Date(2020, 02, 26), y: 2985 },
          { x: new Date(2020, 02, 27), y: 3417 },
          { x: new Date(2020, 02, 28), y: 3904 },
          { x: new Date(2020, 02, 29), y: 4256 },
          { x: new Date(2020, 02, 30), y: 4630 },
          { x: new Date(2020, 02, 31), y: 5717 },
          { x: new Date(2020, 03, 01), y: 6880 },
          { x: new Date(2020, 03, 02), y: 8044 },
          { x: new Date(2020, 03, 03), y: 9194 },
          { x: new Date(2020, 03, 04), y: 10360 },
          { x: new Date(2020, 03, 05), y: 11254 },
          { x: new Date(2020, 03, 06), y: 12183 },
          { x: new Date(2020, 03, 07), y: 14034 },
          { x: new Date(2020, 03, 08), y: 16188 },
          { x: new Date(2020, 03, 09), y: 18145 },
          { x: new Date(2020, 03, 10), y: 19789 },
          { x: new Date(2020, 03, 11), y: 20962 },
          { x: new Date(2020, 03, 12), y: 22192 },
          { x: new Date(2020, 03, 13), y: 23430 },
          { x: new Date(2020, 03, 14), y: 25262 },
          { x: new Date(2020, 03, 15), y: 28610 },
          { x: new Date(2020, 03, 16), y: 30683 },
          { x: new Date(2020, 03, 17), y: 33682 },
          { x: new Date(2020, 03, 18), y: 36722 },
          { x: new Date(2020, 03, 19), y: 38654 },
          { x: new Date(2020, 03, 20), y: 40753 },
          { x: new Date(2020, 03, 21), y: 43079 },
          { x: new Date(2020, 03, 22), y: 47757 },
          { x: new Date(2020, 03, 23), y: 49492 },
          { x: new Date(2020, 03, 24), y: null },
        ],
      },
    ],
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
