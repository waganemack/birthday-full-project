const prisma = require('../prisma-client');

exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createQuote = async (req, res) => {
  try {
    const { quote, author } = req.body;
    const newQuote = await prisma.quote.create({
      data: { quote, author },
    });
    res.json(newQuote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajoutez d'autres contrôleurs si nécessaire
