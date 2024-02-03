import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeRecord from '../Screens/EmployeeRecord'
import ResourceTable from '../Screens/ResourceTable'
import SkillAdmin from '../Screens/SkillAdmin'
import AddSkillForm from '../Screens/AddSkillForm'
import Dashboard from '../Screens/Dashboard'


const Navigation = ({name}) => {
  const [data, setData] = useState([]);
  const [skills ,setSkills] = useState([]);
  useEffect(()=>{
  if(data.length === 0){
    fetch('http://localhost:3001/api/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(res => {
      setData(JSON.parse(res.users[0].employees));
      // You can handle the data as needed here
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }
  },[data])
  useEffect(()=>{
  if(data.length === 0 ){
    fetch('http://localhost:3001/api/skills')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setSkills([...data.users.map(item => item.name)]);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }
  },[skills])
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/section1" element={<EmployeeRecord name={name} technicalSkills={skills} data={data}/>} />
        <Route path="/section2" element={<ResourceTable data={data}/>} />
        <Route path="/section3" element={<SkillAdmin technicalSkills={skills}/>} />
        <Route path="/section4" element={<AddSkillForm name={name} technicalSkills={skills} data={data}/>} />
      </Routes>
    </Router>
   
  );
}
export default Navigation;