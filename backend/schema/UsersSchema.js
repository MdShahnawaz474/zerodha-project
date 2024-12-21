const mongoose = require('mongoose');  // Make sure mongoose is required
const { Schema } = mongoose;

const userSchema = new Schema({
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
    }
});

// Register the schema with a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
