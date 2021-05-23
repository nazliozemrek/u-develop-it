const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');



const PORT = process.env.PORT || 3002;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });
  app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });