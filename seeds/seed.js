const seedCategories = require('./category-seeds');
const seedTasks = require('./tasks-seeds');
const seedUsers = require('./users-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  // await seedCategories();
  // console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedTasks();
  console.log('\n----- TASKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
