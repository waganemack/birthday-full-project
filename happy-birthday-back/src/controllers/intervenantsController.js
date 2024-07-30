const prisma = require('../prisma-client');

exports.getAllIntervenants = async (req, res) => {
  try {
    const intervenants = await prisma.intervenant.findMany();
    res.json(intervenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createIntervenant = async (req, res) => {
  try {
    const { birthday, lastname, firstname, email } = req.body;
    const newIntervenant = await prisma.intervenant.create({
      data: { birthday: new Date(birthday), lastname, firstname, email },
    });
    res.json(newIntervenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajoutez d'autres contrôleurs si nécessaire
