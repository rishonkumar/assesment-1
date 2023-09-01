const { Sequelize } = require("sequelize");

// Define your database connection details
const sequelize = new Sequelize({
  database: "your_database_name",
  username: "your_database_username",
  password: "your_database_password",
  host: "localhost", // Or the database host
  dialect: "postgres", // Change this to your database dialect (e.g., 'mysql' for MySQL)
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
