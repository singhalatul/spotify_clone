import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { useState } from 'react';
import Login from "./Routes/Login";
import LoginHome from "./Routes/LoginHome";
import UploadSong from "./Routes/UploadSongs"
import MyMusic from "./Routes/MyMusic";
import Signup from './Routes/Signup';
import Home from "./Routes/Home";
import { useCookies } from 'react-cookie';
import songContext from './contexts/songContext';
import Search from './Routes/Search';
import Library from './Routes/Library';
 

function App() {

  const [cookie,setCookie] = useCookies(["token"]);
  const [currentSong,setCurrentSong] = useState(null);
    const [soundPlayed,setSoundPlayed] = useState(null);
    const [isPaused,setIsPaused] = useState(true);
  // console.log(cookie.token);

  return (
    <>
      <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token?(
          // login routes 
          <songContext.Provider value={{currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused}}>
      <Routes>
          {/* <Route path="/" element={<div>hello</div>} /> */}
            <Route path="/home" element= {<LoginHome />} />  
            <Route path="/uploadSong" element= {<UploadSong />} />  
            <Route path="/uploadSong" element= {<UploadSong />} />  
            <Route path="/myMusic" element= {<MyMusic />} />  
            <Route path="/search" element= {<Search />} />    
            <Route path="/library" element= {<Library />} />    
                

            <Route path="*" element= {<Navigate to="/home" />} />  
      </Routes>
          </songContext.Provider>
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
