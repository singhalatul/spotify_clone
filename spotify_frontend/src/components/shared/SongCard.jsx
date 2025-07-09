import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SongCard = ({info,playSound})=>{
    const {currentSong,setCurrentSong} = useContext(songContext);
    // console.log(currentSong);
    return(
        <>
            {/* mainn div  */}
            <div className="flex hover:bg-gray-800 p-2 rounded-sm"  onClick={()=>{
                setCurrentSong(info);
            }}> 
                <div className="w-12 h-12 bg-cover bg-center"style={{
                    backgroundImage:`url("${info.thumbnail}")`
                }}>
                </div>
                <div className="flex w-full">
                    <div className="text-white flex flex-col justify-center items-start pl-4 w-5/6 ">
                        <div className="cursor-pointer hover:underline">{info.name}</div>
                        <div className="text-xs text-gray-400 cursor-pointer hover:underline">{info.artist.firstName + info.artist.lastName}</div>
                    </div>
                    <div className="w-1/6 flex justify-center items-center text-gray-400 text-sm">
                        <div>3:44</div>
                        {/* <div className="flex justify-center items-center text-gray-400 text-lg pl-3">...</div> */}
                    </div>
                </div>
            </div> {/*end main div */}
        </>
    )
}
export default SongCard;