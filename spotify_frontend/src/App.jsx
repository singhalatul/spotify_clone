import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Routes/Login";

function App() {

  return (
    <>
      <div className="w-screen h-screen">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/login" element= {<Login />} />
        
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
