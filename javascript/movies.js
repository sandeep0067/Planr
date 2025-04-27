  // Movie Data with Indian prices (in Rupees)
  const movies = [
    {
        id: 1,
        title: "Akaal",
        genre: "Action",
        rating: 8.4,
        price: 180,
        poster: "https://th.bing.com/th/id/OIP.DYu1tC2Eiybn3ffHpnTJqgHaJL?w=154&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "An intense action thriller about a man's quest for justice.",
        duration: "2h 15m",
        nowShowing: true
    },
    {
        id: 2,
        title: "Chhaava",
        genre: "Action",
        rating: 7.9,
        price: 200,
        poster: "https://th.bing.com/th/id/OIP.qrMAq5b-z643Gk5KBpJ3ZAHaJP?w=160&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A historical action drama set in ancient times.",
        duration: "2h 30m",
        nowShowing: true
    },
    {
        id: 3,
        title: "Jaat",
        genre: "Sci-Fi",
        rating: 8.0,
        price: 150,
        poster: "https://th.bing.com/th/id/OIP.0xeSbwlkgYICEP7Ct2FMrwAAAA?w=204&h=165&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A futuristic sci-fi adventure exploring human identity.",
        duration: "1h 55m",
        nowShowing: true
    },
    {
        id: 4,
        title: "The Diplomat",
        genre: "Action",
        rating: 7.3,
        price: 220,
        poster: "https://th.bing.com/th/id/OIP.RJCVBZIkZDDGNxk2h9zZmQHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A political action thriller about international espionage.",
        duration: "2h 5m",
        nowShowing: true
    },
    {
        id: 5,
        title: "Deva",
        genre: "Action",
        rating: 8.6,
        price: 250,
        poster: "https://th.bing.com/th/id/OIP.3yrKyHjOaqn5WnNyE7bVOQHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A high-octane action film with supernatural elements.",
        duration: "2h 25m",
        nowShowing: true
    },
    {
        id: 6,
        title: "Azaad",
        genre: "Action",
        rating: 6.7,
        price: 120,
        poster: "https://th.bing.com/th/id/OIP.DyPCHC0GElG8vQho1KjUnwAAAA?w=117&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A story of freedom and rebellion in a dystopian world.",
        duration: "1h 50m",
        nowShowing: true
    },
    {
        id: 7,
        title: "Game Changer",
        genre: "Sci-Fi",
        rating: 6.7,
        price: 170,
        poster: "https://th.bing.com/th/id/OIP.upYBc5-oQdh-s1k8Vzec1wHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A sci-fi thriller about virtual reality gone wrong.",
        duration: "2h 10m",
        nowShowing: true
    },
    {
        id: 8,
        title: "Be Happy",
        genre: "Drama",
        rating: 7.5,
        price: 130,
        poster: "https://th.bing.com/th/id/OIP.2jAnW00x3noW_0KSqyGpPAHaFj?w=195&h=146&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "An inspiring drama about finding happiness in small things.",
        duration: "1h 45m",
        nowShowing: true
    },
    {
        id: 9,
        title: "Kesari Chapter 2",
        genre: "Action",
        rating: 8.2,
        price: 280,
        poster: "https://th.bing.com/th/id/OIP.H3QSHDe8hF7d2X7p2j-lHgHaD4?w=344&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "The sequel to the hit action film about bravery and sacrifice.",
        duration: "2h 35m",
        nowShowing: true
    },
    {
        id: 10,
        title: "Sikandar",
        genre: "Action",
        rating: 7.8,
        price: 210,
        poster: "https://th.bing.com/th/id/OIP.cpHfv7ACUJZK_JRY-IyN0AHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "A historical action film about a legendary warrior.",
        duration: "2h 20m",
        nowShowing: true
    },
    {
        id: 11,
        title: "Bhool Chuk Maaf",
        genre: "Comedy",
        rating: null,
        price: null,
        poster: "https://tse3.mm.bing.net/th?id=OIP.T295t7H2kjRPLbm_3bAY8QAAAA&w=200&h=300&c=7",
        description: "A hilarious comedy about mistaken identities.",
        duration: "1h 50m",
        releaseDate: "May 6, 2023",
        nowShowing: false
    },
    {
        id: 12,
        title: "Baaghi 4",
        genre: "Action",
        rating: null,
        price: null,
        poster: "https://th.bing.com/th/id/OIP.1eHtFjPJwguTIgMh4LlhyQHaEL?w=297&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        description: "The sequel to the blockbuster action film about a daring heist.",
        duration: "2h 15m",
        releaseDate: "June 10, 2023",
        nowShowing: false
    }
];

// Theater Data
const theaters = [
    {
        id: 1,
        name: "PVR Cinemas",
        location: "Elante Mall, Industrial Area Phase-I, Chandigarh",
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"]
    },
    {
        id: 2,
        name: "Cinépolis Jagat",
        location: "TDI Mall, Sector 17, Chandigarh",
        showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"]
    },
    {
        id: 3,
        name: "Wave Cinemas",
        location: "City Emporium Mall, Industrial Area Phase-I, Chandigarh",
        showtimes: ["9:30 AM", "12:45 PM", "4:15 PM", "7:45 PM"]
    },
    {
        id: 4,
        name: "DT Cinemas",
        location: "IT Park, Chandigarh",
        showtimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"]
    },
    {
        id: 5,
        name: "Fun Cinemas",
        location: "Dhillon Complex, Manimajra, Chandigarh",
        showtimes: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"]
    }
];

// Offers Data
const offers = [
    {
        id: 1,
        title: "Weekday Special",
        description: "Get 20% off on all movie tickets from Monday to Thursday",
        code: "WEEKDAY20",
        validUntil: "May 31, 2025"
    },
    {
        id: 2,
        title: "Student Discount",
        description: "Students get 25% off with valid ID",
        code: "STUDENT25",
        validUntil: "Ongoing"
    },
    {
        id: 3,
        title: "Family Package",
        description: "Buy 3 tickets and get 1 free for family movies",
        code: "FAMILY4",
        validUntil: "April 31, 2025"
    },
    {
        id: 4,
        title: "Early Bird Special",
        description: "50% off on shows before 12 PM",
        code: "EARLY50",
        validUntil: "June 30, 2025"
    }
];

// DOM Elements
const nowShowingSection = document.getElementById('now-showing');
const comingSoonSection = document.getElementById('coming-soon');
const theatersSection = document.getElementById('theaters');
const offersSection = document.getElementById('offers');
const movieGrid = document.querySelector('#now-showing .movie-grid');
const comingSoonGrid = document.querySelector('#coming-soon .movie-grid');
const theaterList = document.getElementById('theaterList');
const offersList = document.getElementById('offersList');
const modal = document.getElementById('bookingModal');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close-btn, .login-close');
const bookBtns = document.querySelectorAll('.book-btn');
const navLinks = document.querySelectorAll('.nav-link');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPassword = document.getElementById('forgotPassword');
const notification = document.getElementById('notification');
const theaterSelection = document.getElementById('theaterSelection');
const seatsContainer = document.getElementById('seatsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const stepTheater = document.getElementById('stepTheater');
const stepSeats = document.getElementById('stepSeats');
const stepConfirm = document.getElementById('stepConfirm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const userActions = document.getElementById('userActions');
const loginSpinner = document.getElementById('loginSpinner');
const loginText = document.getElementById('loginText');
const registerSpinner = document.getElementById('registerSpinner');
const registerText = document.getElementById('registerText');

// Booking data
let bookingData = {
    movie: null,
    theater: null,
    showtime: null,
    seats: [],
    pricePerTicket: 0,
    total: 0,
    currentStep: 1
};

// Current user
let currentUser = null;

// Initialize the page
function init() {
    renderMovies();
    renderTheaters();
    renderOffers();
    setupEventListeners();
    checkUser();
}

// Check if user is logged in
function checkUser() {
    // In a real app, this would check localStorage or cookies
    if (currentUser) {
        renderUserDropdown();
    }
}

// Render user dropdown
function renderUserDropdown() {
    userActions.innerHTML = `
        <div class="user-dropdown">
            <div class="user-dropdown-btn">
                <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                <span>${currentUser.name.split(' ')[0]}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="dropdown-content">
                <a href="#"><i class="fas fa-user"></i> My Profile</a>
                <a href="#"><i class="fas fa-ticket-alt"></i> My Bookings</a>
                <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </div>
    `;
    
    // Add logout event listener
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

// Logout function
function logout() {
    currentUser = null;
    userActions.innerHTML = `
        <button class="btn btn-outline" id="loginBtn">
            <i class="fas fa-sign-in-alt"></i>
            Sign In
        </button>
        <button class="btn btn-primary" id="registerBtn">
            <i class="fas fa-user-plus"></i>
            Register
        </button>
    `;
    
    // Reinitialize event listeners
    document.getElementById('loginBtn').addEventListener('click', () => loginModal.style.display = 'block');
    document.getElementById('registerBtn').addEventListener('click', () => registerModal.style.display = 'block');
    
    showNotification('You have been logged out');
}

// Render movies
function renderMovies() {
    // Clear existing content
    movieGrid.innerHTML = '';
    comingSoonGrid.innerHTML = '';
    
    // Render now showing movies
    movies.filter(movie => movie.nowShowing).forEach(movie => {
        movieGrid.appendChild(createMovieCard(movie));
    });
    
    // Render coming soon movies
    movies.filter(movie => !movie.nowShowing).forEach(movie => {
        comingSoonGrid.appendChild(createComingSoonCard(movie));
    });
}

// Create movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title} Poster" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.genre} • ${movie.duration}</span>
                <span class="movie-rating">
                    <i class="fas fa-star"></i>
                    ${movie.rating}
                </span>
            </div>
            <div class="movie-actions">
                <span class="price">₹${movie.price}</span>
                <button class="btn btn-primary btn-sm book-btn" data-movie-id="${movie.id}">
                    <i class="fas fa-ticket-alt"></i>
                    Book Now
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Create coming soon card
function createComingSoonCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title} Poster" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.genre} • ${movie.duration}</span>
                <span>${movie.releaseDate}</span>
            </div>
            <div class="movie-actions">
                <button class="btn btn-outline btn-sm notify-btn" data-movie-id="${movie.id}" style="border-color: #6ba8e6; color: #6ba8e6;">
                    <i class="fas fa-bell"></i>
                    Notify Me
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Render theaters
function renderTheaters() {
    theaterList.innerHTML = '';
    
    theaters.forEach(theater => {
        const theaterElement = document.createElement('div');
        theaterElement.className = 'theater-card';
        theaterElement.style.background = '#2d2d2d';
        theaterElement.style.padding = '1rem';
        theaterElement.style.borderRadius = '8px';
        theaterElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        theaterElement.style.marginBottom = '1rem';
        
        theaterElement.innerHTML = `
            <h3><i class="fas fa-map-marker-alt"></i> ${theater.name}</h3>
            <p><i class="fas fa-location-arrow"></i> ${theater.location}</p>
            <div class="showtimes" style="margin-top: 0.5rem;">
                ${theater.showtimes.map(time => `
                    <span class="showtime" style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
                        <i class="far fa-clock"></i> ${time}
                    </span>
                `).join('')}
            </div>
        `;
        
        theaterList.appendChild(theaterElement);
    });
}

// Render offers
function renderOffers() {
    offersList.innerHTML = '';
    
    offers.forEach(offer => {
        const offerElement = document.createElement('div');
        offerElement.className = 'offer-card';
        offerElement.style.background = '#2d2d2d';
        offerElement.style.padding = '1rem';
        offerElement.style.borderRadius = '8px';
        offerElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        offerElement.style.marginBottom = '1rem';
        
        offerElement.innerHTML = `
            <h3><i class="fas fa-tag"></i> ${offer.title}</h3>
            <p>${offer.description}</p>
            <div style="margin-top: 0.5rem;">
                <strong><i class="fas fa-ticket-alt"></i> Code:</strong> ${offer.code}<br>
                <strong><i class="far fa-calendar-alt"></i> Valid Until:</strong> ${offer.validUntil}
            </div>
            <button class="btn btn-primary btn-sm" style="margin-top: 0.5rem;" data-offer-code="${offer.code}">
                <i class="far fa-copy"></i> Copy Code
            </button>
        `;
        
        offersList.appendChild(offerElement);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Hide all sections
            nowShowingSection.style.display = 'none';
            comingSoonSection.style.display = 'none';
            theatersSection.style.display = 'none';
            offersSection.style.display = 'none';
            
            // Show selected section
            if (section === 'now-showing') {
                nowShowingSection.style.display = 'block';
                comingSoonSection.style.display = 'block';
            } else if (section === 'theaters') {
                theatersSection.style.display = 'block';
            } else if (section === 'offers') {
                offersSection.style.display = 'block';
            }
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.classList.remove('active');
        }
    });
    
    // Login/Register buttons
    loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
    registerBtn.addEventListener('click', () => registerModal.style.display = 'block');
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'none';
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            resetBookingData();
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            resetBookingData();
        }
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
    
    // Login form
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Show loading spinner
        loginText.style.display = 'none';
        loginSpinner.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            // Simple validation
            if (email && password) {
                currentUser = { 
                    email,
                    name: email.split('@')[0] // Generate a simple name from email
                };
                showNotification('Login successful!');
                loginModal.style.display = 'none';
                renderUserDropdown();
            } else {
                showNotification('Please fill in all fields', 'error');
            }
            
            // Hide loading spinner
            loginText.style.display = 'inline';
            loginSpinner.style.display = 'none';
        }, 1000);
    });
    
    // Register form
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerConfirm').value;
        
        // Show loading spinner
        registerText.style.display = 'none';
        registerSpinner.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            // Simple validation
            if (!name || !email || !password || !confirm) {
                showNotification('Please fill in all fields', 'error');
                registerText.style.display = 'inline';
                registerSpinner.style.display = 'none';
                return;
            }
            
            if (password !== confirm) {
                showNotification('Passwords do not match', 'error');
                registerText.style.display = 'inline';
                registerSpinner.style.display = 'none';
                return;
            }
            
            currentUser = { name, email };
            showNotification('Registration successful!');
            registerModal.style.display = 'none';
            renderUserDropdown();
            
            // Hide loading spinner
            registerText.style.display = 'inline';
            registerSpinner.style.display = 'none';
        }, 1000);
    });
    
    // Forgot password
    forgotPassword.addEventListener('click', function() {
        showNotification('Password reset link sent to your email!');
    });
    
    // Book now buttons (delegated event)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('book-btn') || 
            (e.target.parentElement && e.target.parentElement.classList.contains('book-btn'))) {
            const btn = e.target.classList.contains('book-btn') ? e.target : e.target.parentElement;
            const movieId = parseInt(btn.getAttribute('data-movie-id'));
            const movie = movies.find(m => m.id === movieId);
            
            if (movie) {
                openBookingModal(movie);
            }
        }
        
        if (e.target.classList.contains('notify-btn') || 
            (e.target.parentElement && e.target.parentElement.classList.contains('notify-btn'))) {
            const btn = e.target.classList.contains('notify-btn') ? e.target : e.target.parentElement;
            const movieId = parseInt(btn.getAttribute('data-movie-id'));
            const movie = movies.find(m => m.id === movieId);
            
            if (movie) {
                showNotification(`We'll notify you when "${movie.title}" is available!`);
            }
        }
        
        if (e.target.hasAttribute('data-offer-code') || 
            (e.target.parentElement && e.target.parentElement.hasAttribute('data-offer-code'))) {
            const btn = e.target.hasAttribute('data-offer-code') ? e.target : e.target.parentElement;
            const code = btn.getAttribute('data-offer-code');
            navigator.clipboard.writeText(code);
            showNotification(`Copied code: ${code}`);
        }
    });
    
    // Booking modal navigation
    prevBtn.addEventListener('click', goToPreviousStep);
    nextBtn.addEventListener('click', goToNextStep);
}

// Handle search input
function handleSearchInput() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }
    
    // Search movies
    const movieResults = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.genre.toLowerCase().includes(query)
    );
    
    // Search theaters
    const theaterResults = theaters.filter(theater => 
        theater.name.toLowerCase().includes(query) || 
        theater.location.toLowerCase().includes(query)
    );
    
    // Display results
    displaySearchResults(movieResults, theaterResults);
}

// Display search results
function displaySearchResults(movieResults, theaterResults) {
    searchResults.innerHTML = '';
    
    if (movieResults.length === 0 && theaterResults.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No results found</div>';
    } else {
        if (movieResults.length > 0) {
            movieResults.forEach(movie => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <div class="info">
                        <div class="title">${movie.title}</div>
                        <div class="meta">
                            <span>${movie.genre}</span>
                            <span>${movie.duration}</span>
                        </div>
                    </div>
                    <span class="type">Movie</span>
                `;
                item.addEventListener('click', () => {
                    if (movie.nowShowing) {
                        openBookingModal(movie);
                    } else {
                        showNotification(`"${movie.title}" is coming soon on ${movie.releaseDate}`);
                    }
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                });
                searchResults.appendChild(item);
            });
        }
        
        if (theaterResults.length > 0) {
            theaterResults.forEach(theater => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <i class="fas fa-map-marker-alt" style="font-size: 2rem; color: #f5a623;"></i>
                    <div class="info">
                        <div class="title">${theater.name}</div>
                        <div class="meta">${theater.location}</div>
                    </div>
                    <span class="type">Theater</span>
                `;
                item.addEventListener('click', () => {
                    showNotification(`Showing theaters for ${theater.name}`);
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                    
                    // Show theaters section
                    nowShowingSection.style.display = 'none';
                    comingSoonSection.style.display = 'none';
                    theatersSection.style.display = 'block';
                    offersSection.style.display = 'none';
                    
                    // Scroll to theaters section
                    theatersSection.scrollIntoView({ behavior: 'smooth' });
                });
                searchResults.appendChild(item);
            });
        }
    }
    
    searchResults.classList.add('active');
}

// Perform search
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if(!query) {
        showNotification('Please enter a search term', 'error');
        return;
    }
    
    // Search movies
    const movieResults = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.genre.toLowerCase().includes(query)
    );
    
    // Search theaters
    const theaterResults = theaters.filter(theater => 
        theater.name.toLowerCase().includes(query) || 
        theater.location.toLowerCase().includes(query)
    );
    
    // Show results
    if (movieResults.length > 0 || theaterResults.length > 0) {
        let message = '';
        
        if (movieResults.length > 0) {
            message += `<strong>Movies (${movieResults.length}):</strong><br>`;
            message += movieResults.map(m => m.title).join(', ');
            message += '<br><br>';
        }
        
        if (theaterResults.length > 0) {
            message += `<strong>Theaters (${theaterResults.length}):</strong><br>`;
            message += theaterResults.map(t => t.name).join(', ');
        }
        
        showNotification(message);
    } else {
        showNotification('No results found for your search', 'error');
    }
    
    searchResults.classList.remove('active');
    searchInput.value = '';
}

// Go to next step in booking process
function goToNextStep() {
    if (bookingData.currentStep === 1) {
        // Validate theater and showtime selection
        if (!bookingData.theater || !bookingData.showtime) {
            showNotification('Please select a theater and showtime', 'error');
            return;
        }
        
        // Generate seats
        generateSeats();
        
        // Update UI
        stepTheater.classList.remove('active');
        stepSeats.classList.add('active');
        step1.classList.remove('active');
        step1.classList.add('completed');
        step2.classList.add('active');
        prevBtn.style.display = 'block';
        nextBtn.textContent = 'Confirm Booking';
        bookingData.currentStep = 2;
    } else if (bookingData.currentStep === 2) {
        // Validate seat selection
        if (bookingData.seats.length === 0) {
            showNotification('Please select at least one seat', 'error');
            return;
        }
        
        // Update confirmation details
        document.getElementById('confirm-movie').textContent = bookingData.movie.title;
        document.getElementById('confirm-theater').textContent = bookingData.theater;
        document.getElementById('confirm-showtime').textContent = bookingData.showtime;
        document.getElementById('confirm-seats').textContent = bookingData.seats.join(', ');
        document.getElementById('confirm-price').textContent = `₹${bookingData.pricePerTicket}`;
        document.getElementById('confirm-total').textContent = `₹${bookingData.total}`;
        
        // Update UI
        stepSeats.classList.remove('active');
        stepConfirm.classList.add('active');
        step2.classList.remove('active');
        step2.classList.add('completed');
        step3.classList.add('active');
        nextBtn.textContent = 'Complete Booking';
        bookingData.currentStep = 3;
    } else if (bookingData.currentStep === 3) {
        // Complete booking
        confirmBooking();
    }
}

// Go to previous step in booking process
function goToPreviousStep() {
    if (bookingData.currentStep === 2) {
        // Back to theater selection
        stepSeats.classList.remove('active');
        stepTheater.classList.add('active');
        step2.classList.remove('active');
        step1.classList.remove('completed');
        step1.classList.add('active');
        prevBtn.style.display = 'none';
        nextBtn.textContent = 'Next';
        bookingData.currentStep = 1;
    } else if (bookingData.currentStep === 3) {
        // Back to seat selection
        stepConfirm.classList.remove('active');
        stepSeats.classList.add('active');
        step3.classList.remove('active');
        step2.classList.remove('completed');
        step2.classList.add('active');
        nextBtn.textContent = 'Confirm Booking';
        bookingData.currentStep = 2;
    }
}

// Open booking modal
function openBookingModal(movie) {
    if (!currentUser) {
        showNotification('Please login to book tickets', 'error');
        loginModal.style.display = 'block';
        return;
    }
    
    bookingData.movie = movie;
    bookingData.pricePerTicket = movie.price;
    
    document.getElementById('modalMovieTitle').textContent = movie.title;
    document.getElementById('summary-movie').textContent = movie.title;
    document.getElementById('summary-price').textContent = `₹${movie.price}`;
    
    // Reset steps
    stepTheater.classList.add('active');
    stepSeats.classList.remove('active');
    stepConfirm.classList.remove('active');
    step1.classList.add('active');
    step2.classList.remove('active');
    step3.classList.remove('active');
    step1.classList.remove('completed');
    step2.classList.remove('completed');
    prevBtn.style.display = 'none';
    nextBtn.textContent = 'Next';
    bookingData.currentStep = 1;
    
    // Populate theaters
    theaterSelection.innerHTML = '';
    
    theaters.forEach(theater => {
        const theaterItem = document.createElement('div');
        theaterItem.className = 'theater-item';
        
        theaterItem.innerHTML = `
            <div class="theater-info">
                <h3><i class="fas fa-map-marker-alt"></i> ${theater.name}</h3>
                <p><i class="fas fa-location-arrow"></i> ${theater.location}</p>
            </div>
            <div class="showtimes">
                ${theater.showtimes.map(time => 
                    `<div class="showtime" data-time="${time}" data-theater-id="${theater.id}">
                        <i class="far fa-clock"></i> ${time}
                    </div>`
                ).join('')}
            </div>
        `;
        
        theaterSelection.appendChild(theaterItem);
    });
    
    // Show modal
    modal.style.display = 'block';
    
    // Setup showtime selection
    document.querySelectorAll('.showtime').forEach(showtime => {
        showtime.addEventListener('click', function() {
            // Remove previous selections
            document.querySelectorAll('.showtime.selected').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Select this showtime
            this.classList.add('selected');
            
            const theaterId = parseInt(this.getAttribute('data-theater-id'));
            const theater = theaters.find(t => t.id === theaterId);
            
            if (theater) {
                bookingData.theater = theater.name;
                bookingData.showtime = this.getAttribute('data-time');
                
                document.getElementById('summary-theater').textContent = theater.name;
                document.getElementById('summary-showtime').textContent = this.getAttribute('data-time');
            }
        });
    });
}

// Generate seats
function generateSeats() {
    seatsContainer.innerHTML = '';
    
    // Create 6 rows (A-F)
    for (let row = 0; row < 6; row++) {
        const rowLetter = String.fromCharCode(65 + row);
        const rowElement = document.createElement('div');
        rowElement.className = 'seat-row';
        
        // Create 8 seats per row
        for (let seatNum = 1; seatNum <= 8; seatNum++) {
            const seatId = `${rowLetter}${seatNum}`;
            const seatElement = document.createElement('div');
            seatElement.className = 'seat';
            seatElement.textContent = seatId;
            seatElement.setAttribute('data-seat', seatId);
            
            // Randomly occupy some seats (20% chance)
            if (Math.random() < 0.2) {
                seatElement.classList.add('occupied');
            }
            
            seatElement.addEventListener('click', function() {
                if (!this.classList.contains('occupied')) {
                    this.classList.toggle('selected');
                    
                    // Update selected seats
                    const seatId = this.getAttribute('data-seat');
                    const index = bookingData.seats.indexOf(seatId);
                    
                    if (index === -1) {
                        bookingData.seats.push(seatId);
                    } else {
                        bookingData.seats.splice(index, 1);
                    }
                    
                    updateBookingSummary();
                }
            });
            
            rowElement.appendChild(seatElement);
        }
        
        seatsContainer.appendChild(rowElement);
    }
}

// Update booking summary
function updateBookingSummary() {
    const seatsElement = document.getElementById('summary-seats');
    const totalElement = document.getElementById('summary-total');
    
    if (bookingData.seats.length > 0) {
        seatsElement.textContent = bookingData.seats.join(', ');
        bookingData.total = bookingData.seats.length * bookingData.pricePerTicket;
        totalElement.textContent = `₹${bookingData.total}`;
    } else {
        seatsElement.textContent = 'None selected';
        totalElement.textContent = '₹0';
    }
}

// Confirm booking
function confirmBooking() {
    if (!currentUser) {
        showNotification('Please login to book tickets', 'error');
        loginModal.style.display = 'block';
        return;
    }
    
    const message = `
        Booking confirmed!<br><br>
        <strong>${bookingData.movie.title}</strong><br>
        ${bookingData.theater}<br>
        ${bookingData.showtime}<br>
        Seats: ${bookingData.seats.join(', ')}<br>
        Total: ₹${bookingData.total}<br><br>
        Tickets have been sent to ${currentUser.email}.<br>
        Enjoy your movie!
    `;
    
    showNotification(message);
    modal.style.display = 'none';
    resetBookingData();
}

// Reset booking data
function resetBookingData() {
    bookingData = {
        movie: null,
        theater: null,
        showtime: null,
        seats: [],
        pricePerTicket: 0,
        total: 0,
        currentStep: 1
    };
    
    // Reset UI
    document.getElementById('summary-movie').textContent = 'None selected';
    document.getElementById('summary-theater').textContent = 'None selected';
    document.getElementById('summary-showtime').textContent = 'None selected';
    document.getElementById('summary-seats').textContent = 'None selected';
    document.getElementById('summary-total').textContent = '₹0';
}

// Show notification
function showNotification(message, type = 'success') {
    notification.innerHTML = message;
    notification.style.display = 'block';
    notification.style.background = type === 'error' ? '#ff6b6b' : '#4CAF50';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Initialize the app
init();