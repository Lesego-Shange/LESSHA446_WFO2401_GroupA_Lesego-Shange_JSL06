// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread🍞", "Bruschetta🫓"],
    MainCourses: ["Margherita Pizza🍕", "Spaghetti Carbonara🍝"],
    Desserts: ["Tiramisu🍰", "Cheesecake🎂"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        
        // Create an element to represent the category
        const categoryElement = document.createElement("h3");
        
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        
        // Create an element to represent a list of items
        const itemListElement = document.createElement("ul");
        
        // Append a list of items element to the menu container
        menuContainer.appendChild(itemListElement);
        
        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            
            // Create a list item element
            const listItemElement = document.createElement("li");
            
            // Set the text content of the list item element to the item name
            listItemElement.textContent = item;
            
            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener("click", function() {
                addToOrder(item);
            });
            // Append the list item to the list of items
            itemListElement.appendChild(listItemElement);
        });
        menuContainer.appendChild(itemListElement);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    
    // Create a list item for the order
    const listItem = document.createElement("li");
    
    // Set the text content of the list item to the item name
    listItem.textContent = itemName;
    
    // Append the list item to the order items list
    orderItemsList.appendChild(listItem);
    
    // Calculate and update the total price
    const totalPrice = calculateTotalPrice();
    
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = totalPrice;
}

// Function to calculate the total price of the order
function calculateTotalPrice() {
    const orderItemsList = document.getElementById("order-items");
    const orderItems = orderItemsList.querySelectorAll("li");

    let totalPrice = 0;
    orderItems.forEach(item => {
        const itemName = item.textContent;
        
        totalPrice += getPriceForItem(itemName);
    });

    return totalPrice.toFixed(2);
}

// Function to get the price for a specific item
function getPriceForItem(itemName) {
    
    // For simplicity, we'll just return a hardcoded price for each item
    const itemPrices = {
        "Garlic Bread🍞": 5,
        "Bruschetta🫓": 6,
        "Margherita Pizza🍕": 10,
        "Spaghetti Carbonara🍝": 12,
        "Tiramisu🍰": 8,
        "Cheesecake🎂": 7
    };

    return itemPrices[itemName] || 0; // Return the price if found, otherwise default to 0
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
