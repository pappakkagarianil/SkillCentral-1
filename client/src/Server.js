const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// Configure MySQL connection
const connection = mysql.createPool({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
});

// API endpoint to retrieve JSON data
app.get('/api/employees', async (req, res) => {
  try {
    const [rows] = await connection.execute(`
    SELECT
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
     FROM Employee e;

    `);

    const result = rows[0].employees;
    res.json({ data: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
