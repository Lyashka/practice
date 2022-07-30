import React from "react";
import './structures.css'
import {useState} from 'react'

function Structures() {

  const [openWindowStr, setOpenWondowStr] = useState('');

  const onOpenWindowStr = () => {
      if(openWindowStr === ''){
        setOpenWondowStr(<ViewNewWindowStructures/>)
      }
      else{
        setOpenWondowStr('')
      }
  }

    return(
        <>
        <div className="contentStructures" >
      <div className="tableStructures">
        <div>
          <div className="deal" style={{height: "60px"}}>
            <button className="kind fnt hv" style={{paddingLeft: "12px"}}>Вид структуры</button>
            <button className="name fnt hv">Полное название</button>
            <button className="short_name fnt hv">Короткое название</button>
            <button className="data fnt hv">Дата</button>
          </div>
        </div>
        <div className="deal" style={{flexDirection: "column"}}>
          <div className="bt_deal hv" style={{height: "50px"}}>
            <div className="kind">Кристаллическая</div>
            <div className="name" style={{paddingLeft: "13px"}}>Бженшистикевич</div>
            <div className="short_name" style={{paddingLeft: "13px"}}>GJB</div>
            <div className="data">11.11.11</div>
          </div>
          <div className="dopStr">
            <div className="dop_itm" style={{paddingLeft: "12px"}}>
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Партнеры</div>
              <div>rrr</div>
              <div>rrr</div>
            </div>
            <div className="dop_itm">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Подразделения</div>
              <div>rrr</div>
              <div>rrr</div>
            </div>
            <div className="dop_itm">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Руководитель</div>
              <div>123</div>
              <div>123</div>
            </div>
          </div>   
        </div>

      </div>
      <div className="agreementStructures">
        <div className="agreement_cont">
          <div className=" agr_widt"><button className="add" onClick={onOpenWindowStr}>Создать Структуру</button> </div>
          <div >
            <div className="agree_tab" style={{height: "60px", borderTop: "2px solid rgba(54,64,74,.15)"}}>
              <button className="agree_itm fnt hv" style={{paddingLeft: "6px"}}>Вид структуры</button>
              <button className="agree_itm fnt hv">Полное название</button>
              <button className="agree_itm fnt hv">Короткое название</button>
              <button className="fnt hv">Принять/Отклонить</button>
            </div>
            <div className="agree_tab" style={{flexDirection: "column"}}>
              <div className="agree_tab">
              <div className="bt_deal hv">
                <div className="agree_itm">Вид структуры</div>
                <div className="agree_itm" style={{paddingLeft: "18px"}}>Бженшистикевич</div>
                <div className="agree_itm" style={{paddingLeft: "18px"}}>GJB</div>
                <button className="agree_bt hv">+</button>
                <button className="agree_bt hv">-</button>
              </div>
              </div>
              <div className="dopStr" style={{border: "none!important"}}>
                <div className="dop_itm" style={{paddingLeft: "12px"}}>
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Партнеры</div>
                  <div>rrr</div>
                  <div>rrr</div>
                </div>
                <div className="dop_itm">
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Подразделения</div>
                  <div>rrr</div>
                  <div>rrr</div>
                </div>
                <div className="dop_itm">
                  <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Руководитель</div>
                  <div>123</div>
                  <div>123</div>
                </div>
              </div>  
            </div>       
          </div>
        </div>
        
      </div>
        {openWindowStr}
    </div>
        </>
    )
}

export default Structures;


function ViewNewWindowStructures(){


  return(
    <>
    <div className="add_agree">
        <input type="text" placeholder="Тип соглашения" className="form-controlStr" required />
        <input type="data" placeholder="Дата" className="form-controlStr" required/>
        <div className="add_form_controlStr"><input type="text" placeholder="Партнеры" className="form-controlStr" required/><button className="form_bt hv">+</button></div>
        <div style={{paddingTop: "6px", paddingLeft: "10px"}}>Перечень партнеров:</div>
        <div className="add_form_controlStr"><input type="text" placeholder="Подразделения" className="form-controlStr" required/><button className="form_bt hv">+</button></div>
        <div style={{paddingTop: "6px", paddingLeft: "10px"}}>Перечень подразделений:</div>
        <input type="text" placeholder="Руководитель" className="form-controlStr" required/>
        <button className="add " style={{width: "auto"}}>Сохранить</button>
      </div>
      </>
  )
}