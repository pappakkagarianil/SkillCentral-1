import React, { useState , useRef} from 'react';
import styles from '../Styles/AddSkillForm.module.css'; // Import your CSS file

const AddSkillForm = ({updateSKill , handlesDataState,handleFormAndCard , dataJson , technicalSkills , name , formType}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState(technicalSkills);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [skill, setSkill] = useState('');
  const handleInputdataChange = (inputValue) => {
    const filtered = technicalSkills.filter((suggestion) => suggestion.toLowerCase().includes(inputValue.toLowerCase())
);
    setFilteredSuggestions(filtered);
    setIsDropdownOpen(true);
    
  };
  const handleSelectSuggestion = (selectedSuggestion) => {
    handleSkillChange(selectedSuggestion);
    setIsDropdownOpen(false);
  };
  const [level, setLevel] = useState('');
  const levelName = useRef();
  const skillName = useRef();
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const handleSkillChange = (selectedSkill) => {
    setSkill(selectedSkill);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(updateSKill){
      dataJson.filter( item =>item.name === updateSKill.name)[0].level = levelName.current.value;
    }else{
      dataJson.push({name: skillName.current.value, level: levelName.current.value});
    }
    handlesDataState(dataJson);
    handleFormAndCard(false);
    
  };

  return (
    <form className={styles["employee-form"]}>
      <div><h1 className={styles["form-heading"]}>{formType}</h1></div>
      <div className={styles["form-group"]}>
      <label>Technology:</label>
      <div className={styles["autocomplete"]}></div>
      <input
      type="text"
      //value={skill}
    //  ref = {skillName}
     //</div> onChange={(e) => {
       // handleSkillChange(e.target.value);
       // handleInputdataChange(e.target.value);
    //  }}
     // onFocus={() => setIsDropdownOpen(true)}
     // onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
    />
       </div>
      
      {  (formType !== "Update Skills") && 
      
         <div className={styles["form-group"]}>
         <label>Skill:</label>
         <div className={styles["autocomplete"]}>
       <input
         type="text"
         value={skill}
         ref = {skillName}
         onChange={(e) => {
           handleSkillChange(e.target.value);
           handleInputdataChange(e.target.value);
         }}
         onFocus={() => setIsDropdownOpen(true)}
         onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
       />
       {isDropdownOpen && (
         <ul className={styles["suggestions"]}>
           {filteredSuggestions.map((suggestion) => (
             <li key={suggestion} onClick={() => handleSelectSuggestion(suggestion)}>
               {suggestion}
             </li>
           ))}
         </ul>
       )}
     </div>
       </div>
      }
      <div className={styles["form-group"]}>
        <label>Level:</label>
        <select ref={levelName} value={level} onChange={(e) => setLevel(e.target.value)} required>
          <option value="">Select Level</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
      </div>
      <div className={styles["form-group"]}>
      <label>Yeas of Expertise:</label>
      <div className></div>
      <input
      type="text"/>
       </div>
       <div className={styles["form-group"]}>
      <label>Cerification if any:</label>
      <div className></div>
      <input
      type="text"
      />
       </div>
      <button onClick={(e)=>handleSubmit(e)}>Submit </button>
    </form>
  );
};

export default AddSkillForm;
