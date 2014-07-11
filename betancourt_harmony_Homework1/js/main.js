/*
     Name: Harmony Betancourt
     Date: 7/10/14
     Class & Section:  WIA-1407 01

     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/


if(Modernizr.canvas){
	// If canvas is supported, get drawing!
	console.log("Canvas Supported");




	/*******************************************
	PART 1

	Draw a rectangle starting at point (0 ,0)
	That has a width of 50 px and a heigh of 100px
	Set the color of the rectangle to a shade of blue.
	Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

	Reminder - set the style first then draw.
	********************************************/

	//Draw Rectangle here

	var rect = document.getElementById('rect');

	if(rect && rect.getContext){
		var rectCtx = rect.getContext("2d");

		if(rectCtx){
			rectCtx.strokeStyle = "black";
			rectCtx.fillStyle = "blue";

			rectCtx.fillRect(0,0,50,100);
			rectCtx.strokeRect(0,0,50,100);
		}
	}


	/*******************************************
	PART 2

	Draw a circle starting at point (50 ,50)
	That has a radius of 20 px 
	Set the color of the circle to a shade of red and set the alpha to .5
	Set the stroke color to black and use a radius of 30px for this circle.

	Reminder - set the style first then draw.
	Use the arc method
	********************************************/


	//Draw Circle here

	var circle = document.getElementById('circle');

	if(circle && circle.getContext){
		var circleCtx = circle.getContext("2d");

		if(circleCtx){
			circleCtx.fillStyle = "rgba(215, 44, 44, 0.4)";
			circleCtx.strokeStyle = "black";
			circleCtx.lineWidth = 3;

			var degrees = 360;
			var radians = (degrees/180) * Math.PI;

			circleCtx.beginPath();
			circleCtx.arc(50,50, 20, 0, radians);
			circleCtx.fill();
			circleCtx.stroke();
		}
	}


	/*******************************************
	PART 3

	Practice using Path drawing.
	Create a 5-point star shaped pattern using the lineTo method.
	Begin this shape at (100, 100)

	Height and width and color are up to you.

	********************************************/


	//Draw Star here
	var path = document.getElementById('path');

	if(path && path.getContext){
		var pathCtx = path.getContext("2d");

		if(pathCtx){
			pathCtx.strokeStyle = "orange";
			pathCtx.fillStyle = "yellow";
			pathCtx.lineWidth = 10;
			pathCtx.lineJoin = "miter"

			pathCtx.beginPath();
			pathCtx.moveTo(100,100);
			pathCtx.lineTo(185,85);
			pathCtx.lineTo(227,12);
			pathCtx.lineTo(268,85);
			pathCtx.lineTo(350,100);
			pathCtx.lineTo(295,160);
			pathCtx.lineTo(300,240);
			pathCtx.lineTo(227,205);
			pathCtx.lineTo(150,240);
			pathCtx.lineTo(160,160); // Ended line slightly early to ensure closepath would cap
			pathCtx.closePath();
			pathCtx.fill();
			pathCtx.stroke();	
		}
	}

	/*******************************************
	PART 4

	Practice drawing with Bezier curves.
	Try drawing the top to an image.
	This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

	Position, height, width and color are your choice.
	Do not overlap any other object.

	********************************************/

	//Draw Umbrella top here
	var umbrella = document.getElementById('umbrella');

	if(umbrella && umbrella.getContext){
		var umbCtx = umbrella.getContext("2d");

		if(umbCtx){
			umbCtx.strokeStyle = "#05034E";
			umbCtx.fillStyle = "#9BDEFB";
			umbCtx.lineWidth = 5;	


			umbCtx.beginPath();
			umbCtx.arc(200,200, 150, 1* Math.PI, 2* Math.PI, false);
			umbCtx.bezierCurveTo(300,140, 280,170, 255,200);
			umbCtx.bezierCurveTo(195,140, 175,170, 150,200);
			umbCtx.bezierCurveTo(95,140, 75,170, 65,180);
			umbCtx.closePath();
			umbCtx.fill();
			umbCtx.stroke();
		}
	}
	/*******************************************
	PART 5

	Practice using text.
	Draw text into your canvas.  It can said whatever you would like in any color.

	********************************************/

	//Draw text here
	var text = document.getElementById('text');

	if(text && text.getContext){
		var textCtx = text.getContext("2d");

		if(textCtx){
			textCtx.fillStyle = "green";
			textCtx.font = "18pt Arial";
			textCtx.fillText("Guess what class I'm in?", 20, 80); 
		}
	}




	/*******************************************
	PART 6

	Pixel manipulation.
	Draw the image logo.png into the canvas in the following 3 ways.
	1. The image exactly as it is.
	2. Shrink the image by 50%
	3. Slice a section of the logo out and draw that onto the canvas.

	Reminder to use the drawImage method for all 3 of the ways.

	********************************************/

	//Draw images here

	var image = document.getElementById('image');

	if(image && image.getContext){
		var imageCtx = image.getContext("2d");

		if(imageCtx){
			var imgSrc = document.getElementById('image1');

			// Full image
			imageCtx.drawImage(imgSrc, 0,0);

			// Shrunken Image
			imageCtx.drawImage(imgSrc, 0,1100, 1650,554);

			// Sliced Image
			imageCtx.drawImage(imgSrc, 2520,160, 190,185, 0,1700, 190,185);
		}
	}

	/*******************************************
	PART 7

	Putting it all together. 

	Using a combination of all the methods. 
	Create a complex scene.
	You must use at least 3 different methods.

	********************************************/

	// Draw scene here

	var scene = document.getElementById('scene');

	if(scene && scene.getContext){
		var sceneCtx = scene.getContext("2d");

		if(sceneCtx){
			// Variables for full circles throughout
			var degrees = 360;
			var radians = (degrees/180) * Math.PI;

			// Sky 
			sceneCtx.fillStyle = "#00BFFF";
			sceneCtx.fillRect(0,0,800,570);

			// Grass
			sceneCtx.fillStyle = "green";
			sceneCtx.fillRect(0,570, 800,30);

			// House
			sceneCtx.fillStyle = "pink";
			sceneCtx.strokeStyle = "black";
			sceneCtx.lineWidth = 3;
			sceneCtx.fillRect(55,290, 295, 300);
			sceneCtx.strokeRect(55,290, 295, 300);

			// Roof
			sceneCtx.fillStyle = "#823810";
			sceneCtx.moveTo(40, 290);
			sceneCtx.lineTo(200,150);
			sceneCtx.lineTo(370, 290);
			sceneCtx.closePath();
			sceneCtx.fill();
			sceneCtx.stroke();

			// Door
			sceneCtx.lineWidth = 2;
			sceneCtx.fillRect(160,480,85,110);
			sceneCtx.strokeRect(160,480,85,110);
			// Knob
			sceneCtx.fillStyle= "yellow";
			sceneCtx.beginPath();
			sceneCtx.arc(175,545, 5, 0, radians);
			sceneCtx.fill();
			sceneCtx.stroke();

			// Windows
			sceneCtx.fillStyle = "#BAEDFF";
			sceneCtx.fillRect(90,350, 85,100);
			sceneCtx.strokeRect(90,350, 85,100);
			sceneCtx.moveTo(133, 350);
			sceneCtx.lineTo(133, 450);	
			sceneCtx.stroke();	
			sceneCtx.moveTo(90, 400);
			sceneCtx.lineTo(175, 400);	
			sceneCtx.stroke();	
			// Frame crossings
			sceneCtx.fillRect(230,350, 85,100);
			sceneCtx.strokeRect(230,350, 85,100);
			sceneCtx.moveTo(273, 350);
			sceneCtx.lineTo(273, 450);
			sceneCtx.stroke();
			sceneCtx.moveTo(230, 400);
			sceneCtx.lineTo(315, 400);
			sceneCtx.stroke();

			// Handwriting
			sceneCtx.beginPath();
			sceneCtx.fillStyle = "white"
			sceneCtx.font = "48pt 'Crafty Girls'"; // Font from Google Fonts
			sceneCtx.fillText('My Home', 400, 400);
			sceneCtx.strokeText('My Home', 400, 400);
			sceneCtx.closePath();


			// Sun
			sceneCtx.beginPath();
			sceneCtx.lineWidth = 10;
			sceneCtx.fillStyle= "orange";
			sceneCtx.strokeStyle = "yellow";		
			// Rays First, Body Overtop
			sceneCtx.moveTo(400, 0);
			sceneCtx.lineTo(710, 160);	
			sceneCtx.stroke();

			sceneCtx.moveTo(400, 90);
			sceneCtx.lineTo(710, 90);	
			sceneCtx.stroke();

			sceneCtx.moveTo(400, 180);
			sceneCtx.lineTo(710, 0);	
			sceneCtx.stroke();

			sceneCtx.moveTo(480, 200);
			sceneCtx.lineTo(640, -10);	
			sceneCtx.stroke();

			sceneCtx.moveTo(556, 240);
			sceneCtx.lineTo(556, 0);	
			sceneCtx.stroke();

			sceneCtx.moveTo(626, 200);
			sceneCtx.lineTo(520, -10);	
			sceneCtx.stroke();		
			sceneCtx.closePath();
			// Body of Sun
			sceneCtx.beginPath();
			sceneCtx.arc(550,75, 100, 0, radians);
			sceneCtx.fill();
			sceneCtx.stroke();				
			sceneCtx.closePath();
		}
	}
} else{ 
	// No canvas, console message, fallback messages in HTML
	console.log("Canvas isn't allowed!");
}