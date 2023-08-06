import React from 'react'
import Home from "./Pages/Home";
import CountryDetail from './Pages/CountryDetail';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/countries/:countryCode' element={<CountryDetail/>}/>
              <Route path="*" element={ <h1>404 Page Not Found!</h1>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
