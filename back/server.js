// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // To allow cross-origin requests from your React app

const menuRoutes = require('./routes/menu');
const paymentRoutes = require('./routes/payement');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Import routes
const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');

// Use the routes
app.use('/signup', signupRoute);
app.use('/signin', signinRoute);
app.use('/api/menu', menuRoutes);
app.use('/api/payement', paymentRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
