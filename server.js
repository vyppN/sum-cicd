import express from 'express';

// Create a new Express application instance
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});