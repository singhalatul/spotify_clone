import spotify_logo from "../assets/images/spotify_logo_white.svg"
import {Howl, Howler} from 'howler';
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import {makeAuthenticateGet} from "../utils/serverHelper.js";
import SongCard from "../components/shared/SongCard.jsx";
import { useEffect, useState } from "react";

function MyMusic(){
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
            <div className="w-full h-full flex flex-row">
                {/* leftpart  */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10 overflow-auto">

                    <div>
                        {/* this div is for logo */}
                        <div className="logoDiv p-6">
                            <img src={spotify_logo} alt ="Spotify_logo" width={125}/>
                        </div>
                        {/* div for home,your library */}
                        <div className="py-5">
                            <IconText iconName={"material-symbols:home"} displayText={"Home"} active/>
                            <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"} />
                            <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
                            <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My music"} />
                        </div>
                        {/* this div is for create playlist or something */}
                        <div className="pt-5">
                            <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"} />
                            <IconText iconName={"mdi:cards-heart"} displayText={"Liked"} />
                        </div>
                    </div>
                    <div>
                        {/* this div is for button to  change lang */}
                        <div className="px-5">
                            <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center hover:border-white cursor-pointer">
                                <Icon icon="carbon:earth-europe-africa" fontSize={20}/>
                                <div className="ml-2">
                                    English
                                </div>
                            </div>
                        </div>
                    </div>
                </div >  {/* finish left part*/}
                {/* rightpart --> main content*/}
                <div className="h-full w-4/5 bg-[#121212] overflow-auto">
                    {/* this div is for navbar */}
                    <div className="navbar w-full bg-black bg-opacity-30 h-1/10 flex justify-end items-center " >
                        <div className="w-1/2 flex h-full">
                            <div className="flex w-2/3 justify-around items-center">
                                <TextWithHover displayText={"premium"} />
                                <TextWithHover displayText={"Support"} />
                                <TextWithHover displayText={"Download"} />
                                <div className="h-1/3 border border-white "></div>
                            </div>
                            <div className ="flex w-2/5 h-full items-center justify-around">
                                <TextWithHover displayText={"Upload song"} />
                                <div className="bg-white w-10 h-10  flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    Ac
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* upload song content*/}
                    <div  className="content p-8 overflow-auto">
                        <div className="text-white text-lg font-semibold pl-2 pb-5">
                            My Songs
                        </div>
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
                    </div>
                </div>
            </div>        
        </>
    )
};


export default MyMusic;