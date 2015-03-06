$(document).ready(
	function() {
		$(".gd-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				$(".graphicDesign").removeClass ("itsHidden").addClass("itsShown");
				$(".webDesign, .photography, .interactionDesign, .illustration").removeClass ("itsShown").addClass("itsHidden");
			}
		);
		
		$(".wd-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				$(".webDesign").removeClass ("itsHidden").addClass("itsShown");
				$(".graphicDesign, .photography, interactionDesign, .illustration").removeClass ("itsShown").addClass("itsHidden");
				
			}
		);

		$(".photography-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				$(".photography").removeClass ("itsHidden").addClass("itsShown");
				$(".graphicDesign, .webDesign, interactionDesign, .illustration").removeClass ("itsShown").addClass("itsHidden");
				
			}
		);

		$(".interactionDesign-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				$(".interactionDesign").removeClass ("itsHidden").addClass("itsShown");
				$(".graphicDesign, .photography, .webDesign, .illustration").removeClass ("itsShown").addClass("itsHidden");
				
			}
		);

		$(".illustration-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();

				console.log("default prevented");
				$(".illustration").removeClass ("itsHidden").addClass("itsShown");
				$(".graphicDesign, .photography, interactionDesign, .webDesign").removeClass ("itsShown").addClass("itsHidden");
				
			}
		);

		$(".all-toggle").click(
			//there's an event happening, we can cancel
			function(event) {
				//when you've clicked on this link, capture the event that would have happened
				//and cancel it (prevent it from happening)
				event.preventDefault();
				console.log("default prevented");
				$(".graphicDesign, .webDesign, photography, interactionDesign, .illustration").removeClass("itsHidden").addClass("itsShown");
				}
		);
	}
);

