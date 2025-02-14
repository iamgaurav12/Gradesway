import app from './app';
import sequelize from './database/db';
import "dotenv"

const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
