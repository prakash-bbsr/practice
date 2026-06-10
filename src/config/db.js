//https://sequelize.org/docs/v6/getting-started/
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'node_mysql', // database
  'root',      // MySQL username
  '',      // MySQL password
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection established successfully.');
  } catch (error) {
    console.error('Unable to connect:', error);
  }
}

connectDB();

module.exports = sequelize;