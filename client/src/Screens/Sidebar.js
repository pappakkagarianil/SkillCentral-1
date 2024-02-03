import React from 'react';
import styles from '../Styles/Sidebar.module.css'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles['sidebar']}>
      <ul className={styles["menu"]}>
        <li><Link to="/section1">Resource Management </Link></li>
        <li><Link to="/section2">Reporting </Link></li>
        <li><Link to="/section3"> Admin  </Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
