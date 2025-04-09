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
        // ... (all your previous code remains the same)
    
        // Initialize the application
        init();
    }); // <-- This closing was missing