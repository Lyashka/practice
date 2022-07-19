import React from "react";
import './mainMenu.css'
import emblemLeti from './logo-e-blue.svg'

function MainMenu() {


    return(
        <>
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
      <div>
        <button className="prof">O_O</button>
      </div>
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
      <li>
        <button className="bt"><a className="bt" href='/'>Выйти</a></button>        
      </li>
    </ul>
  </div> 
        </>
    )
}
export default MainMenu;