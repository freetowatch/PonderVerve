// server.js or app.js (or whatever you named your server file)
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Serve your HTML file when someone accesses the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Your API route that proxies the request to Currents API
app.get('/api/latest-news', async (req, res) => {
  const apiUrl = 'https://api.currentsapi.services/v1/latest-news';
  const apiKey = 'vYKiKn40Bsrp7zBiCOmeTtYHRqnJYuV5pMaWTR0H0RaGlWaK'; // Replace with your actual API key

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
