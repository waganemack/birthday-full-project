const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Exemple de route pour obtenir tous les intervenants
router.get('/', async (req, res) => {
  try {
    const intervenants = await prisma.intervenant.findMany();
    res.json(intervenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exemple de route pour obtenir les anniversaires d'aujourd'hui
router.get('/today', async (req, res) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const intervenants = await prisma.intervenant.findMany({
      where: {
        birthday: today
      }
    });
    res.json(intervenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
