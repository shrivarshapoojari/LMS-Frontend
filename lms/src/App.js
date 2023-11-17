 
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from './pages/Aboutus';
function App() {
  return (
    <>
      <BrowserRouter>
                 <Routes>
                         <Route exact path='/' element={<Home/>}/>
                         <Route exact path='/about' element={<Aboutus/>}/>
                 </Routes>
      </BrowserRouter>
      
    </>
   
  )
}

export default App;
