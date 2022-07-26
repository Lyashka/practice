import React from "react";
import './mainMenu.css'
import emblemLeti from './logo-e-blue.svg'
import profEmblem from './img.png'
import {useState, useEffect} from 'react'

function MainMenu({itemPers}) {

  const [pers, setPers] = useState(JSON.parse(window.localStorage.getItem('itemPers')))
  const [category, setCategory] = useState(); 

  console.log(pers)
  useEffect(()=>{
  
  },[pers])


const onChoiceCategory = () => {
  if(pers.kategory === 'subdivision'){
    setCategory('/profileLetiSub')
  }
  else{
    setCategory('/profilePartner')
  }
}


    return(
        <>
      <div className="body-clean">

        <div className="content">
          <div className="table"></div>
          <div></div>
          <div></div>
        </div>

         <div className="head " id="header">
          <div className="containerMainMenu">
            <div className="styleDisplay">
              <div className="styleHeight">
                <button className="menu"><a className="side">☰</a></button>
              </div>
              <div>
                <img src={emblemLeti} className="head-image-main-menu" alt="#" />
              </div>
            </div>
            
            <ul>
              <div><button className="prof"><img src={profEmblem} className="styleImg" alt=""/></button></div>
                <div className="dwn-menu">
                  <div className="dwn-itm">{pers.name}</div>
                  <div className="dwn-itm ml">{pers.Email}</div>
                  <a className="dwn-itm prf btExit" href={category} onClick={onChoiceCategory}>Akk</a>
                  <a className="dwn-itm prf btExit" href='/'>Выйти</a>
                </div>  
            </ul>
          </div>
        </div>

        <div className="sidedrawer">
          <ul className="styleInline">
            <li>
              <button className="bt">Соглашения</button>
            </li>
            <li>
              <button className="bt">Совместные структуры</button>        
            </li>
            <li>
              <button className="bt">Взаимодействия</button>        
            </li>
            <li>
              <button className="bt">Мероприятия</button>        
            </li>
          </ul>
        </div> 
      </div>
        </>
    )
}
export default MainMenu;