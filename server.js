const app = require('./app')
const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.DB_HOST);
const port = process.env.PORT || 3000;

connection
  .then(() => {
    app.listen(port, () => {
      console.log('Database connection successful');
      console.log(`Server running. Use our API on port: ${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
