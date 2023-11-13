const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    // port: 3306,
    password: 'database',
    database: 'testnodedb'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const query = "INSERT INTO users (name, email) VALUES (?, ?)";
    connection.query(query, [name, email], (error, results) => {
      if (error) throw error;
      res.send({ message: "User added successfully.", id: results.insertId });
    });
  });
  

  app.get('/users', (req, res) => {
    const query = "SELECT * FROM users";
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });
  
  app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    connection.query(query, [name, email, req.params.id], (error, results) => {
      if (error) throw error;
      res.send({ message: "User updated successfully." });
    });
  });
  

  app.delete('/users/:id', (req, res) => {
    const query = "DELETE FROM users WHERE id = ?";
    connection.query(query, [req.params.id], (error, results) => {
      if (error) throw error;
      res.send({ message: "User deleted successfully." });
    });
  });
  