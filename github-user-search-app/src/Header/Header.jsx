

export default function Header({mode}){
    console.log(mode)

    const modeImg = `../../assets/${mode === "light" ? 'icon-sun.svg' : 'icon-moon.svg'}`
    return (
        <header className="header">
        <h1 className="heading">dev finder</h1>
        <div className="mode">
          <p className="mode-name">{mode}</p>
          <img className="mode-img" src={modeImg} alt="mode"/>
        </div>
      </header>
    )
}