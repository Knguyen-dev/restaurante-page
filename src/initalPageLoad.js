// File to load header and footer for hte page

// Creates and returns html for the header for the site 
function createHeader() {
	const headerEl = document.createElement("header");
	headerEl.innerHTML = `<nav>
				<h2>Le Sauce del Diole</h2>
				<ul class="nav-links-main">
					<li class="nav-item"><button class="nav-button" data-active>Home</button></li>
					<li class="nav-item"><button class="nav-button">Menu</button></li>
					<li class="nav-item"><button class="nav-button">About</button></li>
				</ul>
				<ul class="nav-links-secondary">
					<li class="nav-item"><a href="#">Register</a></li>
					<li class="nav-item"><a href="#">Account</a></li>
				</ul>
			</nav>`;
	return headerEl;
}

// Creates and returns the html section for containing the content of the three tabs.
function createMainContentSection() {
	const mainContentSection = document.createElement("section");
	mainContentSection.classList("main-content");
	return mainContentSection;
}


// Creates the footer for the site
function createFooter() {
	// Create footer
	const footerEl = document.createElement("footer");

	// Create social icons list for the footer and add a class for it
	const socialIconsUl = document.createElement("ul");
	socialIconsUl.classList.add("social-icons");
	socialIconsUl.innerHTML = `<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/doordash-logo.svg"></a></li>
				<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/facebook.svg"></a></li>
				<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/instagram.svg"></a></li>
				<li class="nav-item-footer"><a href="#"><img class="social-icon-img" src="./assets/icons/uber-eats.svg"></a></li>`; 
	footerEl.appendChild(socialIconsUl);
	
	// Create nav links list for the footer
	const footerNavLinks = ["Careers", "Gift Cards", "Privacy Policy", "Press", "Contact", "Email Sign Up"];
	const footerNavLinksUl = document.createElement("ul");
	footerNavLinksUl.classList.add("footer-nav-links");
	footerNavLinksUl.innerHTML = `<li class="nav-item-footer"><a href="#">Careers</a></li>
				<li class="nav-item-footer"><a href="#">Gift Cards</a></li>
				<li class="nav-item-footer"><a href="#">Privacy Policy</a></li>
				<li class="nav-item-footer"><a href="#">Press</a></li>
				<li class="nav-item-footer"><a href="#">Contact</a></li>
				<li class="nav-item-footer"><a href="#">Email Signup</a></li>`;
	footerEl.appendChild(footerNavLinksUl);
	
	// Create paragraph tag for dynamic date
	const currentYear = new Date().getFullYear();
	const dynamicDateParagraph = `<p>Made by Knguyen-dev <span id='date-el'>${currentYear}</span></p>`;
	footerEl.appendChild(dynamicDateParagraph);

	return footerEl;
}