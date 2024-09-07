document.addEventListener('DOMContentLoaded', () => {
    // Predefined locals' data (this will be dynamic with a backend system later)
    const locals = [
        { name: 'Hiroshi', specialty: 'Tea Ceremony', location: 'Kyoto', interests: 'Traditional Culture' },
        { name: 'Mina', specialty: 'Sushi Making', location: 'Kyoto', interests: 'Culinary Experiences' },
        { name: 'Carlos', specialty: 'Flamenco Dance', location: 'Seville', interests: 'Performing Arts' },
        { name: 'Anna', specialty: 'Painting', location: 'Florence', interests: 'Art & History' },
        { name: 'Sara', specialty: 'Pottery', location: 'Kyoto', interests: 'Traditional Art' }
    ];

    // Handle form submission
    document.getElementById('travelerForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const destination = document.getElementById('destination').value.toLowerCase();
        const interests = document.getElementById('interests').value.toLowerCase();
        const matchedLocalsDiv = document.getElementById('matchedLocals');

        // Filter locals based on destination and interests
        const matchedLocals = locals.filter(local =>
            local.location.toLowerCase() === destination &&
            local.interests.toLowerCase().includes(interests)
        );

        // Display matched locals
        if (matchedLocals.length > 0) {
            matchedLocalsDiv.innerHTML = matchedLocals.map(local => `
                <div class="local-card">
                    <h3>${local.name}</h3>
                    <p><strong>Specialty:</strong> ${local.specialty}</p>
                    <p><strong>Location:</strong> ${local.location}</p>
                    <p><strong>Interests:</strong> ${local.interests}</p>
                </div>
            `).join('');
        } else {
            matchedLocalsDiv.innerHTML = '<p>No locals found for your preferences.</p>';
        }
    });
});
