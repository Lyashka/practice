import React from "react";
import './RegPartner.css'

function RegPartner() {



    return(
        <>
            <div className="tab-pane">
            <form className="formBodyRegPartner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text"  className="form-controlRegPartner" placeholder="Название *"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-controlRegPartner" required="" autoFocus="" placeholder="E-MAIL *"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="rf_mobile"  className="form-controlRegPartner" placeholder="Телефон *" inputMode="text"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name=""  className="form-controlRegPartner" placeholder="Тип партнераства *" inputMode="text"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="password" name="password" autoComplete="new-password" required="" className="form-controlRegPartner" placeholder="Придумайте пароль *"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm mr-auto col-xs-12">
                        <div className="form-group">
                            <a href='/' className="btn btn-lg btn-primary btn-login">Назад</a>
                        </div>
                    </div>

                    <div className="col-sm ml-auto col-xs-12">
                        <div className="form-group">
                            <button data-eid="register" type="submit" className="btn btn-lg btn-primary btn-login">Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
               
                
            </form>
        </div>
        </>
    )
}
export default RegPartner;