const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

// Importing Models
const { HoldingsModel } = require('./models/holdingsModel');
const { PositionModel } = require('./models/PositionModel');
const UserModel = require('./schema/UsersSchema');

// Authentication (Login/Register User)
app.post('/auth', async (req, res) => {
    const { mobileNumber } = req.body;

    if (!mobileNumber) {
        return res.status(400).json({ error: 'Mobile number is required' });
    }

    try {
        let user = await UserModel.findOne({ mobileNumber }).exec();

        if (!user) {
            user = new UserModel({ mobileNumber });
            await user.save();
            return res.status(201).json({ message: 'User registered successfully', user });
        }

        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        console.error('Error during user authentication:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Buy Stock Route


// Sell Stock Route


// Get User's Holdings
app.get('/holdings/:mobileNumber', async (req, res) => {
    const { mobileNumber } = req.params;

    try {
        let user = await UserModel.findOne({ mobileNumber });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        let holdings = await HoldingsModel.find({ userId: user._id });
        res.status(200).json(holdings);
    } catch (error) {
        console.error('Error fetching holdings:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Get User's Positions (Sold Stocks)
app.get('/positions/:mobileNumber', async (req, res) => {
    const { mobileNumber } = req.params;

    try {
        let user = await UserModel.findOne({ mobileNumber });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        let positions = await PositionModel.find({ userId: user._id });
        res.status(200).json(positions);
    } catch (error) {
        console.error('Error fetching positions:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Get All Positions (for admin or display purposes)
app.get('/allPositions', async (req, res) => {
    try {
        let positions = await PositionModel.find({});
        res.status(200).json(positions);
    } catch (error) {
        console.error('Error fetching all positions:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Get All Holdings (for admin or display purposes)
app.get('/allHoldings', async (req, res) => {
    try {
        let holdings = await HoldingsModel.find({});
        res.status(200).json(holdings);
    } catch (error) {
        console.error('Error fetching all holdings:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Connecting to MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Error:', err);
    });

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
