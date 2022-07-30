import React from "react";
import './events.css'
import {useState} from 'react'

function Events() {

  const [eventWindow, setEventWindow] = useState('');

  const onOpenWindowEvents = () => {
    if(eventWindow === ''){
      setEventWindow(<ViewOpenWindowEvents/>)
    }
    else{
      setEventWindow('')
    }
  }

    return(
        <>
        <div className="contentEvent" >
      <div className="tableEvent">
        <div>
          <div className="deal" style={{height: "60px"}}>
            <button className="kind fnt hv" style={{paddingLeft: "12px"}}>Название</button>
            <button className="name fnt hv">Тип</button>
            <button className="short_name fnt hv">Результат</button>
            <button className="data fnt hv">Дата</button>
          </div>
        </div>
        <div className="deal" style={{flexDirection: "column"}}>
          <div className="bt_deal hv" style={{height: "50px"}}>
            <div className="kind">аыввыавыа</div>
            <div className="name" style={{paddingLeft: "13px"}}>ываыва</div>
            <div className="short_name" style={{paddingLeft: "13px"}}>уууууу</div>
            <div className="data">11.11.11</div>
          </div>
          <div className="dopEvent">
            <div className="dop_itmEvent" style={{paddingLeft: "12px"}}>
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Партнеры</div>
              <div>rrr</div>
              <div>rrr</div>
            </div>
            <div className="dop_itmEvent">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Подразделения</div>
              <div>rrr</div>
              <div>rrr</div>
            </div>
            <div className="dop_itmEvent">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Результат</div>
              <div className="add_form_control"><input type="text" placeholder="Внести Результат" className="form-control" style={{marginLeft:"0!important", marginBottom: "10px"}}/><button className="form_bt hv" style={{marginBottom: "10px"}}>+</button></div>
            </div>
          </div>   
        </div>

      </div>
      <div className="agreementEvent">
        <div className="agreement_contEvent">
          <div className=" agr_widtEvent"><button className="add" onClick={onOpenWindowEvents}>Создать мероприятие</button> </div>
          <div >
            <div className="agree_tabEvent" style={{height: "60px", borderTop: "2px solid rgba(54,64,74,.15)"}}>
              <button className="agree_itm fnt hv" style={{paddingLeft: "6px"}}>Название</button>
              <button className="agree_itm fnt hv">Тип</button>
              <button className="fnt hv">Принять/Отклонить</button>
            </div>
            <div className="agree_tabEvent" style={{flexDirection: "column"}}>
              <div className="agree_tabEvent">
              <div className="bt_deal hv">
                <div className="agree_itm">Вид структуры</div>
                <div className="agree_itm" style={{paddingLeft: "18px"}}>Короткое название</div>
                <button className="agree_bt hv">+</button>
                <button className="agree_bt hv">-</button>
              </div>
              </div>
              <div className="dopEvent" style={{border: "none!important"}}>
                <div className="dop_itmEvent" style={{paddingLeft: "12px"}}>
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize:"15px"}}>Партнеры</div>
                  <div>rrr</div>
                  <div>rrr</div>
                </div>
                <div className="dop_itmEvent">
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize:"15px"}}>Подразделения</div>
                  <div>rrr</div>
                  <div>rrr</div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
        {eventWindow}
    </div>
        </>
    )
}

export default Events;


function ViewOpenWindowEvents(){


  return(
    <>
      <div className="add_agree">
          <input type="text" placeholder="Название Мероприятия" className="form-control" required />
          <input type="text" placeholder="Тип" className="form-control" required />
          <input type="data" placeholder="Дата" className="form-control" required/>
          <div className="add_form_control"><input type="text" placeholder="Партнеры" className="form-control" required/><button className="form_bt hv">+</button></div>
            <div style={{paddingTop: "6px", paddingLeft: "10px"}}>Перечень партнеров:</div>
            <div className="add_form_control"><input type="text" placeholder="Подразделения" className="form-control" required/><button className="form_bt hv">+</button></div>
            <div style={{paddingTop: "6px", paddingLeft: "10px"}}>Перечень подразделений:</div>
          <button className="add" style={{width: "auto"}}>Сохранить</button>
        </div>
    </>
  )
}