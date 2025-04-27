const cursor = document.querySelector('.cursor');
let trailElements = [];

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Create trail effect
    createTrailElement(e.clientX, e.clientY);
});

// Add hover effect for elements
document.querySelectorAll('h1').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
        cursor.style.boxShadow = '0 0 20px 6px rgba(38, 150, 232, 0.5), 0 0 50px 10px rgba(38, 150, 232, 0.3), 0 0 80px 15px rgba(38, 150, 232, 0.1)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.boxShadow = '0 0 15px 3px rgba(38, 150, 232, 0.5), 0 0 40px 8px rgba(38, 150, 232, 0.3), 0 0 70px 10px rgba(38, 150, 232, 0.1)';
    });
});

// Click animation
document.addEventListener('click', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
});

// Create trail element
function createTrailElement(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(trail);
    
    // Store the trail element
    trailElements.push(trail);
    
    // Handle removal of trail elements
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            if (trail.parentNode) {
                document.body.removeChild(trail);
            }
            trailElements = trailElements.filter(item => item !== trail);
        }, 700);
    }, 100);
    
    // Limit the number of trail elements
    if (trailElements.length > 20) {
        if (trailElements[0].parentNode) {
            document.body.removeChild(trailElements[0]);
        }
        trailElements.shift();
    }
}
// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-dot');
const progressBar = document.getElementById('slideProgressBar');
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'prev', 'next');
        dots[i].classList.remove('active');
    }
    
    const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    const nextIndex = (slideIndex + 1) % slides.length;
    
    slides[prevIndex].classList.add('prev');
    slides[slideIndex].classList.add('active');
    slides[nextIndex].classList.add('next');
    dots[slideIndex].classList.add('active');
    
    // Reset and start progress bar
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 50);
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
    resetSlideInterval();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
    resetSlideInterval();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
    resetSlideInterval();
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize slideshow
showSlides();
resetSlideInterval();

// Modal functionality
const simpleLoginModal = document.getElementById('simple-login-modal');
const authModal = document.getElementById('auth-modal');
const authContainer = document.querySelector('.auth-container');

// Open simple login modal
document.getElementById('open-login').addEventListener('click', () => {
simpleLoginModal.classList.add('active');
});

// Open auth modal with signup form
document.getElementById('open-signup').addEventListener('click', () => {
authModal.classList.add('active');
authContainer.classList.add('show-signup');
});

// Close simple login modal
document.getElementById('close-simple-login').addEventListener('click', () => {
simpleLoginModal.classList.remove('active');
});

// Open full auth modal from simple login
document.getElementById('open-full-login').addEventListener('click', () => {
simpleLoginModal.classList.remove('active');
authModal.classList.add('active');
authContainer.classList.remove('show-signup');
});

// Close auth modal
document.getElementById('close-auth-modal').addEventListener('click', () => {
authModal.classList.remove('active');
});

// Toggle between login and signup forms
document.getElementById('welcome-show-signup').addEventListener('click', (e) => {
e.preventDefault();
authContainer.classList.add('show-signup');
});


document.getElementById('show-login-btn').addEventListener('click', (e) => {
e.preventDefault();
authContainer.classList.remove('show-signup');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
if (e.target === simpleLoginModal) {
simpleLoginModal.classList.remove('active');
}
if (e.target === authModal) {
authModal.classList.remove('active');
}
});

// Google Sign-In
function handleCredentialResponse(response) {
    // Decode the credential response
    const responsePayload = parseJwt(response.credential);
    
    // Update UI to show logged in state
    document.getElementById('auth-buttons').classList.add('d-none');
    document.getElementById('profile-section').classList.remove('d-none');
    
    // Set profile info
    document.getElementById('profile-pic').src = responsePayload.picture;
    document.getElementById('profile-name').textContent = responsePayload.name;
    
    // Close any open auth modals
    simpleLoginModal.classList.remove('active');
    authModal.classList.remove('active');
}

// Helper function to parse JWT
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Handle logout
document.getElementById('logout').addEventListener('click', () => {
    // Reset UI to logged out state
    document.getElementById('auth-buttons').classList.remove('d-none');
    document.getElementById('profile-section').classList.add('d-none');
    
    // Sign out from Google
    google.accounts.id.disableAutoSelect();
});

// Profile Sidebar
document.getElementById('profile-section').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('profile-sidebar').classList.add('active');
});

document.getElementById('close-profile').addEventListener('click', () => {
    document.getElementById('profile-sidebar').classList.remove('active');
});

document.getElementById('sidebar-logout').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('profile-sidebar').classList.remove('active');
    document.getElementById('auth-buttons').classList.remove('d-none');
    document.getElementById('profile-section').classList.add('d-none');
    google.accounts.id.disableAutoSelect();
});
// Feedback Form Functionality
const feedbackButton = document.getElementById('feedbackButton');
const feedbackOverlay = document.getElementById('feedbackOverlay');
const feedbackClose = document.getElementById('feedbackClose');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackNameInput = document.getElementById('feedbackName');
const feedbackEmail = document.getElementById('feedbackEmail');
const feedbackType = document.getElementById('feedbackType');
const feedbackText = document.getElementById('feedbackText');
const feedbackCurrentCount = document.getElementById('feedbackCurrentCount');
const feedbackRatingText = document.getElementById('feedbackRatingText');
const feedbackThankYouMessage = document.getElementById('feedbackThankYouMessage');
const feedbackSpinner = document.getElementById('feedbackSpinner');
const feedbackSubmitBtn = document.getElementById('feedbackSubmitBtn');

// Event Listeners for Feedback Form
feedbackButton.addEventListener('click', () => {
feedbackOverlay.classList.add('active');
document.body.style.overflow = 'hidden';
});

feedbackClose.addEventListener('click', () => {
feedbackOverlay.classList.remove('active');
document.body.style.overflow = '';
});

// Close on outside click
feedbackOverlay.addEventListener('click', (e) => {
if (e.target === feedbackOverlay) {
feedbackOverlay.classList.remove('active');
document.body.style.overflow = '';
}
});

// Character counter for feedback text
feedbackText.addEventListener('input', () => {
const currentLength = feedbackText.value.length;
feedbackCurrentCount.textContent = currentLength;
});

// Rating text update
const ratingLabels = {
1: 'Very Dissatisfied',
2: 'Dissatisfied',
3: 'Neutral',
4: 'Satisfied',
5: 'Very Satisfied'
};

document.querySelectorAll('input[name="feedbackRating"]').forEach(radio => {
radio.addEventListener('change', () => {
const rating = radio.value;
feedbackRatingText.textContent = ratingLabels[rating];
});
});

// Form submission
feedbackForm.addEventListener('submit', function(e) {
e.preventDefault();

// Basic validation
let isValid = true;

// Validate name
if (!feedbackNameInput.value.trim()) {
document.getElementById('nameError').style.display = 'block';
isValid = false;
} else {
document.getElementById('nameError').style.display = 'none';
}

// Validate email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(feedbackEmail.value.trim())) {
document.getElementById('emailError').style.display = 'block';
isValid = false;
} else {
document.getElementById('emailError').style.display = 'none';
}

// Validate rating
if (!document.querySelector('input[name="feedbackRating"]:checked')) {
document.getElementById('ratingError').style.display = 'block';
isValid = false;
} else {
document.getElementById('ratingError').style.display = 'none';
}

// Validate feedback type
if (!feedbackType.value) {
document.getElementById('typeError').style.display = 'block';
isValid = false;
} else {
document.getElementById('typeError').style.display = 'none';
}

// Validate feedback text
if (!feedbackText.value.trim()) {
document.getElementById('feedbackError').style.display = 'block';
isValid = false;
} else {
document.getElementById('feedbackError').style.display = 'none';
}

if (!isValid) return;

// Show spinner
feedbackSpinner.style.display = 'inline-block';
feedbackSubmitBtn.disabled = true;

// Generate a random feedback ID with current date
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const randomNum = Math.floor(1000 + Math.random() * 9000);
const feedbackId = `FBK-${year}-${month}-${day}-${randomNum}`;

// Simulate API call with a delay
setTimeout(function() {
// Hide spinner
feedbackSpinner.style.display = 'none';

// Hide the entire original container
document.querySelector('.feedback-container:not(.submission-confirmation)').style.display = 'none';

// Update the feedback ID in the confirmation
document.querySelector('.feedback-id').textContent = `Feedback ID: ${feedbackId}`;

// Show the submission confirmation
document.getElementById('submissionConfirmation').style.display = 'block';

// Enable the submit button again
feedbackSubmitBtn.disabled = false;
}, 1500);
});

// Add event handlers for the confirmation buttons
document.getElementById('newFeedbackBtn').addEventListener('click', function() {
// Hide confirmation and show form again
document.getElementById('submissionConfirmation').style.display = 'none';
document.querySelector('.feedback-container:not(.submission-confirmation)').style.display = 'block';

// Reset form
feedbackForm.reset();
feedbackCurrentCount.textContent = '0';
feedbackRatingText.textContent = '';
});
// Form submission handler
document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
e.preventDefault();
const form = e.target;
const submitBtn = form.querySelector("button[type='submit']");

submitBtn.disabled = true;

try {
const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { "Accept": "application/json" }
});

if (response.ok) {
    // Show success message
    document.getElementById("feedbackThankYouMessage").style.display = "block";
    form.style.display = "none";
} else {
    alert("Error submitting form. Please try again.");
}
} catch (error) {
alert("Network error. Please check your connection.");
} finally {
submitBtn.disabled = false;
}
});
document.getElementById('closeFeedbackModalBtn').addEventListener('click', function() {
// Close the entire feedback overlay
feedbackOverlay.classList.remove('active');
document.body.style.overflow = '';

// Reset for next time after animation completes
setTimeout(function() {
document.getElementById('submissionConfirmation').style.display = 'none';
document.querySelector('.feedback-container:not(.submission-confirmation)').style.display = 'block';
feedbackForm.reset();
feedbackCurrentCount.textContent = '0';
feedbackRatingText.textContent = '';
}, 300);
});
window.addEventListener('click', (e) => {
if (e.target === simpleLoginModal) {
simpleLoginModal.classList.remove('active');
}
if (e.target === authModal) {
authModal.classList.remove('active');
}
});

// Profile Sidebar Functionality
const profileSidebar = document.getElementById('profile-sidebar');
const openProfileBtn = document.getElementById('open-profile');
const closeProfileBtn = document.getElementById('close-profile');

// Add profile button to navbar
const navbarNav = document.querySelector('.navbar-nav');
const authButtons = document.getElementById('auth-buttons');

// Create profile button
const profileBtn = document.createElement('button');
profileBtn.className = 'profile-btn d-none';
profileBtn.id = 'profile-btn';
profileBtn.innerHTML = `
<img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile">
<span>John Doe</span>
`;

// Insert profile button before auth buttons
authButtons.parentNode.insertBefore(profileBtn, authButtons);

// Add event listener to profile button
profileBtn.addEventListener('click', () => {
profileSidebar.classList.add('active');
});

// Add event listener to open profile from dropdown
if (openProfileBtn) {
openProfileBtn.addEventListener('click', () => {
profileSidebar.classList.add('active');
});
}

// Close profile sidebar
closeProfileBtn.addEventListener('click', () => {
profileSidebar.classList.remove('active');
});

// Simulating user login (for demo purposes)
// In a real application, this would be handled by your authentication system
function simulateLogin() {
// Hide auth buttons and show profile button
authButtons.classList.add('d-none');
profileBtn.classList.remove('d-none');
}

// For demo: Login when clicking any login button
document.querySelectorAll('.auth-btn').forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
simulateLogin();
authModal.classList.remove('active');
});
});

// Logout functionality
document.getElementById('sidebar-logout').addEventListener('click', (e) => {
e.preventDefault();
// Hide profile button and show auth buttons
profileBtn.classList.add('d-none');
authButtons.classList.remove('d-none');
// Close profile sidebar
profileSidebar.classList.remove('active');
});

// Close sidebar when clicking outside (optional)
window.addEventListener('click', (e) => {
if (e.target === document.querySelector('body') && profileSidebar.classList.contains('active')) {
profileSidebar.classList.remove('active');
}
});
document.addEventListener('DOMContentLoaded', function() {
const subscribeBtn = document.querySelector('.newsletter-btn');
const buttonText = document.querySelector('.button-text');
const checkmark = document.querySelector('.checkmark');
const emailInput = document.querySelector('.newsletter-input');

subscribeBtn.addEventListener('click', function() {
if (emailInput.value.trim() === '') {
    alert('Please enter an email address');
    return;
}

// Add animation classes
subscribeBtn.classList.add('btn-animation');

// After a short delay, change text and add checkmark
setTimeout(() => {
    buttonText.textContent = 'Subscribed';
    subscribeBtn.classList.add('subscribed');
    checkmark.classList.add('show');
    
    // Remove animation class after it completes
    setTimeout(() => {
        subscribeBtn.classList.remove('btn-animation');
    }, 500);
}, 300);
});
});

