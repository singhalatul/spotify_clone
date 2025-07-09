import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import { Howl,Howler } from "howler";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import songContext from "../contexts/songContext";

function LoggedInContainer({children,currActiveScreen}){
  
    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused
    } = useContext(songContext);
    
    // console.log(currentSong);

    const firstUpdate = useRef(true);

    useLayoutEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }

        if(!currentSong) return;
        changeSong(currentSong.track);

    },[currentSong && currentSong.track]);

    const playSound =()=>{
        if(!soundPlayed) return;
        soundPlayed.play();
    }
    const changeSong = (songSrc)=>{
            if(soundPlayed){
                soundPlayed.stop();
            }
            let sound = new Howl({
            src: [songSrc],
            html5: true,       
            });
            setSoundPlayed(sound);
            sound.play();
            setIsPaused(false);
    }
    const pauseSound = ()=>{
        soundPlayed.pause();
    }
 
        const togglePlayPause =()=>{
            if(isPaused){
                playSound();
                setIsPaused(false);
            }
            else{
                pauseSound();
                setIsPaused(true);
            }
        }

    return(
        <>
            <div className="w-full h-full bg-[#121212]">
                {/* leftpart  */}
                <div className={`${currentSong ?  "h-9/10 w-full flex" : "h-full w-full flex" }`}>
                    <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10 overflow-auto">

                    <div>
                        {/* this div is for logo */}
                        <div className="logoDiv p-6">
                            <img src={spotify_logo} alt ="Spotify_logo" width={125}/>
                        </div>
                        {/* div for home,your library */}
                        <div className="py-5">
                            <IconText iconName={"material-symbols:home"} displayText={"Home"} targetLink={"/home"} active={currActiveScreen === "home"}/>
                            <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"}  active={currActiveScreen === ""}/>
                            <IconText iconName={"icomoon-free:books"} displayText={"Library"} active={currActiveScreen === ""}/>
                            <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My music"} targetLink={"/mymusic"} active={currActiveScreen === "mymusic"}/>
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
                    </div >
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
                        {/* playlist content  */}
                        <div className="content p-8 pt-0  overflow-auto ">
                            {children}
                        </div>
                    </div>
                </div>
                {/* this is current song playing div  */}
                {
                    currentSong && 
                <div className="h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4 ">
                    <div className="w-1/4 flex items-center">
                        <img
                            // src="https://plus.unsplash.com/premium_photo-1751832244594-9815970cf8db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                            src={currentSong.thumbnail}
                            alt="currentSongThumbail"
                            className="h-14 w-14 rounded"
                            />
                        <div className="pl-4">
                            <div className="text-sm hover:underline cursor-pointer">
                                {currentSong.name}
                                {/* Curtain */}
                            </div>
                            <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                                {currentSong.artist.firstName +
                                    " " +
                                    currentSong.artist.lastName}
                                    {/* Ed Sheeren */}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center h-full flex-col items-center">
                         <div className="flex w-1/3 justify-between items-center">
                            {/* controls for the playing song go here */}
                            <Icon
                                icon="ph:shuffle-fill"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                                />
                            <Icon
                                icon="mdi:skip-previous-outline"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            />
                            <Icon
                                icon={
                                    isPaused
                                    ? "ic:baseline-play-circle"
                                    : "ic:baseline-pause-circle"
                                }
                                fontSize={50}
                                className="cursor-pointer text-gray-500 hover:text-white"
                                onClick={togglePlayPause}
                                />
                            <Icon
                                icon="mdi:skip-next-outline"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                                />
                            <Icon
                                icon="ic:twotone-repeat"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                                />
                        </div>
                    </div>
                    <div className="w-1/4 flex justify-end">Hello</div>
                </div>
                }   
            </div>        
        </>
    )
};



export default LoggedInContainer;