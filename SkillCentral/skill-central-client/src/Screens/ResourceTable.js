// FilterableTable.js

import React, { useState, useEffect } from 'react';
import styles from '../Styles/ResourceTable.module.css';
const ResourceTable = ({data}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState({ id: '', name: '', department: '', skills: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this as needed
  const [employeeIdFilter, setEmployeeIdFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  useEffect(() => {
    // Filter data based on filter object
    const filtered = data.filter(employee =>  employee.id == employeeIdFilter  ||
employee.name.toLowerCase()   == nameFilter.toLowerCase()||
      employee.department.toLowerCase()  == departmentFilter.toLowerCase()
  );
  if(filtered.length === 0 ){
    setFilteredData(data);
  }else{
    setFilteredData(filtered);
  }
    setCurrentPage(1); // Reset to the first page when filter changes
  }, [employeeIdFilter,departmentFilter,nameFilter,skillFilter]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex).map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.department}</td>
        <td>{item.skills.map( item =>item.name).join(",")}</td>
      </tr>
    ));
  };

  return (
    <div className={styles["filterable-table"]}>
      <div className={styles["filter-section"]}>
      <input type="text" placeholder="Employee ID" value={employeeIdFilter} onChange={(e) => setEmployeeIdFilter(e.target.value)} />
        <input type="text" placeholder="Name" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
        <input type="text" placeholder="Department" value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} />
      </div>
      <table className={styles["data-table"]}>
        <thead >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      <div className={styles["pagination"]}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResourceTable;
