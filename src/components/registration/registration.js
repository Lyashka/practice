import React from "react";
import './registration.css'
import {Row, Container, Col} from 'react-bootstrap'
import emblemLeti from './logo-e-blue.svg'
import RegPartner from "../RegPartner/RegPartner";
import RegSubdivision from "../regSubdivision/regSubdivision";
import {useState, useEffect} from 'react'

function RegChoice() {
    
    const [todo, setTodo] = useState([
        {
            id:1,
            RegSubdivision: <RegSubdivision/>,
            status: true
        },
        {
            id:2,
            RegSubdivision: <RegPartner/>,
            status: false
        }
    ])


    const [newTodo, setNewTodo] = useState(todo)
    const [nextTodo, setNextTodo] = useState(<RegSubdivision/>)
    const [active, setActive] = useState(' active')
    const [activePart, setActivePart] = useState()
    const [activeSubdiv, setActiveSubdiv] = useState(active)
    useEffect(()=> {
            console.log('F')
            
        }, [newTodo])
        
    function onTodoFilter(status) {
        if (status === true){
            const newTodo = [...todo].filter(item => item.status === status)
            setActiveSubdiv(active)
            setActivePart('')
            setNextTodo()
            setNewTodo(newTodo)
        }else{
            const newTodo = [...todo].filter(item => item.status === status)
            setActivePart(active)
            setActiveSubdiv('')
            setNextTodo()
            setNewTodo(newTodo)
        }
    }
    
  
    return(
        <>
       
       <div>
       <div className="container">
        <div className="row">
                        <div className="mx-auto">
                            <div className="my-md-5">
                    <div className="card ">
                        <div style={{padding: "0rem 3rem",paddingTop: "1rem"}}>
                            <div className="row">
                                <div className="col-auto">
                                    <a href="/">
                                        <div style={{padding: "20px"}}>
                                            <img src={emblemLeti} className="head-img" alt=""/>
                                        </div>
                                        
                                    </a>
                                </div>
                            <h1 className="mb-3">РЕГИСТРАЦИЯ</h1>
                            </div> 
                        </div>
                        <div className="px-4 px-md-5 pb-4">
                                
    <ul className="nav nav-pills" id="registrationTabs" role="tablist" >
        <li className="nav-item active" role="presentation">
            <a className= {`nav-link marBut ${activeSubdiv}`} id="students-tab" data-toggle="tab" href="#subdivision" role="tab" aria-controls="students" aria-selected="true" aria-expanded="true"  onClick={()=>onTodoFilter(true)}>Подразделение</a>
        </li>
        <li className="nav-item" role="presentation">
            <a className={`nav-link marBut ${activePart}`} id="workers-tab" data-toggle="tab" href="#partner" role="tab" aria-controls="workers" aria-selected="false" aria-expanded="false" onClick={()=>onTodoFilter(false)}>Партнер</a>
        </li>
    </ul>
    <div className="tab-content">
    {nextTodo}
    {   
        newTodo.filter(item =>  newTodo.length < 2).map(item => (
            <div key = {item.id}>{item.RegSubdivision}</div>
            )
        ) 
    }


    </div> 

                        </div>
                    </div>
                    <div className="row mt-3">
                        {/* <div className="col">
                            <span className="text-right">
                                <a href="mailto:webmaster@etu.ru">webmaster@etu.ru</a>
                            </span>
                        </div>
                        <div className="col-auto">
                            <span className="text-right">
                                <a  href="">СПбГЭТУ «ЛЭТИ»</a>
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
       </div>
       
        </>
    )
}

export default RegChoice;