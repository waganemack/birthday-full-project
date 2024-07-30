const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function importIntervenants() {
  const results = [];
  fs.createReadStream('intervenants.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const record of results) {
        await prisma.intervenant.create({
          data: {
            birthday: new Date(record.birthday.split('/').reverse().join('-')),
            lastname: record.lastname,
            firstname: record.firstname,
            email: record.email,
          },
        });
      }
      console.log('Intervenants imported');
    });
}

async function importStudents() {
  const results = [];
  fs.createReadStream('students.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const record of results) {
        await prisma.student.create({
          data: {
            birthday: new Date(record.birthday.split('/').reverse().join('-')),
            lastname: record.lastname,
            firstname: record.firstname,
            email: record.email,
          },
        });
      }
      console.log('Students imported');
    });
}

async function importQuotes() {
  const results = [];
  fs.createReadStream('quotes.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const record of results) {
        await prisma.quote.create({
          data: {
            quote: record.quote,
            author: record.author,
          },
        });
      }
      console.log('Quotes imported');
    });
}

async function main() {
  await importIntervenants();
  await importStudents();
  await importQuotes();
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
});
