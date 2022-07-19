import React from "react";
import './regSubdivision.css'


function RegSubdivision() {


    return(
        <>
        <div className="tab-pane active" id="students" role="tabpanel" aria-labelledby="students-tab">
            <form className="formBodySubDivision">
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control"  required="" autoFocus="" placeholder="E-MAIL зав. кафедры *"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">

                            <input type="text" className="form-control" placeholder="Факультет *"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="ФИО зав. кафедры *" inputMode="text"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="rf_mobile"  data-inputmask="'mask': '+7-999-999-99-99'" className="form-control" placeholder="Телефон зав. кафедры" inputMode="text"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="password" name="password" autoComplete="new-password" required="" className="form-control" placeholder="Придумайте пароль *"/>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-auto mr-auto col-xs-12">
                        <div className="form-group">
                        <a href='/' className="btn btn-lg btn-primary btn-login">Назад</a>
                        </div>
                    </div>
                    <div className="col-auto ml-auto col-xs-12">
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

export default RegSubdivision;