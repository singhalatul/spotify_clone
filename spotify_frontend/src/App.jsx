import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Routes/Login";
import Signup from './Routes/Signup';
import Home from "./Routes/Home";

function App() {

  return (
    <>
      <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/home" element= {<Home />} />
        
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
