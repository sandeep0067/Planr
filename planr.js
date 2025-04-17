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

