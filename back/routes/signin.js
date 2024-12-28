// routes/signin.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db'); // Import database connection
const router = express.Router();

// Sign-In route
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required.');
    }

    const query = 'SELECT * FROM signup WHERE email = ?';
    db.execute(query, [email], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Internal server error.');
        }

        if (results.length === 0) {
            return res.status(401).send('Invalid email or password.');
        }

        const user = results[0];

        // Compare the hashed password with the stored password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).send('Internal server error.');
            }

            if (isMatch) {
                return res.status(200).send('Login successful');
            } else {
                return res.status(401).send('Invalid email or password.');
            }
        });
    });
});

module.exports = router;
