import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll { //when scrolling down we reveal the features/testimonials
	constructor(els, offset) { //element, offset, two element cuz the App.js new Revea..($('..'), 85%)
		this.itemsToReveal = els; //$('.feature-item, .testimonials');
		this.offsetPrecentage = offset;
		this.hideInitially(); //we want to run the mathod when the page load
		this.creatWaypoints();
		//the otrder is mettet
		
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	creatWaypoints() {
		var that = this; //make a var to be abble to accessRevealOnScroll
		this.itemsToReveal.each(function() { //this code run for each item, each of the testimonials(4 of them)
			var currentItem = this; //44 16:53 create var cuz we cant put this. inside new Waypoint cuz its a new object
			new Waypoint({ //we have acces cuz we include it in the import, top page, have two elements element, handler
				element: currentItem, //DOM element, we want to watch when scrolling down the page
				handler: function() { //what happen when the elements scroll too
					$(currentItem).addClass('reveal-item--is-visible'); //_reveal-item.css &--is-visible
				},
				offset: that.offsetPrecentage //45 6:00 make a var to be abble to accessRevealOnScroll
			});
		});
	}
}

export default RevealOnScroll;