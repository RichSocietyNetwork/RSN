function showPopup(bookingType) {
    document.getElementById('popup').style.display = 'flex';
    // Add custom message if needed
    const popupContent = document.querySelector('.popup-content h2');
    popupContent.textContent = `$15.00 CashApp Payment Needed to Proceed for ${bookingType}`;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    document.getElementById('contact-form').reset();
}
