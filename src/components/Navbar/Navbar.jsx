import React from 'react'
import style from './Navbar.module.css'

const NavButtonTexts=[
  "SANITARY WARE",
  "FAUCETS",
  "SHOWRING",
  "BATH COMPONENTS",
  "RESOURCES"
]
const NavButton=({text})=>{
return (
  <div className={style.button_container}>
     <p>{text}</p>
     <img src="dropdownicon.png" alt="dropdownicon" />
  </div>
)
}
const Navbar = () => {
  
  return (
    <div className={style.nav_container}>
      <div className={style.logo_container}>
         <img src="logo.png" alt="logoimage" />
      </div>
      {
        NavButtonTexts.map((text,index)=><NavButton key={index} text={text}/>)
      }
    </div>
  )
}

export default Navbar