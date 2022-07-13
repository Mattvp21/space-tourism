import { Suspense } from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology'
import Header from './components/Header';
import Loader from "./components/Loader";



function App() {
  return (
    <Suspense fallback={Loader}>
      <BrowserRouter>
        <Header/>
        <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        
        
        </Routes>
       
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
