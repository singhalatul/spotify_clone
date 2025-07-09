import {Howl, Howler} from 'howler';
import {makeAuthenticateGet} from "../utils/serverHelper.js";
import SongCard from "../components/shared/SongCard.jsx";
import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer.jsx";


const MyMusic = ()=>{
     const [songData ,setSongData]  = useState([]);
    const[soundPlayed,setSoundPlayed] = useState(null);

    const playSound = (songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
        src: [songSrc],
        html5: true,       
        });
        setSoundPlayed(sound);
        sound.play();
    }


    useEffect(()=>{
        const getData = async () => {
            const response = await makeAuthenticateGet(
                "/song/get/mysongs"
            );
            setSongData(response.data);
        };
        getData();
    },[])

    return(
        <>
            <LoggedInContainer currActiveScreen="mymusic">
                <div className="text-white text-lg font-semibold pl-2 pb-4 pt-8">
                            My Songs                        </div>
                         <div className="space-y-3 overflow-auto">                            
                            {
                                songData.map((item,index)=>{
                                    return <SongCard 
                                    key={index}
                                    info={item} 
                                    playSound={playSound}/>
                                })
                            }
                 </div>
            </LoggedInContainer>
        </>
    )
}


export default MyMusic;