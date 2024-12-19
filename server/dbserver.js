// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Save location
function saveLocation(userId, latitude, longitude) {
    db.ref('locations/' + userId).set({
        latitude: latitude,
        longitude: longitude
    });
}

function sendLocationToFirebase(userId) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            // Save location to Firebase
            database.ref('locations/' + userId).set(userLocation);
        }, (error) => {
            console.error("Geolocation error:", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

function getLocations() {
    database.ref('locations').on('value', (snapshot) => {
        const locations = snapshot.val();
        console.log(locations); // Handle locations as needed
        // Call function to generate Google Maps link here
    });
}

// Retrieve all locations
db.ref('locations').on('value', (snapshot) => {
    const locations = snapshot.val();
    console.log(locations);
});
