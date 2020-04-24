$(document).ready(function(){
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
	var chart = new CanvasJS.Chart("chartContainer", {
	title:{
		text: "Weekly Revenue Analysis for First Quarter"
	},
	axisY:[{
		title: "Order",
		lineColor: "#C24642",
		tickColor: "#C24642",
		labelFontColor: "#C24642",
		titleFontColor: "#C24642",
		suffix: "k"
	},
	{
		title: "Footfall",
		lineColor: "#369EAD",
		tickColor: "#369EAD",
		labelFontColor: "#369EAD",
		titleFontColor: "#369EAD",
		suffix: "k"
	}],
	axisY2: {
		title: "Revenue",
		lineColor: "#7F6084",
		tickColor: "#7F6084",
		labelFontColor: "#7F6084",
		titleFontColor: "#7F6084",
		prefix: "$",
		suffix: "k"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "line",
		name: "Footfall",
		color: "#369EAD",
		showInLegend: true,
		axisYIndex: 1,
		dataPoints: [
			{ x: new Date(2020, 02, 26), y: 1 }, 
			{ x: new Date(2020, 02, 27), y: 1 },
			{ x: new Date(2020, 02, 28), y: 1 },
			{ x: new Date(2020, 02, 29), y: 2 },
			{ x: new Date(2020, 03, 01), y: 2 },
			{ x: new Date(2020, 03, 02), y: 2 },
			{ x: new Date(2020, 03, 03), y: 3 },
			{ x: new Date(2020, 03, 04), y: 8 },
			{ x: new Date(2020, 03, 05), y: 13 },
			{ x: new Date(2020, 03, 06), y: 25 },
			{ x: new Date(2020, 03, 07), y: 25 },
			{ x: new Date(2020, 03, 08), y: 25 }
		]
	},
	{
		type: "line",
		name: "Order",
		color: "#C24642",
		axisYIndex: 0,
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017, 00, 7), y: 32.3 }, 
			{ x: new Date(2017, 00, 14), y: 33.9 },
			{ x: new Date(2017, 00, 21), y: 26.0 },
			{ x: new Date(2017, 00, 28), y: 15.8 },
			{ x: new Date(2017, 01, 4), y: 18.6 },
			{ x: new Date(2017, 01, 11), y: 34.6 },
			{ x: new Date(2017, 01, 18), y: 37.7 },
			{ x: new Date(2017, 01, 25), y: 24.7 },
			{ x: new Date(2017, 02, 4), y: 35.9 },
			{ x: new Date(2017, 02, 11), y: 12.8 },
			{ x: new Date(2017, 02, 18), y: 38.1 },
			{ x: new Date(2017, 02, 25), y: 42.4 }
		]
	},
	{
		type: "line",
		name: "Revenue",
		color: "#7F6084",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017, 00, 7), y: 42.5 }, 
			{ x: new Date(2017, 00, 14), y: 44.3 },
			{ x: new Date(2017, 00, 21), y: 28.7 },
			{ x: new Date(2017, 00, 28), y: 22.5 },
			{ x: new Date(2017, 01, 4), y: 25.6 },
			{ x: new Date(2017, 01, 11), y: 45.7 },
			{ x: new Date(2017, 01, 18), y: 54.6 },
			{ x: new Date(2017, 01, 25), y: 32.0 },
			{ x: new Date(2017, 02, 4), y: 43.9 },
			{ x: new Date(2017, 02, 11), y: 26.4 },
			{ x: new Date(2017, 02, 18), y: 40.3 },
			{ x: new Date(2017, 02, 25), y: 54.2 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}