// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connection');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS for all routes
app.use(cors());
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());


// Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
