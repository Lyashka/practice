import React from "react";
import './sign.css'


import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import emblemLeti from './logo-e-blue.svg'


export const Sign = ({data, onChange}) => {

    //hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = useState(false)
    const [linkOnMainMenu, setLinkOnMainMenu] = useState()
    const [itemPers, setItemPers] = useState(data)

    
    useEffect(()=>{
       
        if(emailError || passwordError){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }
    }, [emailError, passwordError])

    //functions
    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        var re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некоректный email')
        }
        else{
            setEmailError('')
        }
    
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 16) {
            setPasswordError('Пароль дожен быть не менее 3 и не более 16 символов')
            if(!e.target.value) {
                setPasswordError('Пароль дожен быть не менее 3 и не более 16 символов')
            }
        }else{
            setPasswordError('')
        }
    }

     
    const onSign = (e) => {
        // e.preventDefault();
        console.log('sign');
        data.map(function(item) {
            
                if(item.Email === email && item.password === password) {
                    console.log('true');
                    setLinkOnMainMenu('/mainMenu')
                    setItemPers(item)
                    onChange(()=>item); 
                    window.localStorage.setItem('itemPers', JSON.stringify(item))
                
                }else{
                    console.log('false')
                }
              
            }
        )
    }
    // const pers = itemPers;
    // console.log("Item pers: ")
    // console.log(pers);
    return(
        <>
                <div className="d-flex vh-100">
                    <div className="container">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-6"></div>
                    <div className="header">
                        <div className="row">
                        <div className="col-auto d-flex flex-row">
                            <div>
                                <a href="/">
                                    <img src={emblemLeti} className="head-image mr-2" alt=""/>
                                </a>
                            </div>
                            <div className="d-flex ">
                                <h1 className="mb-3">Личный кабинет</h1>
                            </div>
                        </div>
                    </div>
                    <h2>Вход</h2>

                    <form className="formBody" >
                                    
                                    <input type="hidden" name="_token" value="yptV0EEsjxYk53l3GAI25gWmZ9DCJ2KLDnWKIhHS"/>


                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <div className="form-group">
                                                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email"
                                                    className="form-control form-control-lg form-control-login mb-1" 
                                                    placeholder="Электронная почта"/>
                                                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                                                    
                                                <a href=" ">Забыли логин?</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <div className="form-group">
                                                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password"
                                                    className="form-control form-control-lg form-control-login mb-1"
                                                    placeholder="Пароль"/>
                                                    {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}

                                                <a href=" ">Восстановление пароля</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-6 col-xs-12 col-md-offset-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" name="remember"/> Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-auto col-xs-12">
                                            <div className="form-group">
                                                <a href="/registration"
                                                    className="btn btn-lg btn-outline-primary btn-login">Регистрация</a>
                                            </div>
                                        </div>
                                        <div className="col-auto ml-auto col-xs-12">
                                            <div className="form-group">
                                                <button disabled={!formValid} data-eid="login" type="submit"
                                                    className="btn btn-lg btn-primary btn-login"><a href={linkOnMainMenu} onClick={onSign} >Войти</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </form> 
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Sign;