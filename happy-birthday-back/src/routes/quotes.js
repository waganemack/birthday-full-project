const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Exemple de route pour obtenir toutes les citations
router.get('/', async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exemple de route pour obtenir une citation aléatoire
router.get('/random', async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
