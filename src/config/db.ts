const mongose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connecDB = async (): Promise<void> => {
  try {
    await mongose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connecDB;
