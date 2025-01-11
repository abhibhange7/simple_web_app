// Select the button and response container
const fetchDataBtn = document.getElementById('fetch-data-btn');
const responseContainer = document.getElementById('response-container');

// Backend URL (Replace with your EC2 public IP and endpoint)
const backendUrl = 'http://54.243.0.135/api/endpoint'; // Update this URL

// Add event listener to the button
fetchDataBtn.addEventListener('click', () => {
  // Clear previous response
  responseContainer.textContent = 'Fetching data...';

  // Fetch data from the backend
  fetch(backendUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display the response in the container
      responseContainer.textContent = `Response from backend: ${JSON.stringify(data)}`;
    })
    .catch(error => {
      // Handle errors
      responseContainer.textContent = `Error: ${error.message}`;
    });
});
