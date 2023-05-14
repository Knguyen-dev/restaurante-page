// For creating about page

// object that contains company information
const companyInfoModule = {
	"phone-number": "555-5555",
	"address": "123 Cooking and Chefs Drive",
	"email": "HighDining@kitchen.com",
}

// Function that loads content from the about section onto the main-content section element
function createAboutContent(containerSection) {
	// Create section for containing content in the about tab/section
	const aboutContentSection = document.createElement("section");
	aboutContentSection.classList.add("about-content");

	// Create quote elements
	const blockQuote = document.createElement("blockquote");
	const quoteTextEl = document.createElement("h2");
	quoteTextEl.textContent = "Food isn't just a meal, it's art, it's creativity, but most importantly it's a time for rest.";
	quoteTextEl.id = "quote-text";

	// Put quote text inside block quote and then put block quote into our about content section
	blockQuote.appendChild(quoteTextEl);
	aboutContentSection.appendChild(blockQuote);

	// Create page divider and add it to content section
	const pageDivider = document.createElement("hr");
	pageDivider.classList.add("page-divider");
	aboutContentSection.appendChild(pageDivider);

	// Create mission statement text, and append to the content section
	const missionStatementEl = document.createElement("h2");
	missionStatementEl.textContent = `We are constantly working towards not only maintaining high standards for our customers' dining experience, 
	but are constantly looking for new ways to improve our craft and expand to new culinary horizons.`;
	missionStatementEl.id = "company-mission-statement";
	aboutContentSection.appendChild(missionStatementEl);

	// Create a second page divider; if you used the same page divider, it remembers and will move it to a new location; we create 2 to put 2 on the DOM
	const secondPageDivider = document.createElement("hr");
	secondPageDivider.classList.add("page-divider");
	aboutContentSection.appendChild(secondPageDivider);

	// Create section that contains contact information about the restaurant
	const contactInfoSection = document.createElement("section");
	contactInfoSection.classList.add("contact-info-section");

	// Create contact information text: header text for the section, phone number, email, and address
	const sectionHeader = document.createElement("h1")
	sectionHeader.textContent = "Contact information:";
	contactInfoSection.appendChild(sectionHeader);

	const phoneNumberEl = document.createElement("h2");
	phoneNumberEl.id = "phone-number-el";
	phoneNumberEl.textContent = `Phone Number: ${companyInfoModule["phone-number"]}`;
	contactInfoSection.appendChild(phoneNumberEl);

	const emailAddressEl = document.createElement("h2");
	emailAddressEl.id = "email-address-el";
	emailAddressEl.textContent = `Email: ${companyInfoModule["email"]}`;
	contactInfoSection.appendChild(emailAddressEl);

	const addressEl = document.createElement("h2");
	addressEl.id = "address-el";
	addressEl.textContent = `Address: ${companyInfoModule["address"]}`;
	contactInfoSection.appendChild(addressEl);

	// Finally append the contact info section into the aboutContentSection
	aboutContentSection.appendChild(contactInfoSection);
	// Then append the content from the about section to main container
	containerSection.appendChild(aboutContentSection);

	// Return the containerSection
	return containerSection;
}

export default createAboutContent;