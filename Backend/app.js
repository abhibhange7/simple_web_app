// app.js
const express = require('express');
const app = express();
const port = 80; // Running on port 80 (change if needed)

const cors = require('cors');
app.use(cors());

// Simple API endpoint
app.get('/api/endpoint', (req, res) => {
  const responseData = {
    message: "Hello from the backend!",
    timestamp: new Date().toISOString(),
  };
  res.json(responseData);
});

// Default route (if no route is matched)
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
