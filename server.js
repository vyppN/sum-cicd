import express from 'express';
import cors from 'cors';

// Create a new Express application instance
const app = express();

// allow cross-origin requests from all origins
app.use(cors());


// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/exec', (req, res) => {
  // Suppose the user sends '?cmd=console.log("Hello from user!")'
  const userCommand = req.query.cmd;
  if (userCommand) {
    // Potential vulnerability: evaluate user-provided string
    eval(userCommand); // <-- CodeQL will likely flag this
    res.send('Executed user command!');
  } else {
    res.send('No command provided.');
  }
})

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});