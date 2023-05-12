import "./style.css"

// Importing images folder
const imageFolder = require.context("./assets/images", false, /\.(png|jpe?g|svg)$/)

// Getting content div or main page
const contentPage = document.getElementById("content");

function createFooter() {
	const footerEl = document.createElement("footer");

	const currentYear = new Date().getFullYear();
	footerEl.innerHTML = `<p>Made by Knguyen-dev <span id='date-el'>${currentYear}</span></p>`;

}





function createHeader() {

	// Create image element and assign it the source image path
	const imageEl = document.createElement("img");
	imageEl.src = imageFolder("./chef_flame.jpg");


	// Put it in the document
	document.body.appendChild(imageEl);
}
