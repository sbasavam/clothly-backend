const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://clothly-zeta.vercel.app'], // Add your deployed frontend URL here
  credentials: true, // Allow credentials (cookies, auth headers)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Legacy browser support
};

app.use(cors(corsOptions));

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Root Route (for Render check)
app.get('/', (req, res) => {
  res.send("Backend is deployed and running on Render 🚀");
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message || 'Something went wrong!'
  });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
