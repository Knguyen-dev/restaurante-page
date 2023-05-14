import "./style.css"
import {createHeader, createMainContentSection, createFooter} from "./initalPageLoad";
import createHomeContent from "./homePage";
import createMenuContent from "./menuPage";

// IIFE that auto runs; we have the functions create the base html, but also return an object so that we can 
// easily access that html later!
const pageContentModule = (() => {
	// Get the content page and then create the html for the header, main-content section, and footer
	const contentPage = document.getElementById("content"); // Getting content div or main page
	const headerEl = createHeader();
	const mainContentSection = createMainContentSection();
	const footerEl = createFooter(); 

	// Add dom elements to the contentPage div
	contentPage.appendChild(headerEl);
	contentPage.appendChild(mainContentSection);
	contentPage.appendChild(footerEl);

	// Get the tab buttons; let's also create the logic for tab switching
	const tabBtns = headerEl.querySelectorAll(".nav-button");

	// Represents the data-page attribute of the active button; this allows us to keep track of what tab we're currently on
	// It will later help with persisting on the page the user was last on.

	// Create event listener for all buttons
	tabBtns.forEach(btn => {
		btn.addEventListener("click", e => {
			// Represent button being clicked by the event
			const clickedBtn = e.currentTarget;
			const btnPageID = clickedBtn.dataset.page; 

			// Now for all other buttons, remove the data-active attribute, and add the data-active 
			// attribute to the clicked button; this part is mainly for visually indicating the selected tab btn
			tabBtns.forEach(btn => {
				if (btn == clickedBtn) {
					btn.setAttribute("data-active", "true"); 

				} else {
					btn.removeAttribute("data-active");
				}
			});

			// Since button was clicked, call the function that loads the content for that button
			loadTabContent(btnPageID);
		});		
	});

	return {headerEl, mainContentSection, footerEl, tabBtns};
})(); 

// Loads the content for a tab when user wants to click it
function loadTabContent(pageID) {

	// Clear the html of the mainContentSection
	pageContentModule.mainContentSection.innerHTML = "";

	// Load the page with the function, but also returns the new mainContentSection with the corresponding html
	if (pageID == "home") {
		// createHomeContent will take mainContentSection and add its own html to it, which will update the page
		// Then we get back the new mainContentSection in case we need to use it.
		pageContentModule.mainContentSection = createHomeContent(pageContentModule.mainContentSection);
	} else if (pageID == "menu") {
		
		pageContentModule.mainContentSection = createMenuContent(pageContentModule.mainContentSection);
	} else {
		console.log("user tried to go to the about/contact tab");
	}
}


 
window.addEventListener("DOMContentLoaded", () => {
	loadTabContent("home"); // load the home page
});