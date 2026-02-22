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
├── debug.html          # Diagnostic page for testing
├── .gitignore          # Git ignore rules
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

## Troubleshooting

### If products don't show up:
1. **Check browser console** (F12 → Console tab) for JavaScript errors
2. **Make sure all files are uploaded** to GitHub and committed
3. **Check file paths** - ensure `index.js` and `index.css` are in the same directory as `index.html`
4. **Clear browser cache** and refresh the page

### If login doesn't work:
1. **Check that `login.html` is uploaded** to your GitHub repository
2. **Verify file paths** are correct
3. **Open browser console** to see if there are any JavaScript errors

### If cart doesn't show messages:
1. **Click the cart icon** (🛒) to open the cart dropdown
2. **Check browser console** for any errors
3. **Try adding items** to see if the cart updates

### Common Issues:
- **GitHub Pages might take time** to update after pushing changes
- **File paths are case-sensitive** on GitHub Pages
- **JavaScript might be blocked** by browser security settings
- **localStorage might not work** in some browser privacy modes

## Quick Test

To test if JavaScript is working, open your browser's developer console (F12) and look for these messages:
- "HTML script tag working"
- "JavaScript loaded successfully"
- "Products array: [9 items]"
- "Rendering products..."
- "Initialization complete"

If you don't see these messages, there might be a JavaScript loading issue.

## GitHub Pages Deployment

This project is fully compatible with GitHub Pages. Recent updates ensure proper functionality when deployed:

### Recent Fixes Applied:
- ✅ **Image URLs**: Updated from local paths (`photos/*.jpg`) to working Unsplash URLs
- ✅ **Debug Logging**: Added console.log statements throughout JavaScript for troubleshooting
- ✅ **Fallback Content**: Added basic HTML product cards in case JavaScript fails to load
- ✅ **Diagnostic Page**: Created `debug.html` to test JavaScript, localStorage, and network connectivity

### Deployment Steps:
1. Push all files to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Visit your GitHub Pages URL
4. Open browser console (F12) to verify debug messages appear
5. Test functionality: search, sort, cart, login

### Testing Your Deployment:
1. Visit `debug.html` on your GitHub Pages site to verify JavaScript works
2. Check browser console for debug messages like "JavaScript loaded successfully"
3. If products don't appear, the fallback HTML content will still show basic items
