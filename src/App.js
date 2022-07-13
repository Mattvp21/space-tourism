import { Suspense, useState } from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology'
import Header from './components/Header';
import Loader from "./components/Loader";
import Page404 from "./components/404";



function App() {


  const [spinner, setSpinner] = useState(false);

  const handleSpinner = () =>  setSpinner(true)
  return (
    <div onLoad={handleSpinner}>
      <BrowserRouter>
        <Header/>
        {spinner ? 
          <Routes>
       
       <Route path='/' element={<Home />} />
       <Route path='/destination' element={<Destination />} />
       <Route path='/crew' element={<Crew />} />
       <Route path='/technology' element={<Technology />} />
       <Route path='*' element={<Page404 />} />
       
       </Routes>
        :
        <Loader/>}
       
       
      </BrowserRouter>
    </div>
      
   
  );
}

export default App;
