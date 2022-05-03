const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCHvYxV7g6i-D-71cRbt15xJe0YkgOYl1M'; // Will be removed post-project

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // Send to Google's API
}

form.addEventListener('submit', searchAddressHandler);