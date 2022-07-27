import React from "react";
import './agreements.css'

function Agreements() {



    return(
        <>
        {/* style={{visibility: "hidden"}} */}
            <div className="contentAgreements" >
      <div className="tableAgreements">
        <div>
          <div className="deal">
            <button className="num fnt hv">№</button>
            <button className="type fnt hv" >Тип соглашения</button>
            <button className="data fnt hv">Дата начала</button>
            <button className="data fnt hv">Дата окончания</button>
            <button className="status fnt hv">Статус</button>
          </div>
        </div>
        <div className="deal">
          <button className="bt_deal hv">
            <div className="num">13</div>
            <div className="type"style={{paddingLeft: "33px"}}>Обоюдное</div>
            <div className="data">11.01.11</div>
            <div className="data">11.11.11</div>
            <div className="status">Активен</div>
          </button>
          <div>

          </div>
        </div>
        
      </div>
      <div className="agreement">
        <div className="agreement_cont" style={{borderRight: "1.5px rgba(0, 0, 0, 0.11) solid"}}>
          <div>
            <div className="agree_tab">
              <button className="agree_itm fnt hv" style={{paddingLeft: "6px"}}>Сторона соглашения</button>
              <button className="agree_itm fnt hv">Тип соглашения</button>
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
        <div className="agreement_cont agr_widt"><button className="add">Создать соглашение</button>
          <div className="add_agree">
            <input type="text" placeholder="Тип соглашения" className="form-control" required />
            <input type="data" placeholder="Дата" className="form-control" required/>
            <input type="text" placeholder="Партнеры" className="form-control" required/>
            <input type="text" placeholder="Контакты партнеров" className="form-control" required/>
            <input type="text" placeholder="Подразделения" className="form-control" required/>
            <input type="text" placeholder="Контакты подразделений" className="form-control" required/>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Agreements;