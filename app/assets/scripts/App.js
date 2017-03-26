				/* Object Oriented  see below 41 8:00*/
import MobileMenu from './modules/MobileMenu'; //can be any name
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu(); //create the object

//45 3:00 replaceing this line - var revealOnScroll = new RevealOnScroll();
//new Person('Jane', 'Green')
new RevealOnScroll($('.feature-item'), '85%'); //16 3:00 two arguments
new RevealOnScroll($('.testimonials'), '60%'); //recyceble scroll

var stickyHeader  = new StickyHeader();

var modal = new Modal();


/* - - - - - 40 3:00 function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() { //this reffer to either john or jane
		console.log('Hello, my name is ' + this.name + ' and fy favorite color is ' + this.favoriteColor + '.');
	}
} move to Person - - - - - 
//var $ = require('jquery');

//var Person = require('./modules/Person');
//var = import, from = (=) 41 15:00 from Pperson.js
import Person from './modules/Person'; //this is es6 way to require('s')

//Adult class enhert all the Person propery and metheds, jane is Adult
class Adult extends Person { //class help with enherts
	payTaxes() { //methods
		console.log(this.name + ' now owe $0 in taxes.');
	}
}

//alert('ABC 321');

var john = new Person('John Doe', 'blue');
	john.greet(); //Hello there!

var jane = new Adult('Jane Smith', 'orange');
	jane.greet(); //Hello there!
	//console.log(jane.favoriteColor);
	jane.payTaxes(); //-----------------run the class */

/*var john = {
	name: 'john',
	favoriteColor: 'Blue',
	greet: function() {
		console.log('Hello, my name is ' + john.name + ' and my favorite color is ' + john.favoriteColor + '.');
	}
}
john.greet();*/

