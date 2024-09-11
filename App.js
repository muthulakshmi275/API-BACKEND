const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/connection');
// const trainingCenterRoutes = require('./routes/trainingCenterRoutes');
const trainingModel = require('./trainingModel');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/training-center', trainingModel);

// Default route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
