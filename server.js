const express = require('express');
connectDB = require('./config/db.js')

connectDB();

const app = express();

app.get('/', (reg, res) => res.send('API running'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

