
import './App.css';
import Sign from './components/sign/sign';
import RegPartner from './components/RegPartner/RegPartner';
import Registration from './components/registration/registration';
import RegSubdivision from './components/regSubdivision/regSubdivision';
import MainMenu from './components/mainMenu/mainMenu';
import ProfileLetiSubdivision from "./components/profileLetiSubdivision/profileLetiSubdivision";
import ProfilePartner from './components/profilePartner/profilePartner';

import {useState, useEffect} from 'react'

import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';

function App() {

  const data = [
    {
      "Email": "i1a@mail.ru", 
      "password": "123456" , 
      "name": "IlyaMerzlyakov", 
      "kategory": "partner", 
      "partners": [
                    {
                      "namePartner": ["name1", 'name2'],
                      "typeAgreement": "Обоюдное",
                      "dateStart": "11.01.11",
                      "dateEnd": "11.11.11",
                      "statusAgreement": "Active",
                      "contactsPartner": "88005553535",
                      "divisions": ["bla1", "bla2"]
                    },
                    {
                      "namePartner": ["name"]
                    }
                  ]  
      },
    {"Email": "1@mail.ru", "password": "123456" , "name": "Lopuh", "kategory": "subdivision"}
  ]

  const [itemPers, setItemPers] = useState()

  const onSign = (itemPers) => {
    setItemPers(itemPers)
  }
  console.log('__app___')
  console.log(itemPers)
  console.log('__app___')


  // window.localStorage.setItem('itemPers', JSON.stringify(itemPers))


  
  return (
   
    <div className="App"> 
      <BrowserRouter>
     
        <Routes >
        
          <Route path='/' element={<Sign data = {data} onChange={onSign}/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/partner' element={<RegPartner/>}/>
          <Route path='/subdivision' element={<RegSubdivision/>}/>
          <Route path='/mainmenu' element={<MainMenu itemPers = {itemPers}/>} />
          <Route path='/profileLetiSub' element={<ProfileLetiSubdivision/>}/>
          <Route path='/profilePartner' element={<ProfilePartner/>}/>  
        </Routes>
     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
