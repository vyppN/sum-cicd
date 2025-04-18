import express from 'express';
import cors from 'cors';

// Create a new Express application instance
const app = express();

// allow cross-origin requests from all origins
app.use(cors());


// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Auto deploy from github');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Auto deploy from github' });
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});