import React, { useState } from 'react';
import styles from '../Styles/PersonalDetail.module.css';

const PersonalDetail = ({dataJson , handleFormAndCard }) => {
  const [data , setData ] = useState(dataJson);
  const handleDelete = (event) =>{
    const index = Number(event.target.id.split("_")[2]);
    data.splice(index,1)
    setData([...data])
  
  };
  const handleSubmit = (e , type) => {
    const index = e.target.id.split("_")[2];
    handleFormAndCard(true , type , index)
  };
  return (
    <>
    <div>
      <h2 className={styles["Heading"]}>Employees Records</h2>
    </div>
    <div className={styles["skill-card-screen"]}>
      <div className={styles["skill-cards"]}>
        {data?.map((skill , index) => (
          <div key={skill.id} className={styles["skill-card"]}>
            <h2>{skill.name}</h2>
            <p>Skill Level: {skill.level}</p>
             <button id ={`delete_btn_${index}`} className={styles["btn-style"]} onClick={(e) => handleDelete(e)} > Delete </button> 
             <span className={styles["gap-style"]}></span>
             <button onClick={(e) => handleSubmit(e , "Update Skills")} id ={`update_btn_${index}`}className={styles["btn-style"]} > Update </button> 
          </div>
        ))}
      </div>
    </div>
    <div className={styles["table-buttons"]}>
      <button onClick={(e) => handleSubmit(e, "Add Skill")} > Add  </button>
    </div>
    </>
    
  );
};

export default PersonalDetail;
