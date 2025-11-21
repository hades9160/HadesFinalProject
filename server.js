// server.js
const express = require('express');
const app = express();
// Use process.env.PORT, which Render will set automatically, or default to 3000
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send(`
    <h1>IT 412 Final Project</h1>
    <p><strong>Full Name:</strong> Ubana, Marc Noe V.</p>
    <p><strong>Class Section:</strong> BA - 4102</p>
    <p><strong>Inspirational Quote:</strong> "Life is too short to be with someone who doesn't appreciate and value you"</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});