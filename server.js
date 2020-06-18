const express = require('express');

const app = express();

app.get('/', (req, res) => 
  res.json({ msg: 'Welcome to the ContactKeeper API' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));