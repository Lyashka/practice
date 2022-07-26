import React from "react";
import './mainMenu.css'
import emblemLeti from './logo-e-blue.svg'
import profEmblem from './img.png'
import {useState, useEffect} from 'react'
import Agreements from "../agreements/agreements";
import Structures from "../structures/structures";

function MainMenu() {

  const [choice, setChoice] = useState(<Agreements/>);
  const [viewprofile, setViewProfile] = useState('')
  const [viewSidedrawer, setViewSidedrawer] = useState('')

  const onOpenWindowProfile = () => {
    if(viewprofile === '') {
      setViewProfile(<ViewWindowPrifile/>)
    }
    else{
      setViewProfile('')
    }
  }

  const onOpen = (value) => {
    setChoice(value)
  }

  const onOpenSidedrawer = () => {
    if(viewSidedrawer===''){
      setViewSidedrawer(<ViewSidedrawer onChange={onOpen}/>)
    }
    else{
      setViewSidedrawer('')
    }
  }

  
  const onOpenStructures = () => {
    setChoice(<Structures/>)
  }


    return(
        <>
      <div className="body-clean">
       
        <div className="contentMainMenu"> {choice}
          <div className="table"></div>
          <div></div>
          <div></div>
        </div>

         <div className="head " id="header">
          <div className="containerMainMenu">
            <div className="styleDisplay">
              <div className="styleHeight">
                <button className="menu side" onClick={onOpenSidedrawer}>☰</button>
              </div>
              <div>
                <img src={emblemLeti} className="head-image-main-menu" alt="#" />
              </div>
            </div>
            
            <ul>
              <div><button className="prof"><img src={profEmblem} className="styleImg" alt="" onClick={onOpenWindowProfile}/></button></div>

                {viewprofile}

            </ul>
          </div>
          </div>
              <div>
              {viewSidedrawer}
              </div>
          </div>
        </>
    )
}
export default MainMenu;







function ViewWindowPrifile(){
  const [pers, setPers] = useState(JSON.parse(window.localStorage.getItem('itemPers')))
  const [category, setCategory] = useState(); 
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
      <div className="dwn-menu">
          <div className="dwn-itm">{pers.name}</div>
          <div className="dwn-itm ml">{pers.Email}</div>
          <a className="dwn-itm prf btExit" href={category} onClick={onChoiceCategory}>Akk</a>
          <a className="dwn-itm prf btExit" href='/'>Выйти</a>
        </div>  
    </>
  )
}






function ViewSidedrawer({onChange}) {
 
  const onOpenStructures = () => {
    onChange(<Structures/>)
  }
  const onOpenAgreement = () => {
    onChange(<Agreements/>)
  }

  return(
    <>
    <div className="sidedrawer">
          <ul className="styleInline">
            <li>
              <button className="bt" onClick={onOpenAgreement}>Соглашения</button>
            </li>
            <li>
              <button className="bt" onClick={onOpenStructures}>Совместные структуры</button>        
            </li>
            <li>
              <button className="bt">Взаимодействия</button>        
            </li>
            <li>
              <button className="bt">Мероприятия</button>        
            </li>
          </ul>
        </div> 
    </>
  )
}
