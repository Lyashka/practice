import React from "react";
import './agreements.css'
import {useState} from 'react'

function Agreements() {

  const [openAgreements, setOpenAgreements] = useState('');


  const openWindowAgreements = () => {
    if(openAgreements === ''){
      setOpenAgreements(<ViewWindowNewAgreements/>)
    }
    else{
      setOpenAgreements('')
    }
  }

    return(
        <>
        <div className="contentAgreements" >
      <div className="tableAgreements">
        <div>
          <div className="dealAgree">
            <button className="num fnt hv" style={{paddingLeft: "12px",paddingRight: "6px"}}>№</button>
            <button className="type fnt hv" >Тип соглашения</button>
            <button className="data fnt hv">Дата начала</button>
            <button className="data fnt hv">Дата окончания</button>
            <button className="status fnt hv">Статус</button>
          </div>
        </div>
        <div className="dealAgree" style={{flexDirection: "column"}}>
          <button className="bt_deal hv" style={{height: "50px"}}>
            <div className="num">13</div>
            <div className="type"style={{paddingLeft: "33px"}}>Обоюдное</div>
            <div className="data">11.01.11</div>
            <div className="data">11.11.11</div>
            <div className="status">Активен</div>
          </button>
          <div className="dopAgree">
            <div className="dop_itmAgree" style={{paddingLeft: "12px"}}>
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Партнеры:</div>
              <div>rrr</div>
              <div>rrr</div>
            </div>
            <div className="dop_itmAgree">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Контакты партнеров:</div>
              <div>123</div>
              <div>123</div>
            </div>
            <div className="dop_itmAgree">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Подразделения:</div>
              <div>rrr</div>
              <div>rrr</div>
            </div>
            <div className="dop_itmAgree">
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Контакты подразделений:</div>
              <div>123</div>
              <div>123</div>
            </div>
            <div className="dop_itmAgree" >
              <div style={{paddingBottom: "6px", fontWeight: "600", fontSize: "15px"}}>Статус:</div>
              <div>
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>Активен
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>Завершен
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>Продлен
                </label>
              </div>
            </div>
          </div>  
        </div>
        
      </div>
      <div className="agreementAgree">
        <div className="agreement_contAgree">
          <div className=" agr_widt"><button className="addAgree" onClick={openWindowAgreements}>Создать соглашение</button> </div>
          <div>
            <div className="agree_tab" style={{height: "60px", borderTop: "2px solid rgba(54,64,74,.15)"}}>
              <button className="agree_itm fnt hv" style={{paddingLeft: "6px"}}>Сторона соглашения</button>
              <button className="agree_itm fnt hv">Тип соглашения</button>
              <button className="fnt hv">Принять/Отклонить</button>
            </div>
            <div className="agree_tab" style={{height: "50px"}}>
              <div className="bt_deal hv">
                <div className="agree_itm" style={{paddingLeft: "6px"}}>Вид структуры</div>
                <div className="agree_itm">Короткое название</div>
                <button className="agree_bt hv">+</button>
                <button className="agree_bt hv">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     {openAgreements}
    </div>

       
        </>
    )
}

export default Agreements;





function ViewWindowNewAgreements(){


  return(
    <>
      <div className="add_agree" >
          <input type="text" placeholder="Тип соглашения" className="form-control" required />
          <input type="data" placeholder="Дата" className="form-control" required/>
          <div style={{paddingTop:"5px",paddingLeft: "10px", fontWeight: "500"}}>Контакты партнеров:</div>
          <textarea name="" id="" cols="30" rows="2" className="form-control" style={{resize: "none"}}></textarea>
          <div style={{paddingTop:"5px",paddingLeft: "10px", fontWeight: "500"}}>Контакты подразделений:</div>
          <textarea name="" id="" cols="30" rows="2" className="form-control" style={{resize: "none"}}></textarea>
          <div className="add_form_control"><input type="text" placeholder="Партнеры" class="form-control" required/><button class="form_bt hv">+</button></div>
          <div style={{paddingTop: "6px", paddingLeft:"10px"}}>Перечень партнеров:</div>
          <div className="add_form_control"><input type="text" placeholder="Подразделения" class="form-control" required/><button class="form_bt hv">+</button></div>
          <div style={{paddingTop: "6px", paddingLeft:"10px"}}>Перечень подразделений:</div>
          <button className="add" style={{width: "auto"}}>Сохранить</button>
      </div>
    </>
  )
}