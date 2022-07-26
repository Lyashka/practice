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
      <div className="agreement">
        <div className="agreement_cont" style={{borderRight: "1.5px rgba(0, 0, 0, 0.11) solid"}}>
          <div className="agree_tab">
            <div className="agree_tab">
              <button className="agree_itm fnt hv">Вид структуры</button>
              <button className="agree_itm fnt hv">Короткое название</button>
              <button className="agree_itm fnt hv">Принять/Отклонить</button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="agreement_cont agr_widt"><button className="add">Создать соглашение</button>
          <div className="add_agree">

          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Structures;