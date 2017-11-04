$(document).ready(function() {
	var bg = $("#bg");
	var header = $("header");
	var projects = $(".project");
	var row1_done = false;
	var row2_done = false;
	
	header.css('height', (window.innerHeight+329)+'px');
	projects.css('height', (Math.round(window.innerHeight/2) - 80)+'px');
	
	$(window).resize(function() {
		header.css('height', (window.innerHeight+329)+'px');
		projects.css('height', (Math.round(window.innerHeight/2) - 80)+'px');
	});
	
	$(window).scroll(function() {
		var filterVal = 'blur('+(Math.round($(window).scrollTop()/50))+'px)\
						 sepia('+(Math.round($(window).scrollTop()/5))+'%)';
		bg
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		
		if (!row1_done && $(window).scrollTop() > window.innerHeight*0.25) {
			row1_done = true;
			projects.eq(0).addClass("slideLeft");
			projects.eq(3).addClass("slideRight");
			projects.eq(1).addClass("slideBottom");
			projects.eq(2).addClass("slideBottom");
		}
		if (!row2_done && $(window).scrollTop() > window.innerHeight*0.6) {
			row2_done = true;
			projects.eq(4).addClass("slideLeft");
			projects.eq(7).addClass("slideRight");
			projects.eq(5).addClass("slideBottom");
			projects.eq(6).addClass("slideBottom");
		}
	});
});

$(window).load(function() {
	$("#header-content").addClass("slideBottom");
})
