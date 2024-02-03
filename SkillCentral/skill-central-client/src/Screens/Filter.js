import React, { useState } from 'react';
import styles from './Filter.module.css'; // Import your CSS file

const Filter = ({ onFilter }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [employeeIdFilter, setEmployeeIdFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');

  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];
  const departments = ['Engineering', 'Marketing', 'Human Resources', 'Finance', 'Sales'];

  const handleFilter = () => {
    // Implement your logic to send filter criteria to the parent component
    onFilter({
      name: nameFilter,
      employeeId: employeeIdFilter,
      skill: skillFilter,
      department: departmentFilter,
    });
  };

  return (
    <div className={styles["filter-container"]}>
      <div className={styles["filter-group"]}>
        <label>Name:</label>
        <input type="text" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
      </div>
      <div className={styles["filter-group"]}>
        <label>Employee ID:</label>
        <input type="text" value={employeeIdFilter} onChange={(e) => setEmployeeIdFilter(e.target.value)} />
      </div>
      <div className={styles["filter-group"]}>
        <label>Skill:</label>
        <select value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)}>
          <option value="">All</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>
      <div className={styles["filter-group"]}>
        <label>Department:</label>
        <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
          <option value="">All</option>
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <button className={styles["btn"]} onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
