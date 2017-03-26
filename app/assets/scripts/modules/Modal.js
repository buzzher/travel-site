import $ from 'jquery'

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		//49 10:00 clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this)); //49 14:45 bind help to accses the this in the open/close function 

		//clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		//clicking the any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) { //clicking the wscape button
		if(e.keyCode === 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		return false; /*49 13:28 if the link has href='#' it scrolling to the top of the page, by returning false it not scroll to the top*/
		
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;