events.sort((a, b) => new Date(a.date) - new Date(b.date));

if (eventsArray.length === 0) {
    eventsContainer.innerHTML = '<p>No events found.</p>';
}
