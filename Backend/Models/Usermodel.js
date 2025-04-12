const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    place: { type: String },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    nationality: { type: String },
    pincode: { type: String },
    password: { type: String, required: true },
    role: {
        type: String,
        default: 'user',
      }
},{timestamps: true})

module.exports = mongoose.model('User',userSchema);