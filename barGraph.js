"use strict";

//window.onload = function() {
//    var ctx = document.getElementById('chart-march').getContext('2d');
//    window.myBar = new Chart(ctx, {
//	type: 'bar',
//	data: barChartData,
//	options: {
//	    responsive: true,
//	    legend: {
//		position: 'top',
//	    },
//	    title: {
//		display: true,
//		text: 'Chart.js Bar Chart'
//	    }
//	}
//    });
//
//};



var ctxMarch = document.getElementById("chart-march").getContext('2d');
var ctxApril = document.getElementById("chart-april").getContext('2d');
var ctxMay = document.getElementById("chart-may").getContext('2d');

var calories = [];
var price = [];
var day = [];

var calories_03 = [];
var calories_04 = [];
var calories_05 = [];
var price_march = [];
var price_april = [];
var price_may = [];
var day_march = [];
var day_april = [];
var day_may = [];


//getDailyTotals(calories_march);
//getDailyTotals(calories_april);
//getDailyTotals(calories_may);
//
//function getDailyTotals(data){
//    for(var i = 0; i < data.length; i++){
//	day.push(data[i].id);
//
//	for(var j = 0; j < data[i].content.length; j++){
//	    data[i].total_calories+=data[i].content[j].calories;
//	    data[i].total_price+=data[i].content[j].price;
//	}
//	calories.push(data[i].total_calories);
//	price.push(data[i].total_price);
//	console.log(data[i].total_calories);
//	console.log(data[i].total_price);
//    }
//    console.log(calories);
//    console.log(price);
//};

//var calories_03 = [];
//var calories_04 = [];
//var calories_05 = [];
//var price_march = [];
//var price_april = [];
//var price_may = [];
//var day_march = [];
//var day_april = [];
//var day_may = [];

getMarchTotals();
getAprilTotals();
getMayTotals();

function getMarchTotals(){
    for(var i = 0; i < calories_march.length; i++){
	day_march.push(calories_march[i].id);

	for(var j = 0; j < calories_march[i].content.length; j++){
	    calories_march[i].total_calories+=calories_march[i].content[j].calories;
	    calories_march[i].total_price+=calories_march[i].content[j].price;
	}
	calories_03.push(calories_march[i].total_calories);
	price_march.push(calories_march[i].total_price);
	console.log(calories_march[i].total_calories);
	console.log(calories_march[i].total_price);
    }
    console.log(calories_03);
    console.log(price_march);
};

function getAprilTotals(){
    for(var i = 0; i < calories_april.length; i++){
	day_april.push(calories_april[i].id);

	for(var j = 0; j < calories_april[i].content.length; j++){
	    calories_april[i].total_calories+=calories_april[i].content[j].calories;
	    calories_april[i].total_price+=calories_april[i].content[j].price;
	}
	calories_04.push(calories_april[i].total_calories);
	price_april.push(calories_april[i].total_price);
	console.log(calories_april[i].total_calories);
	console.log(calories_april[i].total_price);
    }
    console.log(calories_04);
    console.log(price_april);
};

//function getAprilTotals(){
//    for(var i = 0; i < calories_april.length; i++){
//	day_march.push(calories_april[i].id);
//
//	for(var j = 0; j < april_march[i].content.length; j++){
//	    calories_march[i].total_calories+=calories_march[i].content[j].calories;
//	    calories_march[i].total_price+=calories_march[i].content[j].price;
//	}
//	calories.push(calories_march[i].total_calories);
//	price.push(calories_march[i].total_price);
//	console.log(calories_march[i].total_calories);
//	console.log(calories_march[i].total_price);
//    }
//    console.log(calories);
//    console.log(price);
//};

//function getMayTotals(){
//    for(var i = 0; i < calories_march.length; i++){
//	day.push(calories_march[i].id);
//
//	for(var j = 0; j < calories_march[i].content.length; j++){
//	    calories_march[i].total_calories+=calories_march[i].content[j].calories;
//	    calories_march[i].total_price+=calories_march[i].content[j].price;
//	}
//	calories.push(calories_march[i].total_calories);
//	price.push(calories_march[i].total_price);
//	console.log(calories_march[i].total_calories);
//	console.log(calories_march[i].total_price);
//    }
//    console.log(calories);
//    console.log(price);
//};

function getMayTotals(){
    for(var i = 0; i < calories_may.length; i++){
	day_may.push(calories_may[i].id);

	for(var j = 0; j < calories_may[i].content.length; j++){
	    calories_may[i].total_calories+=calories_may[i].content[j].calories;
	    calories_may[i].total_price+=calories_may[i].content[j].price;
	}
	calories_05.push(calories_may[i].total_calories);
	price_may.push(calories_may[i].total_price);
	console.log(calories_may[i].total_calories);
	console.log(calories_may[i].total_price);
    }
    console.log(calories_05);
    console.log(price_may);
};

var chartMarch = new Chart(ctxMarch, {
    type: 'bar',
    //type: 'line',
    data: {
	//	labels: ["Red", "Blue", "Green", "Orange", "Purple"],
	labels: day_march,
	datasets: [{
	    label: '# of calories',
//	    type: 'line',
	    type: 'bar',
	    //	    data: [7, 12, 9, 2, 3],
	    data: calories_03,
	    backgroundColor: window.chartColors.blue,
	    //	    backgroundColor: [
	    //		'rgba(255, 99, 132, 0.2)',
	    //		'rgba(54, 162, 235, 0.2)',
	    //		'rgba(255, 206, 86, 0.2)',
	    //		'rgba(75, 192, 192, 0.2)',
	    //		'rgba(153, 102, 255, 0.2)',
	    //		'rgba(255, 159, 64, 0.2)'
	    //	    ],
	    borderColor: window.chartColors.blue,
	    //	    borderColor: [
	    //		'rgba(255,99,132,1)',
	    //		'rgba(54, 162, 235, 1)',
	    //		'rgba(255, 206, 86, 1)',
	    //		'rgba(75, 192, 192, 1)',
	    //		'rgba(153, 102, 255, 1)',
	    //		'rgba(255, 159, 64, 1)'
	    //	    ],
	    borderWidth: 1,
	    fill: false,
	    lineTension: .1,
	    yAxisID: 'y-axis-1'
	    
	}, {
	    label: 'price',
	    // 	    type: 'line',
	    // 	    type: 'bar',
	    data: price_march,
	    backgroundColor: window.chartColors.red,
	    borderColor: window.chartColors.red,
	    borderWidth: 1,
	    fill: false,
	    lineTension: .1,
	    yAxisID: 'y-axis-2'
	}]
    },
    options: {
	scales: {
	    //	    yAxes: [{
	    yAxes: [{
		//		type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		display: true,
		position: 'left',
		id: 'y-axis-1',
		ticks: {
		    beginAtZero:true
		}
	    }, {
		type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		display: true,
		position: 'right',
		id: 'y-axis-2',

		// grid line settings
		gridLines: {
		    drawOnChartArea: false, // only want the grid lines for one axis to show up
		},
		ticks: {
		    beginAtZero:true
		}
	    }],
	    //	    }]
	}
    }
});

var chartApril = new Chart(ctxApril, {
    type: 'bar',
    //type: 'line',
    data: {
	//	labels: ["Red", "Blue", "Green", "Orange", "Purple"],
	labels: day_april,
	datasets: [{
	    label: '# of calories',
//	    type: 'line',
	    type: 'bar',
	    //	    data: [7, 12, 9, 2, 3],
	    data: calories_04,
	    backgroundColor: window.chartColors.blue,
	    //	    backgroundColor: [
	    //		'rgba(255, 99, 132, 0.2)',
	    //		'rgba(54, 162, 235, 0.2)',
	    //		'rgba(255, 206, 86, 0.2)',
	    //		'rgba(75, 192, 192, 0.2)',
	    //		'rgba(153, 102, 255, 0.2)',
	    //		'rgba(255, 159, 64, 0.2)'
	    //	    ],
	    borderColor: window.chartColors.blue,
	    //	    borderColor: [
	    //		'rgba(255,99,132,1)',
	    //		'rgba(54, 162, 235, 1)',
	    //		'rgba(255, 206, 86, 1)',
	    //		'rgba(75, 192, 192, 1)',
	    //		'rgba(153, 102, 255, 1)',
	    //		'rgba(255, 159, 64, 1)'
	    //	    ],
	    borderWidth: 1,
	    fill: false,
	    lineTension: .1,
	    yAxisID: 'y-axis-1'
	    
	}, {
	    label: 'price',
	    // 	    type: 'line',
	    // 	    type: 'bar',
	    data: price_april,
	    backgroundColor: window.chartColors.red,
	    borderColor: window.chartColors.red,
	    borderWidth: 1,
	    fill: false,
	    lineTension: .1,
	    yAxisID: 'y-axis-2'
	}]
    },
    options: {
	scales: {
	    //	    yAxes: [{
	    yAxes: [{
		//		type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		display: true,
		position: 'left',
		id: 'y-axis-1',
		ticks: {
		    beginAtZero:true
		}
	    }, {
		type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		display: true,
		position: 'right',
		id: 'y-axis-2',

		// grid line settings
		gridLines: {
		    drawOnChartArea: false, // only want the grid lines for one axis to show up
		},
		ticks: {
		    beginAtZero:true
		}
	    }],
	    //	    }]
	}
    }
});

var chartMay = new Chart(ctxMay, {
    type: 'bar',
    //type: 'line',
    data: {
	//	labels: ["Red", "Blue", "Green", "Orange", "Purple"],
	labels: day_may,
	datasets: [{
	    label: '# of calories',
//	    type: 'line',
	    type: 'bar',
	    //	    data: [7, 12, 9, 2, 3],
	    data: calories_05,
	    backgroundColor: window.chartColors.blue,
	    //	    backgroundColor: [
	    //		'rgba(255, 99, 132, 0.2)',
	    //		'rgba(54, 162, 235, 0.2)',
	    //		'rgba(255, 206, 86, 0.2)',
	    //		'rgba(75, 192, 192, 0.2)',
	    //		'rgba(153, 102, 255, 0.2)',
	    //		'rgba(255, 159, 64, 0.2)'
	    //	    ],
	    borderColor: window.chartColors.blue,
	    //	    borderColor: [
	    //		'rgba(255,99,132,1)',
	    //		'rgba(54, 162, 235, 1)',
	    //		'rgba(255, 206, 86, 1)',
	    //		'rgba(75, 192, 192, 1)',
	    //		'rgba(153, 102, 255, 1)',
	    //		'rgba(255, 159, 64, 1)'
	    //	    ],
	    borderWidth: 1,
	    fill: false,
	    lineTension: .1,
	    yAxisID: 'y-axis-1'
	    
	}, {
	    label: 'price',
	    // 	    type: 'line',
	    // 	    type: 'bar',
	    data: price_may,
	    backgroundColor: window.chartColors.red,
	    borderColor: window.chartColors.red,
	    borderWidth: 1,
	    fill: false,
	    lineTension: .1,
	    yAxisID: 'y-axis-2'
	}]
    },
    options: {
	scales: {
	    //	    yAxes: [{
	    yAxes: [{
		//		type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		display: true,
		position: 'left',
		id: 'y-axis-1',
		ticks: {
		    beginAtZero:true
		}
	    }, {
		type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		display: true,
		position: 'right',
		id: 'y-axis-2',

		// grid line settings
		gridLines: {
		    drawOnChartArea: false, // only want the grid lines for one axis to show up
		},
		ticks: {
		    beginAtZero:true
		}
	    }],
	    //	    }]
	}
    }
});
