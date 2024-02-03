import React, { useState } from 'react';
import PersonalDetail from './PersonalDetail'
import AddSkillForm from './AddSkillForm';
           
const EmployeeRecord = ({data , name , technicalSkills}) => {
  const flag = false;
  const skills = data ? data.filter( item => item.name === name)[0]?.skills : [];
  const dataJson = skills || [];
  const [personalRecord, setPersonalRecord] =useState(dataJson);
  const [updateSKill , setUpdateSKill] = useState('');
  const [formFlag , setFormFlag] = useState(flag);
  const [formType , setFormType] = useState('');
  const handleFormAndCard = (flag , type , index) => { 
     setFormFlag(flag);
     setFormType(type);
     setUpdateSKill(personalRecord[index]);
  };
  const handleDataState = (data) =>{
    setPersonalRecord(data)
  }
  return (
    <>
      { (!formFlag) ? <PersonalDetail dataJson={personalRecord} handleFormAndCard={handleFormAndCard}/> : <AddSkillForm formType={formType} handleFormAndCard={handleFormAndCard} handlesDataState={handleDataState} dataJson ={dataJson} name={name} updateSKill={updateSKill} technicalSkills={technicalSkills}/>  } 
    </>
     
  );
};

export default EmployeeRecord;
