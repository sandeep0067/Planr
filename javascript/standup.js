
// Hide main content initially
document.getElementById('mainContent').style.display = 'none';
// Welcome Screen Functionality
document.addEventListener('DOMContentLoaded', function() {
const welcomeScreen = document.getElementById('welcomeScreen');
const continueBtn = document.getElementById('continueBtn');
const optionCards = document.querySelectorAll('.option-card');
const genreBtns = document.querySelectorAll('.genre-btn');

let selectedComedians = [];
let selectedGenres = [];

// Hide main content initially
document.getElementById('mainContent').style.display = 'none';

// Comedian selection
optionCards.forEach(card => {
card.addEventListener('click', function() {
const comedian = this.dataset.comedian;

if (this.classList.contains('selected')) {
    this.classList.remove('selected');
    selectedComedians = selectedComedians.filter(c => c !== comedian);
} else {
    this.classList.add('selected');
    selectedComedians.push(comedian);
}
});
});

// Genre selection
genreBtns.forEach(btn => {
btn.addEventListener('click', function() {
const genre = this.dataset.genre;

if (this.classList.contains('selected')) {
    this.classList.remove('selected');
    selectedGenres = selectedGenres.filter(g => g !== genre);
} else {
    this.classList.add('selected');
    selectedGenres.push(genre);
}
});
});

// Continue to main site
continueBtn.addEventListener('click', function() {
// Save preferences (in a real app, you might send to server)
localStorage.setItem('comedyPreferences', JSON.stringify({
comedians: selectedComedians,
genres: selectedGenres
}));

// Hide welcome screen
welcomeScreen.style.opacity = '0';
welcomeScreen.style.pointerEvents = 'none';
welcomeScreen.style.transition = 'opacity 0.5s ease';

// Show main content
document.getElementById('mainContent').style.display = 'block';

// In a real app, you could use these preferences to:
// - Highlight recommended shows
// - Filter comedians
// - Personalize the experience
});

// Optional: Skip if they've done this before
if (localStorage.getItem('comedyPreferences')) {
welcomeScreen.style.display = 'none';
document.getElementById('mainContent').style.display = 'block';
}
});
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Show Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const showCards = document.querySelectorAll('.show-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        showCards.forEach(card => {
            if (filter === 'all' || card.dataset.location === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Randomly book some seats (10 seats in this case)
    const allSeats = document.querySelectorAll('.seat:not(.aisle)');
    const bookedSeats = [];
    
    // Book random seats
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * allSeats.length);
        if (!allSeats[randomIndex].classList.contains('booked')) {
            allSeats[randomIndex].classList.add('booked');
            bookedSeats.push(allSeats[randomIndex].dataset.seat);
        } else {
            i--; // Try again if seat was already booked
        }
    }
    
    // Seat selection logic
    let selectedSeats = [];
    const ticketCountElement = document.getElementById('ticket-count');
    const totalPriceElement = document.getElementById('total-price');
    const ticketSelect = document.getElementById('tickets');
    const pricePerTicket = 799;
    
    // Update max tickets based on seat selection
    function updateMaxTickets() {
        const maxTickets = 5 - selectedSeats.length;
        Array.from(ticketSelect.options).forEach(option => {
            if (option.value !== '') {
                option.disabled = parseInt(option.value) > maxTickets;
            }
        });
        
        if (parseInt(ticketSelect.value) > maxTickets) {
            ticketSelect.value = '';
        }
    }
    
    // Handle seat clicks
    allSeats.forEach(seat => {
        seat.addEventListener('click', function() {
            if (this.classList.contains('booked')) return;
            
            if (this.classList.contains('selected')) {
                // Deselect seat
                this.classList.remove('selected');
                selectedSeats = selectedSeats.filter(s => s !== this.dataset.seat);
            } else {
                // Select seat if we haven't reached max
                if (selectedSeats.length < 5) {
                    this.classList.add('selected');
                    selectedSeats.push(this.dataset.seat);
                } else {
                    alert('You can select a maximum of 5 seats');
                }
            }
            
            // Update ticket count and total
            ticketCountElement.textContent = selectedSeats.length;
            totalPriceElement.textContent = `₹${selectedSeats.length * pricePerTicket}`;
            
            // Update max tickets in dropdown
            updateMaxTickets();
        });
    });
    
    // Handle ticket dropdown changes
    ticketSelect.addEventListener('change', function() {
        const numTickets = parseInt(this.value) || 0;
        
        // Clear selections if number is reduced
        while (selectedSeats.length > numTickets) {
            const seatToRemove = selectedSeats.pop();
            document.querySelector(`.seat[data-seat="${seatToRemove}"]`).classList.remove('selected');
        }
        
        // Update display
        ticketCountElement.textContent = selectedSeats.length;
        totalPriceElement.textContent = `₹${selectedSeats.length * pricePerTicket}`;
    });
    
    // Reset selections when modal is closed
    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Clear selections
            selectedSeats.forEach(seat => {
                document.querySelector(`.seat[data-seat="${seat}"]`).classList.remove('selected');
            });
            selectedSeats = [];
            
            // Reset counters
            ticketCountElement.textContent = '0';
            totalPriceElement.textContent = '₹0';
            ticketSelect.value = '';
        });
    });
    
    // Include selected seats in booking confirmation
    document.querySelector('.confirm-booking').addEventListener('click', function(e) {
        e.preventDefault();
        
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat');
            return;
        }
        
        // [Rest of your existing booking confirmation logic]
        // Make sure to include the selectedSeats array in your confirmation message
        const confirmationMessage = `Your tickets for ${showNameInput.value} have been booked successfully. 
            Seats: ${selectedSeats.join(', ')}. 
            A confirmation has been sent to your email.`;
        document.getElementById('confirmationMessage').textContent = confirmationMessage;
        
        // [Rest of your existing confirmation logic]
    });
});

// Booking Modal
const bookingModal = document.getElementById('bookingModal');
const confirmationModal = document.getElementById('confirmationModal');
const bookBtns = document.querySelectorAll('.book-btn');
const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
const showNameInput = document.getElementById('showName');
const showDateInput = document.getElementById('showDate');
const confirmBookingBtn = document.querySelector('.confirm-booking');
const bookingForm = document.querySelector('.booking-form');

// Open booking modal
bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Set show name in modal
        const showName = btn.dataset.show || btn.dataset.comedian;
        showNameInput.value = showName;
        
        // For show cards, get the date as well
        if (btn.dataset.show) {
            const showCard = btn.closest('.show-card');
            const showDate = showCard.querySelector('.show-date span').textContent;
            showDateInput.value = showDate;
        } else {
            showDateInput.value = 'Date to be selected';
        }
        
        bookingModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modals
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        bookingModal.style.display = 'none';
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
confirmBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Simple validation
    let isValid = true;
    const inputs = bookingForm.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        if (input.required && !input.value) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (isValid) {
        // Generate random booking ID
        const bookingId = 'LF' + new Date().getFullYear() + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('bookingId').textContent = bookingId;
        
        // Set confirmation message
        const confirmationMessage = `Your tickets for ${showNameInput.value} have been booked successfully. A confirmation has been sent to your email.`;
        document.getElementById('confirmationMessage').textContent = confirmationMessage;
        
        // Show confirmation modal
        bookingModal.style.display = 'none';
        confirmationModal.style.display = 'block';
        
        // Reset form
        bookingForm.reset();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Gift Card Purchase Functionality
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const customAmountBtn = document.getElementById('add-custom-amount');
const customAmountInput = document.getElementById('custom-amount');
const checkoutBtn = document.getElementById('checkout-gift-card');
let selectedGiftCardAmount = 0;

// Standard gift card amounts
addToCartBtns.forEach(btn => {
    if (btn.id !== 'add-custom-amount') {
        btn.addEventListener('click', () => {
            selectedGiftCardAmount = parseInt(btn.dataset.value);
            alert(`₹${selectedGiftCardAmount} gift card added to cart!`);
        });
    }
});

// Custom amount
customAmountBtn.addEventListener('click', () => {
    const amount = parseInt(customAmountInput.value);
    if (amount >= 500) {
        selectedGiftCardAmount = amount;
        alert(`₹${selectedGiftCardAmount} gift card added to cart!`);
    } else {
        alert('Minimum amount is ₹500');
    }
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (selectedGiftCardAmount > 0) {
        alert(`Proceeding to checkout with ₹${selectedGiftCardAmount} gift card`);
        // In a real implementation, this would redirect to payment page
    } else {
        alert('Please select a gift card amount first');
    }
});

// Gift Card Redemption in Booking Modal
const applyGiftCardBtn = document.getElementById('applyGiftCard');
const giftCardCodeInput = document.getElementById('giftCardCode');
const giftCardMessage = document.getElementById('giftCardMessage');

applyGiftCardBtn.addEventListener('click', () => {
    const code = giftCardCodeInput.value.trim();
    
    if (code === '') {
        giftCardMessage.textContent = 'Please enter a gift card code';
        giftCardMessage.style.color = 'var(--primary)';
        return;
    }
    
    // In a real implementation, you would validate with your backend
    // This is just a simulation
    if (code.length === 16 && code.startsWith('LFGC')) {
        giftCardMessage.textContent = 'Gift card applied successfully! ₹1000 credit added.';
        giftCardMessage.style.color = 'var(--accent)';
    } else {
        giftCardMessage.textContent = 'Invalid gift card code. Please try again.';
        giftCardMessage.style.color = 'var(--primary)';
    }
});
// Meal Booking Functionality
const mealCheckboxes = document.querySelectorAll('.meal-checkbox');
const selectedMealsList = document.getElementById('selectedMealsList');
const mealTotalPrice = document.getElementById('mealTotalPrice');
let selectedMeals = [];

// Handle meal selection
mealCheckboxes.forEach(checkbox => {
checkbox.addEventListener('change', function() {
const mealName = this.dataset.meal;
const mealPrice = parseInt(this.dataset.price);

if (this.checked) {
    selectedMeals.push({
        name: this.nextElementSibling.textContent,
        price: mealPrice
    });
} else {
    selectedMeals = selectedMeals.filter(meal => 
        meal.name !== this.nextElementSibling.textContent
    );
}

updateMealSummary();
});
});

// Update meal summary display
function updateMealSummary() {
selectedMealsList.innerHTML = '';
let total = 0;

selectedMeals.forEach(meal => {
const li = document.createElement('li');
li.textContent = `${meal.name} - ₹${meal.price}`;
selectedMealsList.appendChild(li);
total += meal.price;
});

mealTotalPrice.textContent = `₹${total}`;

// Update the overall total in the booking summary
updateBookingTotal();
}

// Update the overall booking total (combines seats and meals)
function updateBookingTotal() {
const seatPrice = parseInt(document.getElementById('ticket-count').textContent) * 799 || 0;
const mealPrice = selectedMeals.reduce((sum, meal) => sum + meal.price, 0);
const totalPrice = seatPrice + mealPrice;

document.getElementById('total-price').textContent = `₹${totalPrice}`;
}

// Reset meal selections when modal is closed
document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
btn.addEventListener('click', function() {
// Clear meal selections
mealCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
});
selectedMeals = [];
selectedMealsList.innerHTML = '';
mealTotalPrice.textContent = '₹0';
});
});

// Include meals in booking confirmation
document.querySelector('.confirm-booking').addEventListener('click', function(e) {
e.preventDefault();

// [Your existing validation code...]

if (isValid) {
// Generate random booking ID
const bookingId = 'LF' + new Date().getFullYear() + Math.floor(1000 + Math.random() * 9000);
document.getElementById('bookingId').textContent = bookingId;

// Build meal summary text
let mealSummary = 'No food/drinks selected';
if (selectedMeals.length > 0) {
    mealSummary = selectedMeals.map(meal => 
        `${meal.name} (₹${meal.price})`
    ).join(', ');
}

// Set confirmation message with meal info
const confirmationMessage = `Your tickets for ${showNameInput.value} have been booked successfully. 
    Seats: ${selectedSeats.join(', ')}. 
    Food/Drinks: ${mealSummary}.
    A confirmation has been sent to your email.`;
document.getElementById('confirmationMessage').textContent = confirmationMessage;

// Show confirmation modal
bookingModal.style.display = 'none';
confirmationModal.style.display = 'block';

// Reset form
bookingForm.reset();
}
});
// Membership System
document.addEventListener('DOMContentLoaded', function() {
// Open membership modal when join buttons are clicked
document.querySelectorAll('.join-btn').forEach(btn => {
btn.addEventListener('click', function() {
    const tier = this.dataset.tier;
    document.getElementById('selectedTier').value = tier;
    document.getElementById('membershipModalTitle').textContent = 
        `Join LaughFactory ${tier.charAt(0).toUpperCase() + tier.slice(1)} Membership`;
    
    // Show payment section for paid tiers
    if (tier !== 'basic') {
        document.getElementById('paymentSection').style.display = 'block';
    } else {
        document.getElementById('paymentSection').style.display = 'none';
    }
    
    document.getElementById('membershipModal').style.display = 'block';
});
});

// Handle payment method selection
document.querySelectorAll('input[name="payment"]').forEach(radio => {
radio.addEventListener('change', function() {
    // Hide all payment details first
    document.querySelectorAll('.payment-details').forEach(detail => {
        detail.style.display = 'none';
    });
    
    // Show selected payment method details
    if (this.value === 'card') {
        document.getElementById('cardDetails').style.display = 'block';
    }
    // Add other payment methods here as needed
});
});

// Complete membership signup
document.getElementById('confirmMembership').addEventListener('click', function() {
const tier = document.getElementById('selectedTier').value;
const name = document.getElementById('mName').value;
const email = document.getElementById('mEmail').value;

// Simple validation
if (!name || !email || !document.getElementById('agreeTerms').checked) {
    alert('Please fill all required fields');
    return;
}

// In a real app, you would send this to your backend
localStorage.setItem('currentUser', JSON.stringify({
    name: name,
    email: email,
    tier: tier,
    joined: new Date().toISOString()
}));

// Close modal and update UI
document.getElementById('membershipModal').style.display = 'none';
updateUserStatus();
alert(`Welcome to LaughFactory ${tier} membership, ${name}!`);
});

// Login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
const email = document.getElementById('loginEmail').value;
const password = document.getElementById('loginPassword').value;

// Simple validation
if (!email || !password) {
    alert('Please enter both email and password');
    return;
}

// In a real app, you would verify credentials with your backend
// For demo, we'll just check if the user exists in localStorage
const user = JSON.parse(localStorage.getItem('currentUser'));

if (user && user.email === email) {
    document.getElementById('loginModal').style.display = 'none';
    updateUserStatus();
    alert(`Welcome back, ${user.name}!`);
} else {
    alert('Invalid credentials. Please try again or sign up.');
}
});

// Update UI based on login state
function updateUserStatus() {
const user = JSON.parse(localStorage.getItem('currentUser'));
const nav = document.querySelector('.nav-links');

if (user) {
    // Remove login/signup buttons if they exist
    const existingProfile = document.querySelector('.user-profile');
    if (existingProfile) existingProfile.remove();
    
    // Add user profile to navbar
    const profileHtml = `
        <li class="user-profile">
            <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
            <span>${user.name.split(' ')[0]}</span>
            <div class="user-menu">
                <a href="#"><i class="fas fa-user"></i> My Profile</a>
                <a href="#"><i class="fas fa-ticket-alt"></i> My Tickets</a>
                <a href="#"><i class="fas fa-crown"></i> Membership (${user.tier})</a>
                <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </li>
    `;
    
    nav.insertAdjacentHTML('beforeend', profileHtml);
    
    // Add logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        location.reload();
    });
    
    // Toggle user menu
    document.querySelector('.user-profile').addEventListener('click', function() {
        document.querySelector('.user-menu').classList.toggle('active');
    });
    
    // Apply membership discounts to shows
    applyMembershipDiscounts(user.tier);
}
}

// Apply membership discounts to show prices
function applyMembershipDiscounts(tier) {
const discount = {
    'basic': 0,
    'premium': 15,
    'vip': 25
}[tier];

if (discount > 0) {
    document.querySelectorAll('.price').forEach(priceElement => {
        const originalPrice = parseInt(priceElement.textContent.replace(/[^\d]/g, ''));
        const discountedPrice = originalPrice * (1 - discount/100);
        priceElement.textContent = `₹${Math.floor(discountedPrice)} (${discount}% off)`;
        priceElement.style.color = 'var(--accent)';
    });
}
}

// Initialize user status on page load
updateUserStatus();

// Add login button to nav if not logged in
if (!localStorage.getItem('currentUser')) {
const nav = document.querySelector('.nav-links');
const loginHtml = `<li><a href="#" id="navLogin">Login</a></li>`;
nav.insertAdjacentHTML('beforeend', loginHtml);

document.getElementById('navLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginModal').style.display = 'block';
});
}
});
