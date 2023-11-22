function toggleDropdown(contentId) {
    var dropdown = document.getElementById(contentId);
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded'); // Add this line to check if DOM content is loaded

    // Replace 'YOUR_CURRENTS_API_KEY' with your actual API key
    const apiKey = 'vYKiKn40Bsrp7zBiCOmeTtYHRqnJYuV5pMaWTR0H0RaGlWaKY';
    const apiUrl = 'http://localhost:3000/api/latest-news'; // Use the correct URL for your server

    // Make API request
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data); // Add this line to log the API response
        // Handle the response data
        displayNews(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });

    // Display news on the webpage
    function displayNews(newsData) {
        const newsContainer = document.getElementById('news-container');

        // Iterate through articles and display them
        newsData.news.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
                <hr>
            `;
            newsContainer.appendChild(articleElement);
        });
    }
});
  