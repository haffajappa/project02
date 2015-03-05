$(document).ready(
	function() {
		$(".dd-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();
				console.log("default prevented");

				if ($(this).next("ul").hasClass("dd-shown")) {
					//need to specify the exact ul after that we want!
					//use the word THIS = go and grab the class i've clicked on
					//and run something with it!
					$(this).next("ul").removeClass("dd-shown").addClass("dd-hidden");

				} else {
					$(this).next("ul").removeClass("dd-hidden").addClass("dd-shown");					
				}
			}
		)
	}
);