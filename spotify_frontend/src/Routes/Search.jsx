import { Icon } from "@iconify/react/dist/iconify.js";
import Input from "../components/shared/Input";
import LoggedInContainer from "../containers/LoggedInContainer"
import { useState ,useEffect} from "react";
import { makeAuthenticateGet } from "../utils/serverHelper";
import SongCard from "../components/shared/SongCard";

const Search = ()=>{
    const [isInputFocused,setIsInputFocused] = useState(false);
    const [searchText,setSearchText] = useState("");
    const [songData,setSongData] = useState([]);

useEffect(()=>{

    const time = setTimeout(()=>{      
        const searchSong =async()=>{
        const response = await makeAuthenticateGet("/song/get/songName/"+searchText);
        console.log(response);
        setSongData(response.data);
    }
},500);
    clearTimeout(time);
},[searchText])

    return(
        <>
        <LoggedInContainer currActiveScreen={"search"}>
            <div  className="w-full py-6">
                <div className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${
                    isInputFocused ? "border border-white" : ""
                }`}>
                    <Icon icon="ic:outline-search" className="text-xl"/>
                    <input 
                    type="text"
                    placeholder={"What do you want to listen to?"} 
                    className={"w-full bg-gray-800 focus:outline-none"}
                    onFocus={() => {
                        setIsInputFocused(true);
                    }}
                    onBlur={() => {
                        setIsInputFocused(false);
                    }}
                     value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                    }}
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            searchSong();
                        }
                    }}
                    />
                    </div>
                    {songData.length > 0 ? (
                    <div className="pt-10 space-y-3">
                        <div className="text-white">
                            Showing search results for
                            <span className="font-bold"> {searchText}</span>
                        </div>
                        {songData.map((item) => {
                            return (
                                <SongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                    ) :(
                        <div className="text-gray-400 pt-10">
                        Nothing to show here.
                    </div>
                    )}
               </div>
        </ LoggedInContainer >
        </>
    )
}

export default Search;