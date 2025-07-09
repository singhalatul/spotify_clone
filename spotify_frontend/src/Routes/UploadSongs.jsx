import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import Input from "../components/shared/Input";
import {UploadWidget} from "../utils/UploadWidget";
import { useState } from "react";
import {makeAuthenticate} from "../utils/serverHelper.js";
import {useNavigate} from 'react-router-dom';

function UploadSongs(){
const [name,setName] = useState("");
const [thumbnail,setThumbnail] = useState("");
const [songUrl,setSongUrl] = useState("");
const [uploadSongFileName,setUploadSongFileName] = useState("");
const navigate = useNavigate();

const submitSong=async()=>{
    // console.log(name);
    // console.log(thumbnail);
    // console.log(songUrl);
    const data = {name,thumbnail,track:songUrl};
    const res = await makeAuthenticate('/song/create',data);
    // console.log(res);
    if(res.err){
        alert("Could not create Song");
        return;
    }
    alert("success");
    navigate("/home");

}

    // console.log(window)
    // console.log(window.cloudinary);
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
                    <div  className="content p-8 pt-0 overflow-auto">
                        <div className="text-2xl font-semibold mb-5 text-white mt-8 ">upload Your Music</div>
                        <div>
                            <div className="w-2/3 flex space-x-3">
                                <div className="w-1/2" >
                                    <Input 
                                    label="Song Name"
                                    labelClassName="text-white"
                                    placeholder="Enter Song Name"
                                    value={name}
                                    setValue={setName}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <Input 
                                    label="Thumbnail"
                                    labelClassName="text-white"
                                    placeholder="Thumbnail"
                                    value={thumbnail}
                                    setValue={setThumbnail}
                                    />
                                </div>
                            </div>
                            <div className="py-5 ">
                                {uploadSongFileName ?(
                                    <div className="w-40 font-semibold bg-white flex items-center justify-center p-4 rounded-full cursor-pointer ">{uploadSongFileName.substring(0,35)}...</div>
                                ) :(   
                                    <UploadWidget setUrl={setSongUrl} setSongFileName={setUploadSongFileName}/>
                                )
                            }
                            </div>
                            <div className="w-40 font-semibold bg-white flex items-center justify-center p-4 rounded-full cursor-pointer"
                            onClick={()=>submitSong()}
                            >Submit song</div>
                            </div>
                        </div>
                    <div>
                   </div>
                </div>
            </div>        
        </>
    )
};



export default UploadSongs;