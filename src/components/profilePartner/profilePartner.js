import React from "react";
import svgPartner from './partner.svg'
import './profilePartner.css'
import {useState} from 'react'

function ProfilePartner() {
    const [pers, setPers] = useState(JSON.parse(window.localStorage.getItem('itemPers')))


    return(
        <>
              <div className="headerPartner wdth">
    <div >

        {svgPartner}

    </div>
    <div className="hd1" style={{display: "inline"}}>Профиль Партнера</div>
    <div className="hd2"><a href="/mainMenu">Выйти</a></div>
  </div>

    <div className="contentPatner wdth">
      <div className="cont1">
        <div className="cont1_itm">Российская Буровая Компания</div>
        <div className="cont1_itm short">"OOO РБК"</div>
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>Тип партнера: <div style={{marginLeft: "10px"}}>Половой</div></div>
      <div style={{display: "flex", flexDirection: "row"}}>Направления разработок: <div style={{marginLeft: "10px"}}>Игры, Боты, и т.д.</div></div>
    </div>

    <div className="contentPatner wdth">
      <div className="cont1">Контакты</div>
        <div className="flex_rovv wdth">
        <div className="cont2" style={{paddingRight: "50px"}}>
          <div style={{fontSize: "20px"}}>Почта</div>
          <input type="email" placeholder="Mail" className="input" value={pers.Email}/>
        </div>
        <div className="cont2">
          <div  style={{fontSize: "20px"}}>Телефон</div>
          <input type="text" placeholder="" className="input"/></div>
        </div>
    </div>  
    
    <div className="contentPatner wdth">
      <div className="flex_rovv wdth">
        <div className="cont2">
          <div  style={{fontSize: "20px"}}>Адрес</div>
          <input type="text" placeholder="" className="input"/>
        </div>
      </div>
        <div className="cont2" style={{marginTop: "15px"}}>
          <div  style={{fontSize: "20px"}}>Сайт</div>
          <input type="text" placeholder="" className="input"/>
        </div>
    </div>
    
    <div className="contentPatner wdth">
      <div className="flex_rovv wdth">
        <div className="cont2" style={{fontSize: "20px", display: "flex", flexDirection: "row", alignItems: "center"}}>Руководитель организации: 
        <input type="text" placeholder="" className="input" style={{marginLeft: "10px", width: "75%"}}/>
        </div>
      </div>
      <div className="cont2" style={{marginTop: "15px"}}>
        <div  style={{fontSize: "20px"}}>Контактные лица</div>
        <textarea className="txtari" name="" id="" cols="30" rows="10" style={{resize: "none"}}></textarea>
      </div>
    </div>
     
    <div className="save"><button className="save_btn">Сохранить</button></div>
        </>
    )
}

export default ProfilePartner;