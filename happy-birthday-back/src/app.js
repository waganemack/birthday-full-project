const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Import des routes
const intervenantsRoutes = require('./routes/intervenants');
const studentsRoutes = require('./routes/students');
const quotesRoutes = require('./routes/quotes');

// Utilisation des routes
app.use('/api/intervenants', intervenantsRoutes);
app.use('/api/students', studentsRoutes);
app.use('/api/quotes', quotesRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
