(function() {
	console.log("This has fired.");

/*set up variables for all the images, the headline, the subtext, the main content, and an empty variable called appliedClass
*/

var appliedClass,
	theImages = document.querySelectorAll('.image-holder'),
	theHeading = document.querySelector('.heading'),
	theSubHead = document.querySelector('.main-copy h2'),
	theSeasonText = document.querySelector('.main-copy p');

	function changeElements() {
		theSubHead.classList.remove(appliedClass);
		theHeading.classList.remove(appliedClass);
		//debugger;
		theSubHead.classList.add(this.id);
		theHeading.classList.add(this.id);

		appliedClass = this.id;

		theSubHead.firstChild.nodeValue = dynamicContent[this.id].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
	}

[].forEach.call(theImages, function(image) {
	image.addEventListener('click',changeElements,false);
});
})();
