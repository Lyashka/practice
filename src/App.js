
import './App.css';
import Sign from './components/sign/sign';
import RegPartner from './components/RegPartner/RegPartner';
import Registration from './components/registration/registration';
import RegSubdivision from './components/regSubdivision/regSubdivision';
import MainMenu from './components/mainMenu/mainMenu';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/partner' element={<RegPartner/>}/>
          <Route path='/subdivision' element={<RegSubdivision/>}/>
          <Route path='/mainmenu' element={<MainMenu/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
