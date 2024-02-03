// Login.js

import React, { useState , useRef } from 'react';
import styles from '../Styles/LoginPage.module.css';

const LoginPage = ({handlesLogin , handlesName}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const inputNameRef = useRef();
  const handleLogin = () => {
    handlesLogin();
    const name = inputNameRef.current.value;
    handlesName(name);
  };

  return (
    
    <div className={styles["login-container"]}>
      <h2 className={styles["heading-style"]}>Login</h2>
      <form className={styles["login-form"]}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          ref={inputNameRef}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
        Login</button>
      </form>
    </div>
    
 );
};

export default LoginPage;
