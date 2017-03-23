import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();
		this.pageSection = $('.page-section'); //scroll by clicking nav link
		this.headerLinks = $('.primary-nav a'); //47 12:28 target the link in nav
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() { //47 18:37 we need to call the smoot-scroll on each on the headerLink
		this.headerLinks.smoothScroll(); //reuse the headerLink we created before
	}

	createHeaderWaypoint() {
		var that = this; //when its run, this. point to stickyHeader class

		new Waypoint({ //46 10:37 waypoint accept native js, no jquery..that why we make[0], the 1st item in arr obj is a pointer to a native DOM element
			element: this.headerTriggerElement[0], //the point the header change color
			handler: function(direction) {
				if(direction == 'down') {
					//46 10:00 this(doesnt point to the class, change it to that).siteHeader.addClass('site-header--dark')
					that.siteHeader.addClass('site-header--dark')
				} else {
					that.siteHeader.removeClass('site-header--dark')
				}
				
			}
		});
	}

	//make the nav link highlitght for selected section
	createPageSectionWaypoints() {
		var that = this; //47 12:45
		this.pageSection.each(function() { //each of the nav link
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection, //47 8:00 scroll to this section of the page.. every sec has .page-section
				handler: function(direction) {					//when click the link, the page goes to data-matching-link of the # link
					if(direction === 'down') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link'); //mkae the highlight remove
						$(matchingHeaderLink).addClass('is-current-link'); //get attr of the element like the #feature..
					}
				},
				offset: '18%'//costume how early or later in the scroll waypoit will triger(hightlight the link), link will hightlight 18% before the section touch the top
			});

			new Waypoint({
				element: currentPageSection, //47 8:00 scroll to this section of the page.. every sec has .page-section
				handler: function(direction) {					//when click the link, the page goes to data-matching-link of the # link
					if(direction === 'up') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link'); //mkae the highlight remove
						$(matchingHeaderLink).addClass('is-current-link'); //get attr of the element like the #feature..
					}
				},
				offset: '-40%'//costume how early or later in the scroll waypoit will triger(hightlight the link), link will hightlight 18% before the section touch the top
			});

		}); //each
	}
}

export default StickyHeader;