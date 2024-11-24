const models = require('../src/database/models');

console.log(`Reseting ${process.env.MIGRATION_ENV}...`);

models.sequelize
  .sync({ force: true })
  .then(() => {
    console.log('OK');
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

/* 2024: Year (2024)
11: Month (November)
19: Day (19th)
13: Hour (1:00 PM, in 24-hour format)
46: Minute (46th minute)
*/
