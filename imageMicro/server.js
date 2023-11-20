require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const cors = require('cors');

// Enable all CORS requests
app.use(cors());

// The endpoint to fetch a random image from Unsplash
app.get('/random-image', async (req, res) => {
    try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            headers: {
                'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });

        if (response.data && response.data.urls && response.data.urls.full) {
            res.json({ imageUrl: response.data.urls.full });
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (error) {
        console.error('Error fetching from Unsplash:', error.message);
        res.status(500).json({ error: 'Failed to fetch image from Unsplash' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
