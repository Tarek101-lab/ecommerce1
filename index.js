const products = [
    { id: 1, name: "T-Shirt", price: 29.99, category: "Clothing", image: "photos/shirt.jpg" },
    { id: 2, name: "Pants", price: 59.99, category: "Clothing", image: "photos/pants.jpg" },
    { id: 3, name: "Bag", price: 89.99, category: "Accessories", image: "photos/bag.jpg" },
    { id: 4, name: "Hoodie", price: 79.99, category: "Clothing", image: "photos/hoodie.jpg" },
    { id: 5, name: "Glasses", price: 149.99, category: "Accessories", image: "photos/glasses.jpg" },
    { id: 6, name: "Jacket", price: 119.99, category: "Clothing", image: "photos/jacket.jpg" },
    { id: 7, name: "Cap", price: 24.99, category: "Accessories", image: "photos/cap.jpg" },
    { id: 8, name: "Water Bottle", price: 34.99, category: "Accessories", image: "photos/water-bottle.jpg" },
    { id: 9, name: "Shoes", price: 99.99, category: "Footwear", image: "photos/shoes.jpg" }
];

let likes = {};
let basket = [];
let filteredProducts = [...products];

const productsContainer = document.getElementById('productsContainer');
const sortSelect = document.getElementById('sortSelect');
const basketContainer = document.getElementById('basketContainer');
const basketCount = document.getElementById('basketCount');

const loginBtnNav = document.getElementById('loginBtnNav');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

// Load basket from localStorage (JSON handling)
function loadBasket() {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
        basket = JSON.parse(savedBasket);
        updateBasketCount();
    }
}

// Save basket to localStorage (JSON handling)
function saveBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
}

// Update basket count display
function updateBasketCount() {
    basketCount.textContent = basket.length;
}

// Show notification with setTimeout
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Render products (using map and forEach)
function renderProducts() {
    console.log('Rendering products...');
    console.log('Filtered products:', filteredProducts);
    productsContainer.innerHTML = '';
    
    // Using map to transform products into DOM elements
    const productCards = filteredProducts.map(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const isLiked = likes[product.id] ? 'liked' : '';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x250?text=${encodeURIComponent(product.name)}'">
            <div class="product-header">
                <div class="product-name">${product.name}</div>
                <div class="heart-icon ${isLiked}" data-id="${product.id}">♥</div>
            </div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-basket-btn" data-id="${product.id}">Add to Basket</button>
        `;
        return card;
    });
    
    // Using forEach to append cards to container
    productCards.forEach(card => {
        productsContainer.appendChild(card);
    });
    
    console.log('Products rendered, total cards:', productCards.length);

    // Add event listeners for heart icons
    document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            likes[id] = !likes[id];
            this.classList.toggle('liked');
            const productName = products.find(p => p.id === id).name;
            showNotification(likes[id] ? `${productName} added to favorites!` : `${productName} removed from favorites!`);
        });
    });

    // Add event listeners for add to basket buttons
    document.querySelectorAll('.add-to-basket-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const product = products.find(p => p.id === id);
            
            // Check if item already exists in basket
            const existingItem = basket.find(item => item.id === id);
            
            if (existingItem) {
                // Increment quantity if item exists
                existingItem.quantity += 1;
            } else {
                // Add new item with quantity 1
                basket.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    image: product.image,
                    quantity: 1,
                    addedAt: new Date().toISOString()
                });
            }
            
            saveBasket();
            updateBasketCount();
            renderBasket();
            showNotification(`${product.name} added to basket!`);
        });
    });
}

// Display basket items
function renderBasket() {
    console.log('Rendering basket...');
    console.log('Basket contents:', basket);
    basketContainer.innerHTML = '';
    
    if (basket.length === 0) {
        basketContainer.innerHTML = '<p class="empty-basket">Your basket is empty</p>';
        console.log('Basket is empty, showing empty message');
        return;
    }
    
    const basketHTML = `
        <div class="basket-items">
            <h3>Basket (${basket.length} items)</h3>
            ${basket.map((item, index) => {
                const itemName = item.name || 'Unknown Item';
                const itemQuantity = item.quantity || 1;
                const itemTotal = (item.price * itemQuantity).toFixed(2);
                return `
                <div class="basket-item">
                    <img src="${item.image}" alt="${itemName}" class="basket-item-image" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="basket-item-details">
                        <div class="basket-item-name">${itemName}</div>
                        <div class="basket-item-price">$${item.price} x ${itemQuantity}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn qty-minus" data-index="${index}">-</button>
                        <span class="qty-display">${itemQuantity}</span>
                        <button class="qty-btn qty-plus" data-index="${index}">+</button>
                    </div>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            }).join('')}
            <div class="basket-total">Total: $${basket.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2)}</div>
            <button class="checkout-btn">Checkout</button>
        </div>
    `;
    
    basketContainer.innerHTML = basketHTML;
    
    // Add quantity increase button listeners
    document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (basket[index]) {
                basket[index].quantity = (basket[index].quantity || 1) + 1;
                saveBasket();
                renderBasket();
            }
        });
    });
    
    // Add quantity decrease button listeners
    document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (basket[index] && basket[index].quantity > 1) {
                basket[index].quantity -= 1;
                saveBasket();
                renderBasket();
            }
        });
    });
    
    // Add remove button listeners (using for loop)
    const removeButtons = document.querySelectorAll('.remove-btn');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const itemName = basket[index].name;
            basket.splice(index, 1);
            saveBasket();
            updateBasketCount();
            renderBasket();
            showNotification(`${itemName} removed from basket!`);
        });
    }
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (basket.length > 0) {
                showNotification('Order placed successfully!');
                setTimeout(() => {
                    basket = [];
                    saveBasket();
                    updateBasketCount();
                    renderBasket();
                }, 1500);
            }
        });
    }
}

// Toggle basket visibility
const basketIcon = document.querySelector('.cart-icon');
if (basketIcon) {
    basketIcon.addEventListener('click', function() {
        basketContainer.classList.toggle('show');
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchTerm = this.value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    applySort();
    renderProducts();
});

// Sort functionality
function applySort() {
    const sortValue = sortSelect.value;
    switch(sortValue) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'category':
            filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
            break;
    }
}

sortSelect.addEventListener('change', function() {
    applySort();
    renderProducts();
});

// Initialize
console.log('JavaScript loaded successfully');
console.log('Products array:', products);
loadBasket();
checkUserLogin();
renderProducts();
renderBasket();
console.log('Initialization complete');

// Login button functionality


console.log('Login button element:', loginBtnNav);

function checkUserLogin() {
    const user = localStorage.getItem('user');
    if (user) {
        try {
            const userData = JSON.parse(user);
            loginBtnNav.style.display = 'none';
            userInfo.style.display = 'flex';
            userName.textContent = `Welcome, ${userData.email}`;
        } catch (e) {
            console.log('Error parsing user data');
        }
    } else {
        loginBtnNav.style.display = 'block';
        userInfo.style.display = 'none';
    }
}

if (loginBtnNav) {
    loginBtnNav.addEventListener('click', function() {
        console.log('Login button clicked');
        window.location.href = 'login.html';
    });
} else {
    console.log('Login button not found!');
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('user');
        checkUserLogin();
        showNotification('Logged out successfully!');
    });
}