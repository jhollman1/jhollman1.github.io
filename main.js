"use strict";
$(document).ready(function(){

    var baseUrl = "https://jhollman1.github.io/";

	//var baseUrl = "http://parkland-csc175.github.io/instructor-example/";
	// setup links using data from episode-list
    //$.get(baseUrl + "api/list-months.json", function(data){
    $.get(baseUrl + "api/recipe-list.json", function(data){
	console.log(data);
	console.log("recipes from main.js");
		$("#months").empty(); // remove any old links
		// data is an array of episode objects
		$.each(data, function(i, month){  //loop through each element in the data retrieved
			var $anchor = $("<a href='#'></a>"); //create an <a>
			var $li =$("<li></li>"); //create the list item
			
			$anchor.attr("id", "month-" + month.id); // add an id="episode-1"
			$anchor.text(month.name);  //add the text
			$li.append($anchor); //add the anchor to the li
			$("#months").append($li);  //then add the li to the list in html
			
			$anchor.click(createClickHandler(baseUrl + month.url));	//when one of those li anchors is clicked, invoke the createClickHandler function
		});		
	});
	/*
	// we could do individual click handlers, but that would be inefficient and not responsive when more episodes are added
	$("#episode-1").click(function(){
		
		$.get(baseUrl + "episode-1.json", function(data){
			console.log(data);
			
			$("#episode-title").text(data.title);
			$("#episode-desc").text(data.description);
		});		
	});
	$("#episode-2").click(createClickHandler(baseUrl + "episode-2.json"));
	$("#episode-3").click(createClickHandler(baseUrl + "episode-3.json"));
	$("#episode-4").click(createClickHandler(baseUrl + "episode-4.json"));
	*/
	// example of a "factory" function that will handle clicks on any anchors (invoked on line 29), retrieve data using the get method, then display data in html
	function createClickHandler(url){
		// OMG (object management group) inception
		return function onClick(){
			$.get(url, function(data){
			    //console.log(data); // data is an array


			    $("#month-name").text(data.title);// + "<img src='" + data.image + "'>";

//			    			    $("#month-image").append(data.image);
//			    			    $("#month-image").html(data.image);

			    // "<img src='" + data.image + "'>"

				//$("#month-image").text(data.image);
			    $("#month-url").text(data.url);



//			    $("month-container").text("");
//                            $("month-container").append(
//                                "<h1>" + data.title + "</h1>" +
//                                    "<img src='" + data.image + "'>" +
//                                    "<p>" + data.url + "</p>"
//                            );







			    
			});
		}
	}



    
    //var march_calories = [];
    //    $.get("jsonfiles/1.json", function(data){
    //	console.log(data);
//});
    //console.log(march_calories);
    //console.log(march_calories.length);
    //getDailyTotals();
});

//getDailyTotals();

////http://www.espn.com/nba/scoreboard
//var ctx = document.getElementById("myChart").getContext('2d');
////var ctx = $("#myChart").getContext('2d');
////console.log(ctx);
////console.log(march_calories.length);
//var calories = [7, 12, 9, 2, 3];
////var calories = [];
//var day = ["Red", "Blue", "Green", "yellow", "Purple"];

//function getDailyTotals(){
//    for(var i = 0; i < march_calories.length; i++){
//	console.log("work");
//	//console.log(march_calories.length);
//	//console.log(i);
//	console.log(march_calories[i].id);
//	console.log(march_calories[i].total_calories);
//	console.log(march_calories[i].total_price);
//	console.log(march_calories[i].content);
//	//calories.push(march_calories[i].total_calories);
//    }
//    console.log(calories);
//};

//var myChart = new Chart(ctx, {
//    //type: 'bar',
//    type: 'line',
//    data: {
////	labels: ["Red", "Blue", "Green", "Orange", "Purple"],
//	labels: day,
//	datasets: [{
//	    label: '# of Votes',
////	    data: [7, 12, 9, 2, 3],
//	    data: calories,
////	    backgroundColor: [
////		'rgba(255, 99, 132, 0.2)',
////		'rgba(54, 162, 235, 0.2)',
////		'rgba(255, 206, 86, 0.2)',
////		'rgba(75, 192, 192, 0.2)',
////		'rgba(153, 102, 255, 0.2)',
////		'rgba(255, 159, 64, 0.2)'
////	    ],
////	    borderColor: [
////		'rgba(255,99,132,1)',
////		'rgba(54, 162, 235, 1)',
////		'rgba(255, 206, 86, 1)',
////		'rgba(75, 192, 192, 1)',
////		'rgba(153, 102, 255, 1)',
////		'rgba(255, 159, 64, 1)'
////	    ],
//	    borderWidth: 1,
//	    lineTension: .1
//	}]
//    },
//    options: {
//	scales: {
//	    yAxes: [{
//		ticks: {
//		    beginAtZero:true
//		}
//	    }]
//	}
//    }
//});


//var calories_march = [
////march_calories = [
//    {
//	id: 1,
//	total_calories: 0,
//	total_price: 0.00,
//	content: [
//	    {
//		"name": "donuts",
//		"calories": 910,
//		"price": 0.96
//	    },
//	    {
//		"name": "pizza",
//		"calories": 1120,
//		"price": 2.50
//	    },
//	    {
//		"name": "cereal",
//		"calories": 250,
//		"price": 0.23
//	    },
//	    {
//		"name": "sandwich",
//		"calories": 300,
//		"price": 0.52
//	    },
//	    {
//		"name": "beer",
//		"calories": 1472,
//		"price": 10.75
//	    }
//	]
//    },
//    {
//	id: 2,
//	total_calories: 0,
//	total_price: 0.00,
//	content: [
//	    {
//		"name": "donuts",
//		"calories": 350,
//		"price": 0.32
//	    },
//	    {
//		"name": "fries",
//		"calories": 660,
//		"price": 0.75
//	    },
//	    {
//		"name": "pizza",
//		"calories": 2160,
//		"price": 6.57
//	    },
//	    {
//		"name": "sandwich",
//		"calories": 300,
//		"price": 0.52
//	    },
//	    {
//		"name": "beer",
//		"calories": 540,
//		"price": 3.80
//	    }
//	]
//    },
//    {
//	id: 3,
//	total_calories: 0,
//	total_price: 0.00,
//	content: [
//	    {
//		"name": "chips",
//		"calories": 500,
//		"price": 1.00
//	    },
//	    {
//		"name": "tacos",
//		"calories": 1000,
//		"price": 4.00
//	    },
//	    {
//		"name": "cereal",
//		"calories": 300,
//		"price": 0.75
//	    },
//	    {
//		"name": "sandwich",
//		"calories": 600,
//		"price": 1.04
//	    },
//	    {
//		"name": "peanut butter",
//		"calories": 666,
//		"price": 0.42
//	    },
//	    {
//		"name": "beer",
//		"calories": 1647,
//		"price": 13.39
//	    }
//	]
//    },
//    {
//	id: 4,
//	total_calories: 0,
//	total_price: 0.00,
//	content: [
//	    {
//		"name": "pop",
//		"calories": 290,
//		"price": 1.00
//	    },
//	    {
//		"name": "pizza",
//		"calories": 1440,
//		"price": 2.50
//	    },
//	    {
//		"name": "tuna",
//		"calories": 80,
//		"price": 0.69
//	    },
//	    {
//		"name": "cereal",
//		"calories": 250,
//		"price": 0.23
//	    },
//	    {
//		"name": "sandwich",
//		"calories": 300,
//		"price": 0.52
//	    },
//	    {
//		"name": "peanut butter",
//		"calories": 666,
//		"price": 0.42
//	    },
//	    {
//		"name": "beer",
//		"calories": 1140,
//		"price": 5.98
//	    }
//	]
//    },
//    {
//	id: 5,
//	total_calories: 0,
//	total_price: 0.00,
//	content: [
//	    {
//		"name": "donuts",
//		"calories": 280,
//		"price": 0.32
//	    },
//	    {
//		"name": "fries",
//		"calories": 660,
//		"price": 0.75
//	    },
//	    {
//		"name": "ham",
//		"calories": 800,
//		"price": 1.86
//	    },
//	    {
//		"name": "tuna",
//		"calories": 80,
//		"price": 0.69
//	    },
//	    {
//		"name": "cereal",
//		"calories": 750,
//		"price": 0.69
//	    },
//	    {
//		"name": "sandwich",
//		"calories": 300,
//		"price": 0.52
//	    }
//	]
//    },
//    {
//	id: 6,
//	total_calories: 0,
//	total_price: 0.00,
//	content: [
//	    {
//		"name": "donuts",
//		"calories": 280,
//		"price": 0.32
//	    },
//	    {
//		"name": "cereal",
//		"calories": 300,
//		"price": 0.75
//	    },
//	    {
//		"name": "eggs",
//		"calories": 240,
//		"price": 0.15
//	    },
//	    {
//		"name": "peanut butter",
//		"calories": 1332,
//		"price": 0.84
//	    },
//	    {
//		"name": "beer",
//		"calories": 1647,
//		"price": 13.39
//	    }
//	]
//    },
//];
