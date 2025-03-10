
        // Sample event data
        const events = [
            {
                title: "Rock Music Festival",
                date: "2024-03-15",
                location: "Central Park",
                category: "music",
                description: "Annual rock music festival featuring top international artists.",
                image: "https://source.unsplash.com/random/800x600?music"
            },
            {
                title: "Marathon 2024",
                date: "2024-04-01",
                location: "City Stadium",
                category: "sports",
                description: "City marathon open to all fitness levels. Register now!",
                image: "https://source.unsplash.com/random/800x600?sports"
            },
            {
                title: "Modern Art Exhibition",
                date: "2024-03-20",
                location: "Art Museum",
                category: "art",
                description: "Contemporary art showcase from emerging artists.",
                image: "https://source.unsplash.com/random/800x600?art"
            },
            {
                title: "Tech Conference",
                date: "2024-05-10",
                location: "Convention Center",
                category: "tech",
                description: "Annual technology conference with industry leaders.",
                image: "https://source.unsplash.com/random/800x600?tech"
            }
        ];

        // DOM elements
        const eventsContainer = document.getElementById('eventsContainer');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('searchInput');

        // Initial render
        renderEvents(events);

        // Filter functionality
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                const filteredEvents = filter === 'all' 
                    ? events 
                    : events.filter(event => event.category === filter);
                
                renderEvents(filteredEvents);
            });
        });

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredEvents = events.filter(event => 
                event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm)
            );
            renderEvents(filteredEvents);
        });

        // Render events
        function renderEvents(eventsArray) {
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
    
