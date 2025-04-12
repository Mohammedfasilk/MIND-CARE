const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Mindcare";

mongoose.connect(MONGO_URI)
    .then(() => console.log(`MongoDB connected successfully${MONGO_URI}`))
    .catch(err => console.error("MongoDB connection error:", err))