// SkillAdmin.js

import React, { useState , useRef, useEffect } from 'react';
import styles from '../Styles/SkillAdmin.module.css';

const SkillAdmin = ({technicalSkills}) => {
  const [skills, setSkills] = useState(technicalSkills);
  const [newSkill, setNewSkill] = useState('');
  const inputSkillRef = useRef();
  const handleAddSkill = () => {
    const value= inputSkillRef.current.value;
    skills.push(value)
    setSkills([...skills]);
  };

  const handleRemoveSkill = (event, skillToRemove) => {
    const selectedSkill = document.getElementById('select_skill').value;
    const indexOfSkill = skills.indexOf(selectedSkill);
    const skillIdToDelete = skills.splice(indexOfSkill,1);
    // setSkills([...skills]);
    const response = fetch(`http://localhost:5000/api/skills/${skillIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
      alert('Skill deleted successfully');
    } 
};

  return (
    <div className={styles["skill-admin-container"]}>
      <h2>Skill Administration</h2>
      <div className={styles["skill-list"]}>
        <select id = "select_skill">
          {skills.map((skill, index) => (
            <option key={index}>
              {skill}
            </option>
          ))}

        </select>
        <div className={styles["remove-skill-btn"]} >
        <button onClick={(e) => handleRemoveSkill(e)}>Remove</button>
        </div>
      </div>
      <br></br>
      <div className={styles["add-skill"]}>
        <input
          type="text"
          placeholder="New Skill"
          ref = {inputSkillRef}
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
      </div>
      <div className={styles["add-skill-btn"]} >
      <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillAdmin;
