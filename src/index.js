const express = require('express');
const connectDB = require('../config/db.js');

const app = express();

//Connect DB
connectDB();

app.get('/', (reg, res) => res.send('API running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
