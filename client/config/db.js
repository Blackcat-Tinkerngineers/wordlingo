  const mongoose = require('mongoose');
  const db = config.get('mongoURI');
  
  const wordlingoDB = async () => {
    try {
      await mongoose.connect(
        db,
        {
          useNewUrlParser: true
        }
      );
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = wordlingoDB;