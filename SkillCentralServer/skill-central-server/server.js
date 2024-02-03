// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();

// Configure MySQL connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'skill_central',
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // You can replace '*' with specific origins allowed
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// API endpoint to retrieve JSON data
app.get('/api/users', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const query = `SELECT
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', e.id,
                'name', e.name,
                'department', e.department,
                'project', e.project,
                'skills', (
                    SELECT COALESCE(JSON_ARRAYAGG(JSON_OBJECT('name', s.name, 'level', es.level)), JSON_ARRAY())
                    FROM EmployeeSkills es
                    LEFT JOIN Skills s ON es.skill_id = s.id
                    WHERE es.employee_id = e.id
                )
            )
        ) AS employees
         FROM Employee e;`;
    connection.query(query, (queryErr, results) => {
      connection.release();
      if (queryErr) {
        console.error('Error executing MySQL query:', queryErr);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ users: results });
      }
    });
  });
});
app.get('/api/skills', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const query = `Select * from Skills;`;
    connection.query(query, (queryErr, results) => {
      connection.release();
      if (queryErr) {
        console.error('Error executing MySQL query:', queryErr);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ users: results });
      }
    });
  });
  app.delete('/api/skills/:id', (req, res) => {
    const skillId = req.params.id;
    const deleteQuery = 'DELETE FROM skills WHERE skill_id = ?';
    db.query(deleteQuery, [skillId], (err, results) => {
      if (err) {
        console.error('Error executing DELETE query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Skill deleted successfully' });
      }
    });
  });
});

const PORT = process.env.PORT || 3001; // Use a different port for the backend
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
