$(document).ready(
	function() {
		$(".gd-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				if ($(".graphicDesign").hasClass("itsShown")) {
					$(".graphicDesign").removeClass ("itsHidden").addClass("itsShown");
					$(".webDesign").removeClass ("itsShown").addClass("itsHidden");
					$(".photography").removeClass ("itsShown").addClass("itsHidden");
					$(".interactionDesign").removeClass ("itsShown").addClass("itsHidden");
					$(".illustration").removeClass ("itsShown").addClass("itsHidden");
				} else {
					$(".graphicDesign").removeClass("itsShown").addClass("itsHidden");
					$(".webDesign").removeClass ("itsHidden").addClass("itsShown");
					$(".photography").removeClass ("itsHidden").addClass("itsShown");
					$(".interactionDesign").removeClass ("itsHidden").addClass("itsShown");
					$(".illustration").removeClass ("itsHidden").addClass("itsShown");
				}
			}
		);

		$(".all-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();
				console.log("default prevented");
				$(".graphicDesign").removeClass("itsHidden").addClass("itsShown");
				$(".webDesign").removeClass ("itsHidden").addClass("itsShown");
				$(".photography").removeClass ("itsHidden").addClass("itsShown");
				$(".interactionDesign").removeClass ("itsHidden").addClass("itsShown");
				$(".illustration").removeClass ("itsHidden").addClass("itsShown");
				}
		);
	}
);

