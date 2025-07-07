import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Login from "./Routes/Login";
import LoginHome from "./Routes/LoginHome";
import UploadSong from "./Routes/UploadSongs"
import Signup from './Routes/Signup';
import Home from "./Routes/Home";
import { useCookies } from 'react-cookie';


function App() {
  const [cookie,setCookie] = useCookies(["token"])
  console.log(cookie.token);

  return (
    <>
      <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token?(
          // login routes 
      <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/home" element= {<LoginHome />} />  
          <Route path="/uploadSong" element= {<UploadSong />} />  

          <Route path="*" element= {<Navigate to="/home" />} />  
      </Routes>
        ) :(
          // logout routes 
          <Routes>
            <Route path="/home" element= {<Home />} />  
            <Route path="/login" element= {<Login />} />
            <Route path="/signup" element= {<Signup />} />
            <Route path="*" element= {<Navigate to="/login" />} />  
          </Routes>
        )
      }
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
