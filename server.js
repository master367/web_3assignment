const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static('.'));

mongoose
    .connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: 'Registration successful!' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Username already exists.' });
        } else {
            res.status(500).json({ message: 'Registration failed.' });
        }
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: 'Login successful!' });
        } else {
            res.status(400).json({ success: false, message: 'Invalid username or password.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Login failed.' });
    }
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
