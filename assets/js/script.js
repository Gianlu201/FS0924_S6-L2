const trips = document.querySelectorAll('.trip');
const alertTrip = document.getElementById('alertTrip');

alertTrip.innerText = `Sono ancora disponibili ${trips.length} viaggi`;
