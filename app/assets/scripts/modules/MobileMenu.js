import $ from 'jquery';

class MobileMenu {
	constructor() { //41 5:00 run when object created
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content')
		this.events();
		}

	events() {			//using bind(this)to make the this.menuC.. work as the this.menuIcon
		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
		//console.log(this);
	}

	toggleTheMenu() {
		//41 15:28 this.menuC.. working because the bind(this)
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}
}

export default MobileMenu; //exporting to another file the have import and the path './modules/MobileMenu'