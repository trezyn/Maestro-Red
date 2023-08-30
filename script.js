

// Get references to the pop-up and the open/close buttons
const popup = document.getElementById('popup');
const openButton = document.getElementById('open-popup');
const closeButton = document.getElementById('close-popup');

// Function to open the pop-up
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
    popup.style.display = 'none';
}

// Event listeners to open and close the pop-up
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
