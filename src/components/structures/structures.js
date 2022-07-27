import React from "react";
import './structures.css'

function Structures() {


    return(
        <>
             <div className="contentStructures">
      <div className="tableStructures">
        <div>
          <div className="deal">
            <button className="kind fnt hv">Вид структуры</button>
            <button className="name fnt hv">Полное название</button>
            <button className="short_name fnt hv">Короткое название</button>
            <button className="data fnt hv">Дата</button>
          </div>
        </div>
        <div className="deal">
          <button className="bt_deal hv">
            <div className="kind">Кристаллическая</div>
            <div className="name" style={{paddingLeft: "13px"}}>Бженшистикевич</div>
            <div className="short_name" style={{paddingLeft: "13px"}}>GJB</div>
            <div className="data">11.11.11</div>
          </button>
          <div>

          </div>
        </div>
        
      </div>
      <div className="agreementStructures">
        <div className="agreement_cont" style={{borderRight: "1.5px rgba(0, 0, 0, 0.11) solid"}}>
          <div >
            <div className="agree_tab" style={{height: "60px"}}>
              <button className="agree_itm fnt hv" style={{paddingLeft: "6px"}}>Вид структуры</button>
              <button className="agree_itm fnt hv">Короткое название</button>
              <button className="fnt hv">Принять/Отклонить</button>
            </div>
            <div className="agree_tab" style={{height: "50px"}}>
              <div className="bt_deal hv">
                <div className="agree_itm">Вид структуры</div>
                <div className="agree_itm" style={{paddingLeft: "18px"}}>Короткое название</div>
                <button className="agree_bt hv">+</button>
                <button className="agree_bt hv">-</button>
              </div>
            </div>
          </div>
        </div>
        <div className="agreement_cont agr_widt"><button className="add">Создать структуру</button>
          <div className="add_agree">
            <input type="text" placeholder="Тип соглашения" className="form-control" required />
            <input type="data" placeholder="Дата" className="form-control" required/>
            <input type="text" placeholder="Партнеры" className="form-control" required/>
            <input type="text" placeholder="Подразделения" className="form-control" required/>
            <input type="text" placeholder="Руководитель" className="form-control" required/>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Structures;