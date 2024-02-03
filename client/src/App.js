import styles from './App.module.css'
import { useState, React, useEffect } from 'react'
import LoginPage from './Screens/LoginPage'
import Sidebar from './Screens/Sidebar'
import Header from './Screens/Header'
import Navigation from './Router/Navigation'

function App() {
  const [loginFlag , setLoginFlag] = useState (false);
  const handleLogin = () => {
    setLoginFlag(true)
  }
  const [userName, setUserName] = useState("")
  const handleName = (userName) => {
    setUserName(userName)
  }
  return (
    <>
     <Header  name={userName}/>
    <div>
    {!loginFlag ?  <LoginPage  handlesLogin={handleLogin} handlesName={handleName}/> : <Navigation name={userName}/> }
    </div>
    </>
    
  )
}

export default App;
