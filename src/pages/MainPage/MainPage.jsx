import React from 'react'
import style from './MainPage.module.css'
import Crousel from '../../components/Crousel/Crousel'
const MainPage = () => {

  return (
    <div className={style.main_container}>
         <div className={style.crousel_container}>
          <Crousel/>
         </div>
    </div>
  )
}

export default MainPage;