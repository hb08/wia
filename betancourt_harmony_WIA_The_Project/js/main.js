/*
     Name: Harmony Betancourt
     Date: 7/10/14
     Class & Section:  WIA-1407 01

     Comments: Project
********************************************************/

$(document).ready(function(){
	

/* 

Interactive Map
	
*/	
	$('a.city').hover(
		function(e){
			// Get city hovered on
			var thisCity = $(this).attr('city');
			var selectCity = 'a[city=' + thisCity + ']';
			
			// Remove selected class from everywhere else
			$('a.location').removeClass('selected');		
			
			// Add selected class to this name
			$(this).addClass('selected');
			
			// Add selected class to other name, adjust image
			$(selectCity).addClass('selected');
			
		}, function(e){
			// Hover off removes changes
			var thisCity = $(this).attr('city');
			var selectCity = 'a[city=' + thisCity + ']';
			
			$(selectCity).removeClass('selected');
		}	
	);
	

/* 

Image Gallery

*/ 
	// On Click
		$(".gallery_thumbnails a").click(function(e){
			e.preventDefault();
		
			// Create variables to hold links from thumbnail
			var photo_fullsize = $(this).attr("href");
			var photo_caption = $(this).attr("title");
		
			// Create Preview Link
			var photo_preview = photo_fullsize.replace("_fullsize", "_preview");
		
			// Slide caption up and out of way 
			$(".gallery_caption").slideUp(500);
		
		
			// Fade out Current picture
			$(".gallery_preview").fadeOut(500, function(){
			
				// Preload our clicked image after fadeout
				$(".gallery_preload_area").html('<img src="' + photo_preview + '" />');
			
				// Once preloaded, use it
				$(".gallery_preload_area img").imgpreload(function(){ // Far in Space required for imgprelaod
					// Change the picture and link for preview area
					$(".gallery_preview").html('<a class="overlayLink" title="' + photo_caption + '" href="'+ photo_fullsize + '" style="background-image:url(' + photo_preview + ');"><a>');
					// Fade in Preview window
					$(".gallery_preview").fadeIn(500);
					$(".gallery_caption").html('<p><a class="overlaylink zoom" title="' + photo_caption + '" href="' + photo_fullsize + '" >View Larger</a><p><p>' + photo_caption+ '</p');
					// Slide Caption into view
					$(".gallery_caption").slideDown(500);
				
					setFancyBoxLinks();
					updateThumbnails();
				});
			});
		
		});


	// Set First Photo
		var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
		var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");
		var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");
	
		// Change the picture and link for preview area
			$(".gallery_preview").html('<a class="overlayLink" title="' + first_photo_caption + '" href="'+ first_photo_fullsize + '" style="background-image:url(' + first_photo_preview + ');"><a>');
		// Fade in Preview window
			$(".gallery_preview").fadeIn(500);
			$(".gallery_caption").html('<p><a class="overlaylink zoom" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '" >View Larger</a><p><p>' + first_photo_caption + '</p');
		// Slide Caption into view
			$(".gallery_caption").slideDown(500);
	
	
	// Function Calls
		setFancyBoxLinks();
		updateThumbnails();


}); // Document Ready Ends

function setFancyBoxLinks(){
	$("a.overlayLink").fancybox({
		'titlePosition':'over',
		'overlayColor': '#000',
		'overlayOpacity': .8,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'autoScale': true	
	});
}

function updateThumbnails(){
	$(".gallery_thumbnails a").each(function(index){
	
		if($(".gallery_preview a").attr("href") == $(this).attr("href")){
			// If this image is the same as the preview, then shade thumbnail
			$(this).addClass("gal_selected");
			$(this).children().fadeTo(250, .4);
		} else {
			// Remove class and fade in
			$(this).removeClass("gal_selected");
			$(this).children().css("opacity","1");
		}
		
	});
}


/* 

 Interactive Data Visualization
	
*/

// Load Google Visualization Library and Core Chart Package
google.load("visualization", "1", {packages:["gauge"]});

// Once loaded run function
google.setOnLoadCallback(drawSummerChart); 

function drawSummerChart(){
	// Fix Label
	$("#seasonHead").text("Summer Highs");
	
	var data = google.visualization.arrayToDataTable([
		["Label", "Value"],
		["Cave Creek", 102],
		["Flagstaff", 82],
		["Sedona", 96],
		["Springerville", 82],
		["Winslow", 93]
	]);
	
	var options = {
		greenColor: "#A1F28E",
		greenFrom: 68, greenTo: 78,
		yellowColor: "#FFE293", 
		yellowFrom: 78, yellowTo: 90,
		redColor: "#FF9393",
		redFrom: 90, redTo: 105,
		min: 0,
		max: 105,
		fontSize: 10,
		width: 600,
		height: 120
	};
	
	var chart = new google.visualization.Gauge(document.getElementById("chart_temp"));

	chart.draw(data,options);
	
	// Add Button and Image
	
	$("#chart_temp").after('<button id="changeGauge">Change Season</button>');
	
	// Set up Button
	var turn = 0;
	$("#changeGauge").click(function(){		
		// Every other time clicked, change season
		if(turn === 0){
			// Winter
			$("#seasonHead").text("Winter Lows");
			data.setValue( 0, 1, 40);
			data.setValue( 1, 1, 15);
			data.setValue( 2, 1, 30);
			data.setValue( 3, 1, 15);
			data.setValue( 4, 1, 19);
			// Change image
			$("#img_summer").hide(1000);
			turn+= 1;			
		} else {
			// Summer
			$("#seasonHead").text("Summer Highs");
			data.setValue( 0, 1, 102);
			data.setValue( 1, 1, 82);
			data.setValue( 2, 1, 96);
			data.setValue( 3, 1, 82);
			data.setValue( 4, 1, 93);
			// Change image
			$("#img_summer").show(1000);
			turn-= 1;
		}
		chart.draw(data,options);	
	});
}



