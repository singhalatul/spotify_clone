import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import Input from "../components/shared/Input";
import {UploadWidget} from "../utils/UploadWidget";


function UploadSongs(){
    console.log(window)
    console.log(window.cloudinary);
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
                                {/* <TextWithHover displayText={"Upload song"} /> */}
                                <UploadWidget />
                                <div className="bg-white w-10 h-10  flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    Ac
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* upload song content*/}
                    <div  className="content p-8 pt-0 overflow-auto"></div>
                   <div className="text-2xl font-semibold mb-5 text-white mt-8 ">
                    upload
                   </div>
                   <div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2" >
                            <Input 
                            label="Song Name"
                            labelClassName="text-white"
                            placeholder="Enter Song Name"
                            />
                        </div>
                        <div className="w-1/2">
                            <Input 
                            label="Thumbnail"
                            labelClassName="text-white"
                            placeholder="Thumbnail"
                            />
                        </div>
                    </div>
                   </div>
                </div>
            </div>        
        </>
    )
};



export default UploadSongs;