import React from 'react';
import ResourceTable from './ResourceTable';
import Filter from './Filter'

 export default function Card (){
  const columns = ['Name', 'Department', 'Project', 'Skill', 'Level'];
  const data = [
    { "id": 1, "name": "John Doe", "department": "Engineering", "skills": ["JavaScript", "React", "Node.js"] },
    { "id": 2, "name": "Jane Smith", "department": "Marketing", "skills": ["HTML", "CSS"] },
    { "id": 3, "name": "Bob Johnson", "department": "Human Resources", "skills": ["Communication", "Recruitment"] },
    { "id": 4, "name": "Alice Lee", "department": "Finance", "skills": ["Accounting", "Excel"] },
    { "id": 5, "name": "Charlie Brown", "department": "Sales", "skills": ["Salesmanship", "Negotiation"] },
    { "id": 6, "name": "Eva White", "department": "Engineering", "skills": ["Java", "Spring"] },
    { "id": 7, "name": "Michael Davis", "department": "Marketing", "skills": ["Graphic Design", "Social Media"] },
    { "id": 8, "name": "Sophie Miller", "department": "Human Resources", "skills": ["Employee Relations", "Conflict Resolution"] },
    { "id": 9, "name": "David Clark", "department": "Finance", "skills": ["Financial Analysis", "Budgeting"] },
    { "id": 10, "name": "Olivia Turner", "department": "Sales", "skills": ["Customer Relations", "Presentation"] }
  ]
  return (
    <>
     <Filter data={data}/>
    <ResourceTable
    columns={columns}
    data={data}
    />
    </>
   
  );
};
