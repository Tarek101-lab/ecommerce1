# E-Commerce Website

A modern, responsive e-commerce shopping website built with vanilla HTML, CSS, and JavaScript.

## Features

- 🛍️ **Product Catalog**: Browse 9 different products (T-Shirt, Pants, Bag, Hoodie, Glasses, Jacket, Cap, Water Bottle, Shoes)
- 🔍 **Search Functionality**: Search products by name or category in real-time
- 🔀 **Sort & Filter**: Sort by name, price (low to high, high to low), or category
- ❤️ **Favorites**: Mark items as favorites with heart icon (turns red when liked)
- 🛒 **Shopping Cart**: Add items to cart with quantity management (+/- buttons)
- 👤 **User Authentication**: Login and signup pages with localStorage persistence
- 💾 **Data Persistence**: All cart and user data saved in browser localStorage using JSON
- 📱 **Responsive Design**: Clean, modern UI with 3-item grid layout
- 🔔 **Notifications**: Toast notifications for user actions

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox & Grid layouts
- **JavaScript (ES6+)**: 
  - `localStorage` for data persistence
  - `JSON.parse()` and `JSON.stringify()` for data handling
  - Array methods: `map()`, `forEach()`, `filter()`, `reduce()`
  - `setTimeout()` for notifications and redirects
  - Event listeners and DOM manipulation

## Project Structure

```
project5/
├── index.html          # Main shopping page
├── index.css           # Styling for shopping page
├── index.js            # Shopping functionality
├── login.html          # Login page
├── login.css           # Login page styling
├── login.js            # Login functionality
├── signup.html         # Sign up page
├── signup.css          # Sign up page styling
├── signup.js           # Sign up functionality
└── README.md           # This file
```

## Getting Started

1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. Start shopping!

## Usage

### Shopping
1. Browse products or use the search bar
2. Click a product's heart icon to add to favorites
3. Click "Add to Basket" to add items to your cart
4. Click the cart icon (🛒) to view your basket
5. Use +/- buttons to adjust quantities
6. Click "Checkout" to complete your purchase

### User Account
1. Click "Login" to log in with existing credentials
2. Click "Sign up here" to create a new account
3. Your login session persists across page refreshes
4. Click "Logout" to clear your session

## Key Features Explained

### Data Persistence
- **Cart Data**: Saved to `localStorage` as JSON. Survives page refreshes
- **User Data**: Login information stored in `localStorage` after authentication
- **Favorites**: Stored in `likes` object (session-based)

### JavaScript Methods Used
- `map()`: Transform product data into DOM elements
- `forEach()`: Attach event listeners to elements
- `filter()`: Search and filter products
- `reduce()`: Calculate cart totals
- `setTimeout()`: Delayed notifications and redirects
- `JSON.parse()`: Read data from localStorage
- `JSON.stringify()`: Save data to localStorage

## Future Enhancements

- Backend API integration for product database
- Payment gateway integration
- Order history tracking
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard

## License

MIT License - Feel free to use this project

## Author

Created as a modern e-commerce web application example.
