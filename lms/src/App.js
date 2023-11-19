 
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from './pages/Aboutus';
import SignIn from './pages/SignIn';
 
function App() {
  return (
    <>
      <BrowserRouter>
                 <Routes>
                         <Route exact path='/' element={<Home/>}/>
                         <Route exact path='/about' element={<Aboutus/>}/>
                         <Route exact path='/signup' element={<Signup/>}/>
                         <Route exact path='/login' element={<SignIn/>}/>
                         <Route exact path='*' element={<Notfound/>}/>
                 </Routes>
      </BrowserRouter>
      
    </>
   
  )
}

export default App;
