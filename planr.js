events.sort((a, b) => new Date(a.date) - new Date(b.date));

if (eventsArray.length === 0) {
    eventsContainer.innerHTML = '<p>No events found.</p>';
}
function renderEvents(eventsArray) {
    if (eventsArray.length === 0) {
        eventsContainer.innerHTML = `<p>No events found.</p>`;
        return;
    }

    eventsContainer.innerHTML = eventsArray.map(event => `
        <div class="event-card">
            <img src="${event.image}" class="event-image" alt="${event.title}">
            <div class="event-content">
                <div class="event-date">${new Date(event.date).toLocaleDateString()}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-location">📍 ${event.location}</div>
            </div>
        </div>
    `).join('');
}
function renderEvents(eventsArray) {
    const sortedEvents = eventsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
    // render sortedEvents as above...
}

    // Dark mode toggle
    const toggleBtn = document.getElementById('darkModeToggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Light Mode';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const enabled = document.body.classList.contains('dark-mode');
        toggleBtn.textContent = enabled ? '☀️ Light Mode' : '🌙 Dark Mode';
        localStorage.setItem('darkMode', enabled);
    });



