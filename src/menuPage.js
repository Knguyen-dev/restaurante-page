// For the menu page
// array of objects that each represent menu items
const menuItemsInfo = [
	{
		"menu-item-title": "Chicken Monsieur",
		"item-description": "A chicken dish for french people",
		'item-price': 12.99,
		"img-src": "./assets/images/chicken_plate.jpg",
		"itemID": 1,
	},
	{
		"menu-item-title": "Pommes Dauphine",
		"item-description": "A potato dish for french people",
		'item-price': 7.50,
		"img-src": "./assets/images/fried_potato_balls.jpg",  
		"itemID": 2,
	},
	{
		"menu-item-title": "Gelato",
		"item-description": "An ice cream plate for italian people",
		'item-price': 18.50,
		"img-src": "./assets/images/ice_Cream_plate.jpg",
		"itemID": 3,
	},
	{
		"menu-item-title": "Spaghetti-alla chitarra",
		"item-description": "A pasta dish from Italians imported from Italy.",
		'item-price': 15.99,
		"img-src": "./assets/images/spaghetti_plate.jpg", 
		"itemID": 4,
	},
	{
		"menu-item-title": "Crudites",
		"item-description": "A vegetable dish from Paris and made with authentic french vegetables",
		'item-price': 12.99,
		"img-src": "./assets/images/veggie_plate.jpg",  
		"itemID": 5,
	},
];

// Function for creating menu content such as grid and grid items, alongside a container for the grid
function createMenuContent(containerSection) {
	// Create the section that contains all of the elements and content for the menu tab
	const menuContentSection = document.createElement("section");
	menuContentSection.classList.add("menu-content-section");

	// Create the grid that conatins the menu item, represented by rectangular cards 
	const menuGrid = document.createElement("section");
	menuGrid.classList.add("menu-items-grid");
	menuContentSection.appendChild(menuGrid); // add the grid to the content section

	// Loop through the menuItemsInfo array and create a menu card for each, then put that menu card on the grid
	menuItemsInfo.forEach(menuItem => {
		// Create the card
		const menuCard = document.createElement("div");
		menuCard.classList.add("menu-item-card");

		// Create the image container and image for menu card
		const imageContainer = document.createElement("div"); // Create div and img and add the classes
		imageContainer.classList.add("menu-item-image-container");

		const itemImageEl = document.createElement("img");
		itemImageEl.classList.add("menu-item-image");
		itemImageEl.src = menuItem['img-src']; // assign the image source to the img-src attribute of the current object in menuItemsInfo that we're looping through
		imageContainer.appendChild(itemImageEl) // add the item image to the image container

		// Create menu item info section of the menuCard
		const menuItemInfoSection = document.createElement("div");
		menuItemInfoSection.classList.add("menu-item-info");

		// Create title, description, price and elements with the menu order button
		const itemTitleEl = document.createElement("h2");
		itemTitleEl.classList.add("item-title-el");
		itemTitleEl.textContent = menuItem["menu-item-title"];
		menuItemInfoSection.appendChild(itemTitleEl);

		const itemDescriptionEl = document.createElement("p");
		itemDescriptionEl.classList.add("item-description-el");
		itemDescriptionEl.textContent = menuItem["item-description"];
		menuItemInfoSection.appendChild(itemDescriptionEl);

		const itemPriceEl = document.createElement("h3");
		itemPriceEl.classList.add("item-price-el");
		itemPriceEl.textContent = `Price: $${menuItem["item-price"]}`;
		menuItemInfoSection.appendChild(itemPriceEl);

		const menuOrderBtn = document.createElement("button");
		menuOrderBtn.classList.add("menu-order-btn");
		// Put a data attribute called itemID on the button; turn it into a string since data attribute have to be string values
		// This is so that in the future if you want a shopping-cart esque feature, you could have this attribute as a reference to the database
		// or something similar. 
		menuOrderBtn.setAttribute("data-itemID", menuItem["itemID"].toString());
		menuOrderBtn.textContent = "Order item";
		menuItemInfoSection.appendChild(menuOrderBtn);

		// Put the imageContainer and menuItemInfoSection inside our now completed menu card
		menuCard.appendChild(imageContainer);
		menuCard.appendChild(menuItemInfoSection);
		// Place the completed menu card inside the grid.
		menuGrid.appendChild(menuCard);
	});
	// Place the menu content section inside the container; then return containerSection
	containerSection.appendChild(menuContentSection);
	return containerSection;
};

export default createMenuContent;