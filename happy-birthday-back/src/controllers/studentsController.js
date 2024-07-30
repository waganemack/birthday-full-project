const prisma = require('../prisma-client');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { birthday, lastname, firstname, email } = req.body;
    const newStudent = await prisma.student.create({
      data: { birthday: new Date(birthday), lastname, firstname, email },
    });
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajoutez d'autres contrôleurs si nécessaire
