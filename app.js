document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchImage');
    const imageDisplay = document.getElementById('randomImage');
    const imageUrlDisplay = document.getElementById('imageUrl'); // Element to display the image URL

    fetchButton.addEventListener('click', function() {
        // Make sure to replace the URL with the actual endpoint of your microservice
        fetch('http://localhost:3000/random-image')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                imageDisplay.src = data.imageUrl;
                imageDisplay.style.display = 'block'; // Make the image visible
                imageUrlDisplay.textContent = data.imageUrl; // Display the image URL on the page
            })
            .catch(error => {
                console.error('Fetch error:', error);
                alert('Error fetching image. Please try again later.');
            });
    });
});
