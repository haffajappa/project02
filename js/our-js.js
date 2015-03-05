$(document).ready(
	function() {
		$(".gd-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				if ($(".graphicDesign").hasClass("gd-shown")) {
					$(".graphicDesign").removeClass ("gd-shown").addClass("gd-hidden");
					$(".webDesign").removeClass ("wd-hidden").addClass("wd-shown");
					$(".photography").removeClass ("gd-hidden").addClass("gd-shown");
					$(".interactionDesign").removeClass ("gd-hidden").addClass("gd-shown");
					$(".illustration").removeClass ("gd-hidden").addClass("gd-shown");
				} else {
					$(".graphicDesign").removeClass("gd-hidden").addClass("gd-shown");
					// $(".webDesign").removeClass("wd-shown").addClass("wd-shown");
					// $(".interactionDesign").removeClass("gd-shown").addClass("gd-shown");
					// $(".photography").removeClass("gd-shown").addClass("gd-shown");
					// $(".illustration").removeClass("gd-shown").addClass("gd-shown");
				}
				// $(".gd-toggle").click(
				// 		function() {
				// 			$(".graphicDesign").show();
				// 			console.log("function is running");
				// 			$(".webDesign").hide();
				// 			console.log("webDesign is hidden");
				// 		}
				// 	);

			}
		);
	}
);

