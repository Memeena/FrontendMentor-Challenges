import styles from "./Header.module.css"

export default function Header({mode,handleChangeMode}){
    console.log(mode);

    const modeName = mode.toLowerCase() === 'light' ? "dark" : "light";
    const modeImg = `../../assets/${mode.toLowerCase() === "light" ? 'icon-moon.svg' : 'icon-sun.svg'}`;
    
    return (
        <header className={`${styles.header} ${styles.flex}`}>
        <h1 className={styles.heading}>dev finder</h1>
        <div className={`${styles.mode} ${styles.flex}`} onClick={handleChangeMode}>
          <p className={styles.modeName}>{modeName}</p>
          <img className={styles.modeImg} src={modeImg} alt="mode"/>
        </div>
      </header>
    )
}