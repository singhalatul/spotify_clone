import { useParams } from "react-router-dom";
import { makeAuthenticateGet } from "../utils/serverHelper";
import { useEffect, useState } from "react";
import SongCard from "../components/shared/SongCard";
import LoggedInContainer from "../containers/LoggedInContainer";

const SinglePlaylistView = ()=>{

    const [playListDetails,setPlaylistDetails] = useState({});
    const {playlistId} = useParams();
    
    useEffect(()=>{

        const getData = async()=>{
            const res = await makeAuthenticateGet("/playlist/get/playlist/"+playlistId);
            setPlaylistDetails(res);
            console.log(res);
        }
        getData();
    },[]);
    return(
        <>
            <LoggedInContainer curActiveScreen={"library"}>
            {playListDetails._id && (

                <div>
                    <div className="text-white text-xl pt-8 font-semibold">
                    {playListDetails.name}
                    </div>
                    <div className="pt-10 space-y-3">
                        {playListDetails.songs.map((item,index)=>(
                            <SongCard 
                            info = {item}
                            key={index}
                            playSound={()=>{}}
                            playlistId = {item._id}
                            />
                        ))}
                    </div>
                </div>
            )}
            
        </LoggedInContainer>
        </>
    )
}

export default SinglePlaylistView;