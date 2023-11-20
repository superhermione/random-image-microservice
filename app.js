document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchImage');
    const imageDisplay = document.getElementById('randomImage');
    const imageUrlDisplay = document.getElementById('imageUrl'); 

    fetchButton.addEventListener('click', function() {
        fetch('https://image-micro-193c66c66e13.herokuapp.com/random-image')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                imageDisplay.src = data.imageUrl;
                imageDisplay.style.display = 'block'; 
                imageUrlDisplay.textContent = data.imageUrl; 
            })
            .catch(error => {
                console.error('Fetch error:', error);
                alert('Error fetching image. Please try again later.');
            });
    });
});
