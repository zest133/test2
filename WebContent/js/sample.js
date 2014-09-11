var buttonOn;
var buttonOff;

$(document).ready(function(){
	Toc.buildToc();
	
	Toc.setAccordionEvent(".accordionHeader0");
	
	
	$("#svg").svg({ 
    loadURL: "images/svg test-1.svg",
    onLoad: null, // Callback once loaded 
    settings: {}, // Additional settings for SVG element 
    initPath: ''
  });
});

function temp(buttonId){
	//$("path").removeClass("buttonOn");
	$("path").attr("class", "");
	clearTimeout(buttonOn);
	clearTimeout(buttonOff);
	
	$("#"+buttonId).attr("class", "buttonOn");	
	
	//$("#"+buttonId).append("<img src='https://www.google.co.kr/images/srpr/logo11w.png'>")
	

	buttonOff = setTimeout(function(){
		$("path").attr("class", "");
		buttonOn = setTimeout(function(){			
			temp(buttonId);
		}, 500);	
	}, 500);	

	
	
	
	
	
	
}