import React from "react";
import './interactions.css'
import {useState} from 'react'

function Interactions() {

  const [openWindowInteractions, setOpenWindowInteractions] = useState('');

  const onOpenWindowInteractions = () =>{
    if(openWindowInteractions === ''){
      setOpenWindowInteractions(<ViewWindowInteractions/>)
    }
    else{
      setOpenWindowInteractions('')
    }
  }

    return(
        <>
        <div className="contentInteractions" >
      <div className="tableInteractions">
        <div>
          <div className="deal" style={{height: "60px"}}>
            <button className="kind fnt hv" style={{paddingLeft: "12px"}}>Вид взаимодействия</button>
            <button className="name fnt hv">Тема</button>
            <button className="short_name fnt hv">Срок</button>
            <button className="data fnt hv">Дата</button>
          </div>
        </div>
        <div className="deal" style={{flexDirection: "column"}}>
          <button className="bt_deal hv" style={{height: "50px"}}>
            <div className="kind">Кристаллическая</div>
            <div className="name" style={{paddingLeft: "13px"}}>Бженшистикевич</div>
            <div className="short_name" style={{paddingLeft: "13px"}}>12 месяцев</div>
            <div className="data">11.11.11</div>
          </button>
          <div className="dopIntera">
            <div className="dop_itmInt" style={{paddingLeft: "12px"}}>
              <div style={{paddingBottom: "6px", fontWeight:"600", fontSize: "15px"}}>Партнер</div>
              <div>rrr</div>
            </div>
            <div className="dop_itmInt">
              <div style={{paddingBottom: "6px", fontWeight:"600", fontSize: "15px"}}>Подразделение</div>
              <div>rrr</div>
            </div>
            <div className="dop_itmInt">
              <div style={{paddingBottom: "6px", fontWeight:"600", fontSize: "15px", width: "150"}}>Основные направления разработки</div>
              <div>123</div>
              <div>123</div>
              <div>123</div>
              <div>123</div>
            </div>
            <div className="dop_itmInt">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Шифр</div>
              <div>123</div>
            </div>
            <div className="dop_itmInt">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Руководитель</div>
              <div>йцукенгш</div>
            </div>
          </div>   
        </div>

      </div>
      <div className="agreementInteractions">
        <div className="agreement_contInteractions">
          <div className=" agr_widtInt"><button className="add" onClick={onOpenWindowInteractions}>Создать Взаимодействие</button> </div>
          <div >
            <div className="agree_tabIntewra" style={{height: "60px", borderTop: "2px solid rgba(54,64,74,.15)"}}>
              <button className="agree_itm fnt hv" style={{paddingLeft: "6px"}}>Вид взаимодействия</button>
              <button className="agree_itm fnt hv">Тема</button>
              <button className="agree_itm fnt hv">Срок</button>
              <button className="fnt hv">Принять/Отклонить</button>
            </div>
            <div className="agree_tabIntewra" style={{flexDirection: "column"}}>
              <div className="agree_tabIntewra">
              <div className="bt_deal hv">
                <div className="agree_itm">rertgrtgg</div>
                <div className="agree_itm" style={{paddingLeft: "18px"}}>sdfsdsfdsfd</div>
                <div className="agree_itm" style={{paddingLeft: "20px"}}>12 мес</div>
                <button className="agree_bt hv">+</button>
                <button className="agree_bt hv">-</button>
              </div>
              </div>
              <div className="dopIntera" style={{border: "none!important"}}>
                <div className="dop_itmInt" style={{paddingLeft: "12px"}}>
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Партнер</div>
                  <div>rrr</div>
                </div>
                <div className="dop_itm">
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Подразделение</div>
                  <div>rrr</div>
                </div>
                <div className="dop_itmInt">
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px", width: "150"}}>Основные направления разработки</div>
                  <div>123</div>
                  <div>123</div>
                  <div>123</div>
                  <div>123</div>
                </div>
                <div className="dop_itmInt">
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Шифр</div>
                  <div>123</div>
                </div>
                <div className="dop_itmInt">
                  <div style={{paddingBottom: "6px", fontWeight: "600",fontSize: "15px"}}>Руководитель</div>
                  <div>йцукенгш</div>
                </div>
              </div>  
            </div> 
          </div>
        </div>
      </div>
      {openWindowInteractions}
    </div>
        </>
    )
}

export default Interactions;


function ViewWindowInteractions(){


  return(
    <>
     <div className="add_agree">
        <input type="text" placeholder="Вид взаимодействия" className="form-controlIntera" required />
            <input type="data" placeholder="Срок договора" className="form-controlIntera" required/>
            <input type="text" placeholder="Тема" className="form-controlIntera" required/>
            <input type="text" placeholder="Основное направление разработки" className="form-controlIntera" required/>
            <input type="text" placeholder="Шифр договора" className="form-controlIntera" required/>
            <div className="add_form_control"><input type="text" placeholder="Партнеры" className="form-controlIntera" required/><button className="form_bt hv">+</button></div>
            <div style={{paddingTop: "6px", paddingLeft: "10px"}}>Перечень партнеров:</div>
            <div className="add_form_control"><input type="text" placeholder="Подразделения" className="form-controlIntera" required/><button className="form_bt hv">+</button></div>
            <div style={{paddingTop: "6px", paddingLeft: "10px"}}>Перечень подразделений:</div>
            <input type="text" placeholder="Руководитель" className="form-controlIntera" required/>
        <button className="add" style={{width: "auto"}}>Сохранить</button>
      </div>
    </>
  )
}