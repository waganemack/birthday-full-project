const fs = require('fs');
const csv = require('csv-parser');
const prisma = require('./prismaClient');
const path = require('path');

async function importIntervenants() {
  const results = [];
  fs.createReadStream(path.resolve(__dirname, './data/intervenants.csv'))
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const record of results) {
        console.log('Processing record:', record);
        if (record.birthday && record.lastname && record.firstname && record.email) {
          try {
            await prisma.intervenant.upsert({
              where: { email: record.email },
              update: {
                birthday: new Date(record.birthday.split('/').reverse().join('-')),
                lastname: record.lastname,
                firstname: record.firstname,
              },
              create: {
                birthday: new Date(record.birthday.split('/').reverse().join('-')),
                lastname: record.lastname,
                firstname: record.firstname,
                email: record.email,
              },
            });
            console.log(`Intervenant with email ${record.email} imported or updated.`);
          } catch (error) {
            console.error(`Error importing record: ${error.message}`);
          }
        } else {
          console.warn('Skipping incomplete record:', record);
        }
      }
      console.log('Intervenants import process completed.');
    });
}

async function importStudents() {
  const results = [];
  fs.createReadStream(path.resolve(__dirname, './data/students.csv'))
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const record of results) {
        console.log('Processing record:', record);
        if (record.birthday && record.lastname && record.firstname && record.email) {
          try {
            await prisma.student.upsert({
              where: { email: record.email },
              update: {
                birthday: new Date(record.birthday.split('/').reverse().join('-')),
                lastname: record.lastname,
                firstname: record.firstname,
              },
              create: {
                birthday: new Date(record.birthday.split('/').reverse().join('-')),
                lastname: record.lastname,
                firstname: record.firstname,
                email: record.email,
              },
            });
            console.log(`Student with email ${record.email} imported or updated.`);
          } catch (error) {
            console.error(`Error importing record: ${error.message}`);
          }
        } else {
          console.warn('Skipping incomplete record:', record);
        }
      }
      console.log('Students import process completed.');
    });
}

async function importQuotes() {
  const results = [];
  fs.createReadStream(path.resolve(__dirname, './data/quotes.csv'))
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const record of results) {
        console.log('Processing record:', record);
        if (record.quote && record.author) {
          try {
            await prisma.quote.upsert({
              where: { quote: record.quote },
              update: {
                author: record.author,
              },
              create: {
                quote: record.quote,
                author: record.author,
              },
            });
            console.log(`Quote '${record.quote}' imported or updated.`);
          } catch (error) {
            console.error(`Error importing record: ${error.message}`);
          }
        } else {
          console.warn('Skipping incomplete record:', record);
        }
      }
      console.log('Quotes import process completed.');
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
