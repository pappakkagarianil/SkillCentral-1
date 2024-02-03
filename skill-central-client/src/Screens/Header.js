import styles from '../Styles/Header.module.css'
export default function Header({name}){
    // const skills = ["Angular","Javascript","React", "Qunit"]
    
    return (
      <div>
      {/* Main Navigation Header */}
      <header className={styles["app-header"]}>
        <div className="logo">Skill Central</div>
        <nav className="navigation">
        {name && <div className={styles["welcome-message"]}>Welcome! {name}</div>}
        </nav>
      </header>
    </div>
    )
}