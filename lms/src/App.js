 
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
                 <Routes>
                         <Route exact path='/' element={<Home/>}/>
                 </Routes>
      </BrowserRouter>
      
    </>
   
  )
}

export default App;
