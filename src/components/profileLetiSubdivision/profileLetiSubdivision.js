import React from "react";
import './profileLetiSubdivision.css'
import Svg from './svg.svg'

function ProfileLetiSubdivision() {


    return(
        <>
        <div className="bodyProfLeiSub">
            <div className="headerProfLeiSub wdth">
    <div >

        {Svg}

    </div>
    <div className="hd1 dispInline">Профиль Подразделения</div>
    <div className="hd2"><a href='/mainMenu'>Выйти</a></div>
  </div>

    <div className="contentProfLeiSub wdth">
      <div className="cont1">
        <div className="cont1_itm">Информационнные системмы и технологии</div>
        <div className="cont1_itm short">"ИСИТ"</div>
      </div>
      <div className="dispFlex">Факультет: <div className="margLeft">Компьютерные технологии информатики</div></div>
      <div className="dispFlex">Направления разработок: <div className="ml10px">Игры, Боты, и т.д.</div></div>
    </div>

    <div className="contentProfLeiSub wdth">
      <div className="cont1">Контакты</div>
        <div className="flex_rovv wdth">
        <div className="cont2 paddRight">
          <div className="fontsize20px">Почта зав. кафедрой</div>
          <input type="email" placeholder="Mail" className="input"/>
        </div>
        <div className="cont2">
          <div  className="fontsize20px">Телефон зав. кафедрой</div>
          <input type="text" placeholder="" className="input"/></div>
        </div>
    </div>  
    
    <div className="contentProfLeiSub wdth">
        <div className="cont2">
          <div  className="fontsize20px">Сайт</div>
          <input type="text" placeholder="" className="input"/>
        </div>
    </div>
    
    <div className="contentProfLeiSub wdth">
      <div className="flex_rovv wdth">
        <div className="cont2 dispFlex fontsizeai">ФИО зав. кафедрой: 
        <input type="text" placeholder="" className="input mlw"/>
        </div>
      </div>
    </div>
     
    <div className="saveProfLeiSub"><button className="save_btn">Сохранить</button></div>
    </div>
        </>
    )
}

export default ProfileLetiSubdivision;