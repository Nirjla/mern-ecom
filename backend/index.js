const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const { PORT } = require('./config');
const routes = require('./routes/index.route');

const app = express();
app.use(express.json());
app.use(cors());

// Use routes from `index.route.js`
app.use('/api', routes);

connectDB(); // Connect to your database

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
