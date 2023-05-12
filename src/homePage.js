
// Creates content for the home tab
function createHomeContent(containerSection) {
	// Create the sections for the home tab
	homeSectionIDs = ['welcome-section', 'open-reservation-section', 'open-special-event-section', 'open-news-community-section'];
	homeSectionsHTML = [];

	// Loop through the IDs to create section nodes for each of them
	for (let i = 0; i < homeSectionIDs.length; i++) {
		// Create section node
		section = document.createElement("section");
		// If it's the welcome section since index = 0, just assign the id
		if (i == 0) {
			section.id = homeSectionIDs[i];
		} else {
			// If it's not the welcome section, then assign a class alongside the id.
			section.id = homeSectionIDs[i];
			section.classList.add("home-content-card");
		}
		// Append the section
		homeSectionsHTML.append(section);
	}

	// Put the respective html in each of the sections
	homeSectionsHTML[0].innerHTML = `<h1>Come dine with us!</h1>
				<p>Made with passion and sauce since 1889</p>
				<img src="./assets/images/chef_flame.jpg" alt="Chef flames" id="home-page-img-el">
				<hr class="page-divider">
				<p id="business-slogan">Truly one of the restaurants in history</p>`;
	
	homeSectionsHTML[1].innerHTML = `<h1>Book a reservation today</h1>
				<p>Schedule a reservation with ease online in as quickly as 10 minutes. Accomodations from small groups to large gatherings. </p>
				<a href="#" id="open-reservation-page-link">Book</a>`;

	homeSectionsHTML[2].innerHTML = `<h1>Preparing for a special event? Say no more!</h1>
				<p>
					We're able to setup unique and novel events for our clients. From personalized weddings, scheduling a cruise ship vacation, and even giving our 
					clients their food whilst sky-diving! We have a history of setting up the impossible and serving up miracles! Just contact us! 
				</p>
				<a href="#" id="open-special-events-link">Special Events</a>`;

	homeSectionsHTML[3].innerHTML = `<h1>Stay in the loop and keep up with us!</h1>
				<p>
					We're always taking the next step in branching out and trying new things. Read up on the news surrounding us and ultimately 
					get more involved in the community. 
				</p>
				<a href="#" id="open-news-community-link">News & Community</a>`;

	// Append section nodes to the container passed, which will be the mainContentSection
	homeSectionsHTML.forEach(section => {
		containerSection.appendChild(section);
	})
}