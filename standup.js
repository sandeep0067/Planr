// ... (previous code remains the same until the filterShows function)

    // Filter shows based on selected filters
    function filterShows() {
        const dateValue = dateFilter.value;
        const venueValue = venueFilter.value;
        const priceValue = priceFilter.value;
        
        let filteredShows = [...showsData];
        
        // Filter by date
        if (dateValue !== 'all') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            filteredShows = filteredShows.filter(show => {
                const showDate = new Date(show.date);
                
                if (dateValue === 'today') {
                    return showDate.toDateString() === today.toDateString();
                } else if (dateValue === 'week') {
                    const endOfWeek = new Date(today);
                    endOfWeek.setDate(today.getDate() + 7);
                    return showDate >= today && showDate <= endOfWeek;
                } else if (dateValue === 'month') {
                    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                    return showDate >= today && showDate <= endOfMonth;
                }
                return true;
            });
        }
        
        // Filter by venue
        if (venueValue !== 'all') {
            filteredShows = filteredShows.filter(show => show.venueId === venueValue);
        }
        
        // Filter by price
        if (priceValue !== 'all') {
            filteredShows = filteredShows.filter(show => {
                if (priceValue === 'free') {
                    return show.price === 0;
                } else if (priceValue === 'under-20') {
                    return show.price > 0 && show.price < 20;
                } else if (priceValue === '20-50') {
                    return show.price >= 20 && show.price <= 50;
                } else if (priceValue === 'over-50') {
                    return show.price > 50;
                }
                return true;
            });
        }
        
        currentShowData = filteredShows;
        visibleShows = 4;
        renderShows(currentShowData.slice(0, visibleShows));
    }

    // Open booking modal with show details
    function openBookingModal(showId) {
        const show = showsData.find(s => s.id === showId);
        if (!show) return;
        
        const showDate = new Date(show.date);
        const formattedDate = showDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
        });
        
        modalTitle.textContent = `Book Tickets: ${show.title}`;
        
        modalBody.innerHTML = `
            <div class="booking-summary">
                <div class="booking-summary-item">
                    <span>Date & Time:</span>
                    <span>${formattedDate} at ${show.time}</span>
                </div>
                <div class="booking-summary-item">
                    <span>Venue:</span>
                    <span>${show.venue}</span>
                </div>
                <div class="booking-summary-item">
                    <span>Performer:</span>
                    <span>${show.artist}</span>
                </div>
                <div class="booking-summary-item">
                    <span>Price per ticket:</span>
                    <span>$${show.price}</span>
                </div>
            </div>
            
            <form class="booking-form" id="booking-form">
                <div class="form-group">
                    <label for="ticket-quantity">Number of Tickets</label>
                    <select id="ticket-quantity" required>
                        <option value="" disabled selected>Select quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="full-name">Full Name</label>
                    <input type="text" id="full-name" required placeholder="Enter your full name">
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" required placeholder="Enter your email">
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" required placeholder="Enter your phone number">
                </div>
                
                <div class="booking-summary">
                    <div class="booking-summary-item">
                        <span>Subtotal:</span>
                        <span id="subtotal">$0</span>
                    </div>
                    <div class="booking-summary-item">
                        <span>Service Fee:</span>
                        <span id="service-fee">$0</span>
                    </div>
                    <div class="booking-summary-item">
                        <span>Total:</span>
                        <span id="total-price">$0</span>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary btn-confirm">Confirm Booking</button>
            </form>
        `;
        
        // Add event listeners for dynamic price calculation
        const ticketQuantity = document.getElementById('ticket-quantity');
        ticketQuantity.addEventListener('change', function() {
            updateBookingPrice(show.price, parseInt(this.value));
        });
        
        // Initialize price with default quantity (1)
        updateBookingPrice(show.price, 1);
        
        // Show modal
        bookingModal.classList.add('show');
    }

    // Update booking price based on quantity
    function updateBookingPrice(pricePerTicket, quantity) {
        const subtotal = pricePerTicket * quantity;
        const serviceFee = Math.round(subtotal * 0.1 * 100) / 100; // 10% service fee
        const total = subtotal + serviceFee;
        
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('service-fee').textContent = `$${serviceFee.toFixed(2)}`;
        document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
    }

    // Handle booking form submission
    function handleBookingSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const showId = parseInt(form.dataset.showId);
        const quantity = parseInt(form.querySelector('#ticket-quantity').value);
        const fullName = form.querySelector('#full-name').value;
        const email = form.querySelector('#email').value;
        const phone = form.querySelector('#phone').value;
        
        // In a real app, you would send this data to a server
        console.log('Booking submitted:', {
            showId,
            quantity,
            fullName,
            email,
            phone,
            timestamp: new Date().toISOString()
        });
        
        // Show confirmation
        modalBody.innerHTML = `
            <div class="booking-confirmation">
                <div class="confirmation-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Booking Confirmed!</h3>
                <p>Your tickets have been successfully booked. A confirmation has been sent to ${email}.</p>
                <button class="btn btn-primary" id="close-confirmation">Close</button>
            </div>
        `;
        
        document.getElementById('close-confirmation').addEventListener('click', function() {
            bookingModal.classList.remove('show');
        });
    }

    // Setup all event listeners
    function setupEventListeners() {
        // Filter event listeners
        dateFilter.addEventListener('change', filterShows);
        venueFilter.addEventListener('change', filterShows);
        priceFilter.addEventListener('change', filterShows);
        
        // Load more shows
        loadMoreBtn.addEventListener('click', function() {
            visibleShows += 2;
            renderShows(currentShowData.slice(0, visibleShows));
        });
        
        // Book now buttons (delegated event listener)
        showsContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-book')) {
                const showId = parseInt(e.target.dataset.id);
                openBookingModal(showId);
            }
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            bookingModal.classList.remove('show');
        });
        
        // Close modal when clicking outside
        bookingModal.addEventListener('click', function(e) {
            if (e.target === bookingModal) {
                bookingModal.classList.remove('show');
            }
        });
        
        // Newsletter form submission
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real app, you would send this to a server
            console.log('Newsletter subscription:', email);
            
            // Show thank you message
            this.innerHTML = `
                <p>Thank you for subscribing! You'll receive updates on upcoming shows.</p>
            `;
        });
        
        // Mobile menu toggle
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.hash !== '') {
                    e.preventDefault();
                    
                    const hash = this.hash;
                    const target = document.querySelector(hash);
                    
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
            const showsData = [
                {
                    id: 1,
                    title: "Vipul Goyal: Engineer of Laughs",
                    artist: "Vipul Goyal",
                    date: "2023-12-15",
                    time: "20:00",
                    venue: "The Comedy Club, Mumbai",
                    venueId: "comedy-club",
                    price: 1200,
                    image: "https://www.hindustantimes.com/ht-img/img/2023/08/04/1600x900/vipul_goyal_1691139559313_1691139559527.jpg",
                    description: "IITian-turned-comedian delivers sharp observational humor about Indian middle-class life"
                },
                {
                    id: 2,
                    title: "Anubhav Singh Bassi: Cheers!",
                    artist: "Anubhav Singh Bassi",
                    date: "2023-12-17",
                    time: "19:30",
                    venue: "Laugh Factory, Delhi",
                    venueId: "laugh-house",
                    price: 1500,
                    image: "https://mumbaitheatreguide.com/wp-content/uploads/2022/12/Anubhav-Singh-Bassi-Live-Show.jpg",
                    description: "Bassi's viral storytelling about college life and UPSC struggles"
                },
                {
                    id: 3,
                    title: "Ashish Solanki: Has Mat",
                    artist: "Ashish Solanki",
                    date: "2023-12-20",
                    time: "21:00",
                    venue: "Funny Bone, Bangalore",
                    venueId: "funny-bone",
                    price: 1000,
                    image: "https://i0.wp.com/www.thehumorfeed.com/wp-content/uploads/2022/07/Ashish-Solanki-1.jpg",
                    description: "Dark humor and sarcastic takes on Indian society and relationships"
                },
                {
                    id: 4,
                    title: "Ravi Gupta: Corporate Dhamaal",
                    artist: "Ravi Gupta",
                    date: "2023-12-22",
                    time: "22:30",
                    venue: "The Comedy Club, Mumbai",
                    venueId: "comedy-club",
                    price: 900,
                    image: "https://komedylive.com/wp-content/uploads/2023/03/Ravi-Gupta-Show-1024x683.jpg",
                    description: "Hilarious takes on IT corporate culture and Delhi family dynamics"
                },
                {
                    id: 5,
                    title: "Zakir Khan: Haq Se Single",
                    artist: "Zakir Khan",
                    date: "2023-12-23",
                    time: "20:00",
                    venue: "Laugh Factory, Delhi",
                    venueId: "laugh-house",
                    price: 2000,
                    image: "https://static.toiimg.com/photo/msid-101604537,width-96,height-65.cms",
                    description: "India's beloved 'sakht launda' with his signature romantic humor"
                },
                {
                    id: 6,
                    title: "Rahul Dua: Lockdown Diaries",
                    artist: "Rahul Dua",
                    date: "2023-12-27",
                    time: "19:00",
                    venue: "Funny Bone, Bangalore",
                    venueId: "funny-bone",
                    price: 1100,
                    image: "https://assets.telegraphindia.com/telegraph/2022/Oct/1666947133_rahul-dua.jpg",
                    description: "Millennial humor about work-from-home and Punjabi family life"
                },
                {
                    id: 7,
                    title: "Gaurav Kapoor: Papa Kehte Hain",
                    artist: "Gaurav Kapoor",
                    date: "2023-12-29",
                    time: "21:30",
                    venue: "The Comedy Club, Mumbai",
                    venueId: "comedy-club",
                    price: 1300,
                    image: "https://assets.telegraphindia.com/telegraph/2022/Oct/1666947133_gaurav-kapoor.jpg",
                    description: "Relatable humor about Indian parents and dating struggles"
                }
            ];
        
            // Updated artists data with stage photos
            const artistsData = [
                {
                    id: 1,
                    name: "Vipul Goyal",
                    genre: "Observational Comedy",
                    shows: 12,
                    image: "https://www.hindustantimes.com/ht-img/img/2023/08/04/1600x900/vipul_goyal_1691139559313_1691139559527.jpg"
                },
                {
                    id: 2,
                    name: "Anubhav Singh Bassi",
                    genre: "Storytelling Comedy",
                    shows: 8,
                    image: "https://mumbaitheatreguide.com/wp-content/uploads/2022/12/Anubhav-Singh-Bassi-Live-Show.jpg"
                },
                {
                    id: 3,
                    name: "Ashish Solanki",
                    genre: "Dark Humor",
                    shows: 15,
                    image: "https://i0.wp.com/www.thehumorfeed.com/wp-content/uploads/2022/07/Ashish-Solanki-1.jpg"
                },
                {
                    id: 4,
                    name: "Ravi Gupta",
                    genre: "Corporate Comedy",
                    shows: 10,
                    image: "https://komedylive.com/wp-content/uploads/2023/03/Ravi-Gupta-Show-1024x683.jpg"
                },
                {
                    id: 5,
                    name: "Zakir Khan",
                    genre: "Romantic Comedy",
                    shows: 18,
                    image: "https://static.toiimg.com/photo/msid-101604537,width-96,height-65.cms"
                },
                {
                    id: 6,
                    name: "Rahul Dua",
                    genre: "Millennial Humor",
                    shows: 10,
                    image: "https://assets.telegraphindia.com/telegraph/2022/Oct/1666947133_rahul-dua.jpg"
                },
                {
                    id: 7,
                    name: "Gaurav Kapoor",
                    genre: "Family Comedy",
                    shows: 14,
                    image: "https://assets.telegraphindia.com/telegraph/2022/Oct/1666947133_gaurav-kapoor.jpg"
                }
            ];
            // Load shows into the grid
function loadShows() {
    const showsContainer = document.getElementById('shows-container');
    mockData.shows.forEach(show => {
      showsContainer.innerHTML += `
        <div class="show-card">
          <div class="show-card-img">
            <img src="${show.image}" alt="${show.title}">
          </div>
          <div class="show-card-content">
            <p class="show-card-date">${show.date} • ${show.time}</p>
            <h3 class="show-card-title">${show.title}</h3>
            <p class="show-card-artist">${show.artist}</p>
            <div class="show-card-venue">
              <i class="fas fa-map-marker-alt"></i> ${show.venue}
            </div>
            <div class="show-card-footer">
              <span class="show-card-price">$${show.price}</span>
              <button class="btn btn-primary btn-book" data-id="${show.id}">Book Now</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  loadShows(); // Call this when the page loads

  // Handle booking button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-book')) {
      const showId = e.target.dataset.id;
      const show = mockData.shows.find(s => s.id == showId);
      openBookingModal(show);
    }
  });
  
  function openBookingModal(show) {
    document.getElementById('modal-title').textContent = `Book: ${show.title}`;
    document.getElementById('modal-body').innerHTML = `
      <div class="booking-summary">
        <div class="booking-summary-item">
          <span>Date:</span>
          <span>${show.date}</span>
        </div>
        <div class="booking-summary-item">
          <span>Venue:</span>
          <span>${show.venue}</span>
        </div>
        <div class="booking-summary-item">
          <span>Price:</span>
          <span>$${show.price}</span>
        </div>
      </div>
      <form class="booking-form">
        <!-- Add form fields here -->
      </form>
    `;
    document.getElementById('booking-modal').classList.add('show');
  }
  document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks for subscribing with ${email}! We'll keep you updated.`);
    e.target.reset();
  });
  // 1. Mock Data
const mockData = {
    shows: [
      {
        id: 1,
        title: "Laugh Out Loud Night",
        date: "2023-12-15",
        venue: "The Comedy Club",
        price: 35,
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ]
  };
  
  // 2. Load Shows + "Book Now" Buttons
  function loadShows() {
    const showsContainer = document.getElementById('shows-container');
    showsContainer.innerHTML = ''; // Clear existing content
    mockData.shows.forEach(show => {
      showsContainer.innerHTML += `
        <div class="show-card">
          <div class="show-card-img">
            <img src="${show.image}" alt="${show.title}">
          </div>
          <div class="show-card-content">
            <h3 class="show-card-title">${show.title}</h3>
            <p class="show-card-venue"><i class="fas fa-map-marker-alt"></i> ${show.venue}</p>
            <div class="show-card-footer">
              <span class="show-card-price">$${show.price}</span>
              <button class="btn btn-primary btn-book" data-id="${show.id}">Book Now</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // 3. Handle "Book Now" Clicks
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-book')) {
      const showId = e.target.dataset.id;
      const show = mockData.shows.find(s => s.id == showId);
      alert(`Booking ${show.title} for $${show.price}!`); // Replace with modal later
    }
  });
  
  // Initialize when page loads
  window.addEventListener('DOMContentLoaded', loadShows);
        
            init();
        });